const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

// Middleware to parse form data
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a test SMTP service (for development)
// This will log the email content instead of actually sending it
let transporter;
try {
    // First attempt with a real email service
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'udita.kapoor04@gmail.com', // The Gmail account that will SEND the emails
            pass: process.env.EMAIL_PASSWORD || 'your-app-password' // Use environment variable for security
        }
    });
    
    // Verify the connection
    transporter.verify(function(error, success) {
        if (error) {
            console.error('Email service error:', error);
            console.log('Falling back to development mode (email preview only)');
            
            // Fall back to ethereal email (preview only)
            nodemailer.createTestAccount().then(account => {
                transporter = nodemailer.createTransport({
                    host: account.smtp.host,
                    port: account.smtp.port,
                    secure: account.smtp.secure,
                    auth: {
                        user: account.user,
                        pass: account.pass
                    }
                });
                console.log('Using test email account for development');
            });
        } else {
            console.log('Email server is ready to send messages');
        }
    });
} catch (error) {
    console.error('Failed to configure email transport:', error);
}

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/thank-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'thank-you.html'));
});

// Handle form submissions - note that this is a backup to FormSubmit.co
// The form in index.html is configured to use FormSubmit.co directly
app.post('/submit-form', async (req, res) => {
    try {
        console.log('Form submission received:', req.body);
        
        // Get form data
        const { name, email, subject, message } = req.body;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please fill out all fields' 
            });
        }
        
        // If email service isn't configured, just log the message
        if (!transporter) {
            console.log('No email transport available. Would have sent:');
            console.log(`To: udita.kapoor04@gmail.com`);
            console.log(`Subject: New Contact Form: ${subject}`);
            console.log(`From: ${name} (${email})`);
            console.log(`Message: ${message}`);
            
            return res.json({ 
                success: true, 
                message: 'Message processed (development mode)'
            });
        }
        
        // Email options
        const mailOptions = {
            from: '"Portfolio Website" <udita.kapoor04@gmail.com>',
            to: 'udita.kapoor04@gmail.com', // Same email to receive submissions
            replyTo: email, // The form submitter's email
            subject: `New Contact Form: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };
        
        // Send email
        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        
        console.log('Email sent:', info.messageId);
        
        // For ethereal email (development), show the preview URL
        if (info.ethereal) {
            console.log('Email preview URL:', nodemailer.getTestMessageUrl(info));
        }
        
        // Redirect to thank you page or return JSON based on request type
        if (req.headers['content-type'] === 'application/json') {
            res.json({ success: true, message: 'Message sent successfully' });
        } else {
            res.redirect('/thank-you');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Store the form data temporarily (for debugging)
        const formData = req.body;
        console.log('Failed form submission data:', formData);
        
        // Return error response based on request type
        if (req.headers['content-type'] === 'application/json') {
            res.status(500).json({ 
                success: false, 
                message: 'Failed to send message. Please try again later.'
            });
        } else {
            res.redirect('/index.html?form=error');
        }
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 