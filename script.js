document.addEventListener('DOMContentLoaded', function() {
    // The loading screen will handle body visibility, so we don't need this code
    // document.body.style.opacity = "1";
    // document.body.style.visibility = "visible";
    // document.body.classList.add('loaded');
    
    console.log('DOM content loaded');
    
    // Find the Visual Illustration portfolio item
    const visualItem = document.querySelector('.portfolio-item[data-id="visual-illustration"]');
    
    if (visualItem) {
        // Remove any existing click handlers by cloning the element
        const newItem = visualItem.cloneNode(true);
        visualItem.parentNode.replaceChild(newItem, visualItem);
        
        // Add our custom click handler only
        newItem.addEventListener('click', function() {
            // Here you would put the custom modal code
            // ... (the custom modal creation code from above)
        });
    }
    
    // Portfolio Data with correct image paths
    const portfolioData = [
        {
            id: "digital-design",
            category: "ready-to-wear",
            displayCategory: "Digital Design",
            title: "DKNY & Kate Spade Mood Boards",
            year: "2023",
            description: "A collection of digital mood boards exploring urban minimalism and playful sophistication for iconic fashion brands.",
            tools: ["Adobe Illustrator", "Photoshop", "Procreate", "Digital Color Theory", "Trend Analysis"],
            image: "./images/T9R3VI.webp",
            backupImage: "https://via.placeholder.com/800x600?text=DKNY+Mood+Boards",
            detailedDescription: "This project involved creating comprehensive mood boards for DKNY and Kate Spade, focusing on upcoming seasonal trends. The DKNY boards emphasized clean lines, monochromatic palettes, and urban functionality, while the Kate Spade designs explored playful color combinations and whimsical pattern applications.",
            gallery: [
                "./images/T9R3VI.webp",
                "./images/091b30536c345bbad3031934211a76ae.jpg",
                "./images/OIP (5).jpg",
                "./images/AdobeStock_150583573_Editorial_Use_Only-683x1024.jpeg",
                "./images/OIP (4).jpg"
            ]
        },
        {
            id: "visual-illustration",
            category: "couture",
            displayCategory: "Visual Illustration",
            title: "Fashion Forecast Trends",
            year: "2023",
            description: "Hand-drawn illustrations predicting upcoming seasonal trends with a focus on innovative silhouettes and textures.",
            tools: ["Traditional Media", "Digital Rendering", "Color Theory", "Fashion Forecasting", "Mixed Media"],
            image: "./images/Screenshot 2025-03-13 211955.png",
            backupImage: "https://via.placeholder.com/800x600?text=Fashion+Forecast",
            detailedDescription: "This trend forecast involved analyzing global runway shows, street style, and cultural movements to predict upcoming fashion directions. The hand-drawn illustrations focused on exaggerated proportions, asymmetrical detailing, and innovative fabric combinations. The portfolio includes several detailed projects such as Madeleine Vionnet study, Diesel collection, and the Bespoke Royalty Udaipur project.",
            showPdfsOnly: true,
            pdfs: [
                {
                    path: "./images/visual.pdf/Madeleine Vionnet Udita Kapoor .pdf",
                    title: "Madeleine Vionnet Study",
                    description: "An in-depth analysis of Madeleine Vionnet's pioneering approach to bias cut and draping techniques."
                },
                {
                    path: "./images/visual.pdf/Kapoor- Diesel collection.pdf",
                    title: "Diesel Collection",
                    description: "A contemporary design collection inspired by Diesel's urban aesthetic and innovative fabric treatments."
                },
                {
                    path: "./images/visual.pdf/FINAL PROJECT.pdf",
                    title: "Final Project",
                    description: "Comprehensive fashion design project showcasing integrated design concepts and execution."
                },
                {
                    path: "./images/visual.pdf/FF211-Bespoke Royalty Udaipur.pdf",
                    title: "Bespoke Royalty Udaipur",
                    description: "Luxury design project inspired by the royal heritage and craftsmanship of Udaipur."
                }
            ]
        },
        {
            id: "draping",
            category: "accessories",
            displayCategory: "Draping",
            title: "Princess Line Dress",
            year: "2024",
            description: "Experimental draping techniques utilized to create structured yet flowing princess line dresses.",
            tools: ["Muslin", "Pattern Making", "3D Form Analysis", "Garment Construction", "Technical Drawing"],
            image: "./images/OIP (5).jpg",
            backupImage: "https://via.placeholder.com/800x600?text=Princess+Line+Dress",
            detailedDescription: "This draping project explored the classic princess line silhouette with contemporary design elements. Using premium muslin on dress forms, I developed a series of variations that maintain the elegant structured bodice while experimenting with different necklines and skirt volumes.",
            gallery: [
                "./images/OIP (5).jpg",
                "./images/091b30536c345bbad3031934211a76ae.jpg",
                "./images/T9R3VI.webp",
                "./images/AdobeStock_150583573_Editorial_Use_Only-683x1024.jpeg",
                "./images/OIP (4).jpg"
            ]
        },
        {
            id: "global-fashion",
            category: "sustainable",
            displayCategory: "Global Fashion",
            title: "Textile Research",
            year: "2022",
            description: "An exploration of traditional and innovative textile techniques from various cultures, examining sustainability practices.",
            tools: ["Material Analysis", "Cultural Studies", "Sustainable Practices", "Fabric Manipulation", "Textile Documentation"],
            image: "./images/AdobeStock_150583573_Editorial_Use_Only-683x1024.jpeg",
            backupImage: "https://via.placeholder.com/800x600?text=Textile+Research",
            detailedDescription: "This comprehensive research project documented textile traditions from five different regions, with a focus on sustainable practices that have been embedded in cultural techniques for centuries.",
            gallery: [
                "./images/AdobeStock_150583573_Editorial_Use_Only-683x1024.jpeg",
                "./images/T9R3VI.webp",
                "./images/091b30536c345bbad3031934211a76ae.jpg",
                "./images/OIP (5).jpg",
                "./images/OIP (4).jpg"
            ]
        }
    ];

    // Portfolio item click handler
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-id');
            const project = portfolioData.find(p => p.id === projectId);

            if (project) {
                // Special handling for Visual Illustration with custom HTML
                if (projectId === "visual-illustration") {
                    // Create custom modal and completely bypass the standard modal
                    
                    // Add custom styles if not already added
                    if (!document.getElementById('visualIllustrationStyles')) {
                        const styles = document.createElement('style');
                        styles.id = 'visualIllustrationStyles';
                        styles.textContent = `
                        :root {
                            --primary-color: #0a0a0a;
                            --secondary-color: #121212;
                            --accent-gradient: linear-gradient(135deg, #333333, #888888);
                            --text-color: #f8f8f8;
                            --border-radius: 8px;
                            --box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                        }
                        
                        .custom-modal-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, 0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 1000;
                            opacity: 0;
                            visibility: hidden;
                            transition: opacity 0.3s ease, visibility 0.3s ease;
                            overflow-y: auto;
                        }
                        
                        .custom-modal-overlay.open {
                            opacity: 1;
                            visibility: visible;
                        }
                        
                        .modal-container {
                            max-width: 1400px;
                            width: 95%;
                            margin: 40px auto;
                            background: #1a1a1a;
                            border-radius: var(--border-radius);
                            overflow: hidden;
                            box-shadow: var(--box-shadow);
                            transition: transform 0.3s ease;
                            max-height: 90vh;
                            overflow-y: auto;
                        }
                        
                        .modal-header {
                            background-color: var(--primary-color);
                            color: white;
                            padding: 24px 32px;
                            position: relative;
                            border-bottom: 3px solid #444444;
                        }
                        
                        .modal-meta {
                            display: flex;
                            gap: 16px;
                            margin-top: 8px;
                        }
                        
                        .modal-category, .modal-year {
                            font-size: 14px;
                            background: rgba(255,255,255,0.1);
                            padding: 4px 12px;
                            border-radius: 20px;
                            backdrop-filter: blur(5px);
                        }
                        
                        .modal-body {
                            padding: 32px;
                            width: 100%;
                        }
                        
                        .modal-main-image {
                            width: 100%;
                            height: 400px;
                            background-color: #151515;
                            border-radius: var(--border-radius);
                            margin-bottom: 32px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        .slideshow-container {
                            width: 100%;
                            height: 100%;
                            position: relative;
                        }
                        
                        .slideshow-slide {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            transition: opacity 1s ease-in-out;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                        .slideshow-slide.active {
                            opacity: 1;
                        }
                        
                        .slideshow-slide img {
                            max-width: 100%;
                            max-height: 100%;
                            object-fit: contain;
                        }
                        
                        .modal-section {
                            margin-bottom: 32px;
                            animation: fadeIn 0.6s ease-in-out;
                        }
                        
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        
                        .modal-section h3 {
                            margin-bottom: 16px;
                            font-size: 20px;
                            position: relative;
                            padding-bottom: 8px;
                        }
                        
                        .modal-section h3::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 60px;
                            height: 3px;
                            background: var(--accent-gradient);
                            transition: width 0.3s ease;
                        }
                        
                        .modal-section:hover h3::after {
                            width: 100px;
                        }
                        
                        .pdf-grid {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 20px;
                            margin-top: 10px;
                        }
                        
                        .pdf-card {
                            border: 1px solid #333;
                            border-radius: 8px;
                            overflow: hidden;
                            transition: transform 0.3s, box-shadow 0.3s;
                            background-color: #202020;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        }
                        
                        .pdf-card:hover {
                            transform: translateY(-8px) scale(1.02);
                            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                            border-color: #ffffff;
                        }
                        
                        .pdf-thumbnail {
                            height: 220px;
                            background-color: #2a2a2a;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        .pdf-thumbnail::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
                            opacity: 0;
                            transition: opacity 0.3s ease;
                        }
                        
                        .pdf-card:hover .pdf-thumbnail::after {
                            opacity: 1;
                        }
                        
                        .pdf-thumbnail img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: transform 0.5s ease;
                        }
                        
                        .pdf-card:hover .pdf-thumbnail img {
                            transform: scale(1.05);
                        }
                        
                        .pdf-overlay-icon {
                            position: absolute;
                            top: 10px;
                            right: 10px;
                            background-color: rgba(255, 87, 87, 0.8);
                            color: white;
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 16px;
                            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                            z-index: 2;
                        }
                        
                        .pdf-content {
                            padding: 16px;
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .pdf-title {
                            font-size: 18px;
                            font-weight: 500;
                            margin-bottom: 8px;
                            color: #fff;
                        }
                        
                        .pdf-description {
                            font-size: 14px;
                            line-height: 1.5;
                            -webkit-line-clamp: 3;
                            color: #aaa;
                            margin-bottom: 16px;
                            flex-grow: 1;
                        }
                        
                        .pdf-view-btn {
                            display: inline-block;
                            background-color: transparent;
                            color: #ffffff;
                            padding: 10px 18px;
                            border-radius: 4px;
                            text-decoration: none;
                            font-weight: 500;
                            transition: all 0.3s;
                            border: 1px solid #555555;
                            text-align: center;
                            margin-top: auto;
                        }
                        
                        .pdf-view-btn:hover {
                            background: var(--accent-gradient);
                            color: white;
                            transform: translateX(5px);
                            border-color: transparent;
                        }
                        
                        /* Tooltip styles */
                        .tooltip {
                            position: relative;
                        }
                        
                        .tooltip .tooltip-text {
                            visibility: hidden;
                            width: 200px;
                            background-color: #333;
                            color: #fff;
                            text-align: center;
                            border-radius: 6px;
                            padding: 10px;
                            position: absolute;
                            z-index: 1;
                            bottom: 125%;
                            left: 50%;
                            margin-left: -100px;
                            opacity: 0;
                            transition: opacity 0.3s;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                            font-size: 14px;
                            pointer-events: none;
                        }
                        
                        .tooltip:hover .tooltip-text {
                            visibility: visible;
                            opacity: 1;
                        }
                        
                        /* Custom scrollbar */
                        ::-webkit-scrollbar {
                            width: 10px;
                        }
                        
                        ::-webkit-scrollbar-track {
                            background: #1a1a1a;
                        }
                        
                        ::-webkit-scrollbar-thumb {
                            background: #444;
                            border-radius: 5px;
                        }
                        
                        ::-webkit-scrollbar-thumb:hover {
                            background: #888888;
                        }
                        
                        /* Progress bar */
                        .progress-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 5px;
                            background: rgba(255,255,255,0.1);
                        }
                        
                        .progress-bar {
                            height: 100%;
                            background: linear-gradient(90deg, #333333, #888888);
                            width: 0%;
                            transition: width 0.5s linear;
                        }
                        
                        /* Toast notification */
                        .toast {
                            position: fixed;
                            bottom: 20px;
                            right: 20px;
                            background-color: #333;
                            color: #fff;
                            padding: 10px 20px;
                            border-radius: 5px;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                            z-index: 1000;
                            opacity: 0;
                            transform: translateY(20px);
                            transition: opacity 0.3s, transform 0.3s;
                        }
                        
                        .toast.show {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        
                        /* Close button */
                        .custom-modal-close {
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            background: none;
                            border: none;
                            color: white;
                            font-size: 24px;
                            cursor: pointer;
                            z-index: 10;
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            background-color: rgba(0, 0, 0, 0.5);
                            transition: background-color 0.3s ease;
                        }
                        
                        .custom-modal-close:hover {
                            background-color: rgba(255, 255, 255, 0.1);
                        }
                        
                        @media (max-width: 768px) {
                            .modal-container {
                                width: 98%;
                                margin: 20px auto;
                            }
                            
                            .modal-body {
                                padding: 20px;
                            }
                            
                            .pdf-grid {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 12px;
                            }
                            
                            .pdf-thumbnail {
                                height: 140px;
                            }
                            
                            .pdf-title {
                                font-size: 14px;
                            }
                            
                            .pdf-description {
                                font-size: 12px;
                                -webkit-line-clamp: 2;
                            }
                            
                            .pdf-view-btn {
                                padding: 6px 10px;
                                font-size: 12px;
                            }
                        }
                        
                        @media (max-width: 480px) {
                            .pdf-grid {
                                grid-template-columns: 1fr;
                            }
                            
                            .pdf-thumbnail {
                                height: 180px;
                            }
                            
                            .modal-body {
                                padding: 20px 15px;
                            }
                        }
                        `;
                        document.head.appendChild(styles);
                    }
                    
                    // Create custom modal overlay
                    const modalOverlay = document.createElement('div');
                    modalOverlay.className = 'custom-modal-overlay';
                    modalOverlay.id = 'customModalOverlay';
                    
                    // Insert the custom HTML
                    modalOverlay.innerHTML = `
                    <div class="modal-container">
                        <button class="custom-modal-close" id="customModalClose">&times;</button>
                        <div class="modal-header">
                            <h2>Visual Design</h2>
                        </div>
                        
                        <div class="modal-body">
                            <div class="modal-main-image">
                                <div class="slideshow-container">
                                    <div class="slideshow-slide active">
                                        <img src="./images/Screenshot 2025-03-13 211955.png" alt="Fashion Forecast Main Image">
                                    </div>
                                    <div class="progress-container">
                                        <div class="progress-bar" style="width: 0%;"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Description</h3>
                                <p>This trend forecast involved analyzing global runway shows, street style, and cultural movements to predict upcoming fashion directions. The hand-drawn illustrations focused on exaggerated proportions, asymmetrical detailing, and innovative fabric combinations. The portfolio includes several detailed projects such as Madeleine Vionnet study, Diesel collection, and the Bespoke Royalty Udaipur project.</p>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Portfolio</h3>
                                <div class="pdf-grid" id="projectGrid">
                                    <!-- 1. Diesel Collection (first) -->
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-13 214034.png" alt="Diesel Collection">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Diesel Collection</h4>
                                            <p class="pdf-description">A contemporary design collection inspired by Diesel's urban aesthetic and innovative fabric treatments.</p>
                                            <a href="#" onclick="openPdf('images/visual.pdf/Kapoor- Diesel collection.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                    
                                    <!-- 2. Madeleine Vionnet Study -->
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-13 212240.png" alt="Madeleine Vionnet Study">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Madeleine Vionnet Study</h4>
                                            <p class="pdf-description">An in-depth analysis of Madeleine Vionnet's pioneering approach to bias cut and draping techniques.</p>
                                            <a href="#" onclick="openPdf('images/visual.pdf/Madeleine Vionnet Udita Kapoor .pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                    
                                    <!-- 3. Bespoke Royalty Udaipur -->
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-13 212509.png" alt="Bespoke Royalty Udaipur">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Bespoke Royalty Udaipur</h4>
                                            <p class="pdf-description">Luxury design project inspired by the royal heritage and craftsmanship of Udaipur.</p>
                                            <a href="#" onclick="openPdf('images/visual.pdf/FF211-Bespoke Royalty Udaipur.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                    
                                    <!-- 4. Final Project -->
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-13 212559.png" alt="Final Project">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Final Project</h4>
                                            <p class="pdf-description">Comprehensive fashion design project showcasing integrated design concepts and execution.</p>
                                            <a href="#" onclick="openPdf('images/visual.pdf/FINAL PROJECT.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    
                    // Add to document
                    document.body.appendChild(modalOverlay);
                    
                    // Show modal
                    setTimeout(() => {
                        modalOverlay.classList.add('open');
                    }, 10);
                    
                    // Initialize custom modal functionality
                    const customModalClose = document.getElementById('customModalClose');
                    const progressBar = modalOverlay.querySelector('.progress-bar');
                    
                    // Progress bar animation
                    setTimeout(() => {
                        progressBar.style.width = '100%';
                    }, 50);
                    
                    // Intersection Observer for sections animation
                    const sections = modalOverlay.querySelectorAll('.modal-section');
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                            }
                        });
                    }, { threshold: 0.1 });
                    
                    // Set initial state and observe each section
                    sections.forEach(section => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        observer.observe(section);
                    });
                    
                    // Close modal when clicking X - return to portfolio
                    customModalClose.addEventListener('click', () => {
                        modalOverlay.classList.remove('open');
                        setTimeout(() => {
                            document.body.removeChild(modalOverlay);
                        }, 300);
                    });
                    
                    // Close modal when clicking outside - return to portfolio
                    modalOverlay.addEventListener('click', (e) => {
                        if (e.target === modalOverlay) {
                            modalOverlay.classList.remove('open');
                            setTimeout(() => {
                                document.body.removeChild(modalOverlay);
                            }, 300);
                        }
                    });
                    
                    // Don't go further - we want to completely bypass the standard modal
                    return;
                } else if (projectId === "digital-design") {
                        // Add custom styles if not already added
                        if (!document.getElementById('digitalDesignStyles')) {
                            const styles = document.createElement('style');
                            styles.id = 'digitalDesignStyles';
                            styles.textContent = `
                            :root {
                                --primary-color: #0a0a0a;
                                --secondary-color: #121212;
                                --accent-gradient: linear-gradient(135deg, #333333, #888888);
                                --text-color: #f8f8f8;
                                --border-radius: 8px;
                                --box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                            }
                            
                            .custom-modal-overlay {
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: rgba(0, 0, 0, 0.9);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                z-index: 1000;
                                opacity: 0;
                                visibility: hidden;
                                transition: opacity 0.3s ease, visibility 0.3s ease;
                                overflow-y: auto;
                            }
                            
                            .custom-modal-overlay.open {
                                opacity: 1;
                                visibility: visible;
                            }
                            
                            .modal-container {
                                max-width: 1400px;
                                width: 95%;
                                margin: 40px auto;
                                background: #1a1a1a;
                                border-radius: var(--border-radius);
                                overflow: hidden;
                                box-shadow: var(--box-shadow);
                                transition: transform 0.3s ease;
                                max-height: 90vh;
                                overflow-y: auto;
                            }
                            
                            .modal-header {
                                background-color: var(--primary-color);
                                color: white;
                                padding: 24px 32px;
                                position: relative;
                                border-bottom: 3px solid #444444;
                            }
                            
                            .modal-body {
                                padding: 32px;
                                width: 100%;
                            }
                            
                            .modal-main-image {
                                width: 100%;
                                height: 400px;
                                background-color: #151515;
                                border-radius: var(--border-radius);
                                margin-bottom: 32px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                overflow: hidden;
                                position: relative;
                            }
                            
                            .slideshow-container {
                                width: 100%;
                                height: 100%;
                                position: relative;
                            }
                            
                            .slideshow-slide {
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                opacity: 0;
                                transition: opacity 1s ease-in-out;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                            
                            .slideshow-slide.active {
                                opacity: 1;
                            }
                            
                            .slideshow-slide img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                            
                            .modal-section {
                                margin-bottom: 32px;
                                animation: fadeIn 0.6s ease-in-out;
                            }
                            
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(20px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                            
                            .modal-section h3 {
                                margin-bottom: 16px;
                                font-size: 20px;
                                position: relative;
                                padding-bottom: 8px;
                            }
                            
                            .modal-section h3::after {
                                content: '';
                                position: absolute;
                                left: 0;
                                bottom: 0;
                                width: 60px;
                                height: 3px;
                                background: var(--accent-gradient);
                                transition: width 0.3s ease;
                            }
                            
                            .modal-section:hover h3::after {
                                width: 100px;
                            }
                            
                            .pdf-grid {
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);
                                gap: 30px;
                                margin-top: 10px;
                            }
                            
                            .pdf-card {
                                border: 1px solid #333;
                                border-radius: 8px;
                                overflow: hidden;
                                transition: transform 0.3s, box-shadow 0.3s;
                                background-color: #202020;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                            }
                            
                            .pdf-card:hover {
                                transform: translateY(-8px) scale(1.02);
                                box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                                border-color: #ffffff;
                            }
                            
                            .pdf-thumbnail {
                                height: 220px;
                                background-color: #2a2a2a;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                overflow: hidden;
                                position: relative;
                            }
                            
                            .pdf-thumbnail::after {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
                                opacity: 0;
                                transition: opacity 0.3s ease;
                            }
                            
                            .pdf-card:hover .pdf-thumbnail::after {
                                opacity: 1;
                            }
                            
                            .pdf-thumbnail img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                transition: transform 0.5s ease;
                            }
                            
                            .pdf-card:hover .pdf-thumbnail img {
                                transform: scale(1.05);
                            }
                            
                            .pdf-overlay-icon {
                                position: absolute;
                                top: 10px;
                                right: 10px;
                                background-color: rgba(255, 87, 87, 0.8);
                                color: white;
                                width: 36px;
                                height: 36px;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 16px;
                                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                                z-index: 2;
                            }
                            
                            .pdf-content {
                                padding: 16px;
                                flex-grow: 1;
                                display: flex;
                                flex-direction: column;
                            }
                            
                            .pdf-title {
                                font-size: 18px;
                                margin-bottom: 8px;
                                color: #fff;
                                font-weight: 500;
                            }
                            
                            .pdf-description {
                                font-size: 14px;
                                color: #aaa;
                                margin-bottom: 16px;
                                flex-grow: 1;
                            }
                            
                            .pdf-view-btn {
                                display: inline-block;
                                background-color: transparent;
                                color: #ffffff;
                                padding: 10px 18px;
                                border-radius: 4px;
                                text-decoration: none;
                                font-weight: 500;
                                transition: all 0.3s;
                                border: 1px solid #555555;
                                text-align: center;
                                margin-top: auto;
                            }
                            
                            .pdf-view-btn:hover {
                                background: var(--accent-gradient);
                                color: white;
                                transform: translateX(5px);
                                border-color: transparent;
                            }
                            
                            /* Progress bar */
                            .progress-container {
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 5px;
                                background: rgba(255,255,255,0.1);
                            }
                            
                            .progress-bar {
                                height: 100%;
                                background: linear-gradient(90deg, #333333, #888888);
                                width: 0%;
                                transition: width 0.5s linear;
                            }
                            
                            /* Close button */
                            .custom-modal-close {
                                position: absolute;
                                top: 20px;
                                right: 20px;
                                background: none;
                                border: none;
                                color: white;
                                font-size: 24px;
                                cursor: pointer;
                                z-index: 10;
                                width: 40px;
                                height: 40px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 50%;
                                background-color: rgba(0, 0, 0, 0.5);
                                transition: background-color 0.3s ease;
                            }
                            
                            .custom-modal-close:hover {
                                background-color: rgba(255, 255, 255, 0.1);
                            }
                            
                            @media (max-width: 768px) {
                                .modal-container {
                                    width: 98%;
                                    margin: 20px auto;
                                }
                                
                                .modal-body {
                                    padding: 20px;
                                }
                                
                                .pdf-grid {
                                    grid-template-columns: repeat(2, 1fr);
                                    gap: 15px;
                                }
                                
                                .pdf-thumbnail {
                                    height: 160px;
                                }
                            }
                            
                            /* Stack vertically on very small screens */
                            @media (max-width: 480px) {
                                .pdf-grid {
                                    grid-template-columns: 1fr;
                                }
                                
                                .pdf-thumbnail {
                                    height: 180px;
                                }
                            }
                            `;
                            document.head.appendChild(styles);
                        }
                        
                        // Create custom modal overlay
                        const modalOverlay = document.createElement('div');
                        modalOverlay.className = 'custom-modal-overlay';
                        modalOverlay.id = 'customModalOverlay';
                        
                        // Insert the custom HTML for Digital Design
                        modalOverlay.innerHTML = `
                        <div class="modal-container">
                            <button class="custom-modal-close" id="customModalClose">&times;</button>
                            <div class="modal-header">
                                <h2>Digital Design</h2>
                            </div>
                            
                            <div class="modal-body">
                                <div class="modal-main-image">
                                    <div class="slideshow-container">
                                        <div class="slideshow-slide active">
                                            <img src="./images/Screenshot 2025-03-13 220825.png" alt="Digital Design Main Image">
                                        </div>
                                        <div class="progress-container">
                                            <div class="progress-bar" style="width: 0%;"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="modal-section">
                                    <h3>Project Description</h3>
                                    <p>This digital design portfolio showcases mood boards for iconic fashion brands including DKNY and Kate Spade. The projects focus on creative direction, color theory, and developing cohesive visual narratives. These comprehensive design presentations demonstrate technical proficiency in digital tools while maintaining a strong fashion design perspective.</p>
                                </div>
                                
                                <div class="modal-section">
                                    <h3>Project Portfolio</h3>
                                    <div class="pdf-grid" id="projectGrid">
                                        <div class="pdf-card">
                                            <div class="pdf-thumbnail">
                                                <img src="./images/Screenshot 2025-03-13 221452.png" alt="FINAL Illustrator Project">
                                                <div class="pdf-overlay-icon">
                                                    <i class="fas fa-file-pdf"></i>
                                                </div>
                                            </div>
                                            <div class="pdf-content">
                                                <h4 class="pdf-title">FINAL Illustrator Project</h4>
                                                <p class="pdf-description">A comprehensive digital design project showcasing technical mastery of Adobe Illustrator for fashion visualization.</p>
                                                <a href="#" onclick="openPdf('images/digital/FINAL illustrator.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                            </div>
                                        </div>
                                        
                                        <div class="pdf-card">
                                            <div class="pdf-thumbnail">
                                                <img src="./images/Screenshot 2025-03-13 221607.png" alt="FINAL Design Project">
                                                <div class="pdf-overlay-icon">
                                                    <i class="fas fa-file-pdf"></i>
                                                </div>
                                            </div>
                                            <div class="pdf-content">
                                                <h4 class="pdf-title">FINAL Design Project</h4>
                                                <p class="pdf-description">The final design project demonstrating integrated digital design concepts and fashion visualization techniques.</p>
                                                <a href="#" onclick="openPdf('images/digital/FINAL.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                            </div>
                                        </div>
                                        
                                        <div class="pdf-card">
                                            <div class="pdf-thumbnail">
                                                <img src="./images/Screenshot 2025-03-13 221744.png" alt="Project 1 Portfolio">
                                                <div class="pdf-overlay-icon">
                                                    <i class="fas fa-file-pdf"></i>
                                                </div>
                                            </div>
                                            <div class="pdf-content">
                                                <h4 class="pdf-title">Project 1 Portfolio</h4>
                                                <p class="pdf-description">A detailed portfolio presentation of early design concepts and digital exploration techniques.</p>
                                                <a href="#" onclick="openPdf('images/digital/Udita_Kapoor_P1.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                            </div>
                                        </div>
                                        
                                        <div class="pdf-card">
                                            <div class="pdf-thumbnail">
                                                <img src="./images/Screenshot 2025-03-13 220754.png" alt="Final Specification Project">
                                                <div class="pdf-overlay-icon">
                                                    <i class="fas fa-file-pdf"></i>
                                                </div>
                                            </div>
                                            <div class="pdf-content">
                                                <h4 class="pdf-title">Final Specification Project</h4>
                                                <p class="pdf-description">Technical specifications and detailed digital documentation for fashion design implementation.</p>
                                                <a href="#" onclick="openPdf('images/digital/UKapoor_FF245FinalSpec.PDF .pdf'); return false;" class="pdf-view-btn">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        
                        // Add to document
                        document.body.appendChild(modalOverlay);
                        
                        // Show modal
                        setTimeout(() => {
                            modalOverlay.classList.add('open');
                        }, 10);
                        
                        // Initialize custom modal functionality
                        const customModalClose = document.getElementById('customModalClose');
                        const progressBar = modalOverlay.querySelector('.progress-bar');
                        
                        // Progress bar animation
                        setTimeout(() => {
                            progressBar.style.width = '100%';
                        }, 50);
                        
                        // Intersection Observer for sections animation
                        const sections = modalOverlay.querySelectorAll('.modal-section');
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.style.opacity = '1';
                                    entry.target.style.transform = 'translateY(0)';
                                }
                            });
                        }, { threshold: 0.1 });
                        
                        // Set initial state and observe each section
                        sections.forEach(section => {
                            section.style.opacity = '0';
                            section.style.transform = 'translateY(20px)';
                            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                            observer.observe(section);
                        });
                        
                        // Close modal when clicking X - return to portfolio
                        customModalClose.addEventListener('click', () => {
                            modalOverlay.classList.remove('open');
                            setTimeout(() => {
                                document.body.removeChild(modalOverlay);
                            }, 300);
                        });
                        
                        // Close modal when clicking outside - return to portfolio
                        modalOverlay.addEventListener('click', (e) => {
                            if (e.target === modalOverlay) {
                                modalOverlay.classList.remove('open');
                                setTimeout(() => {
                                    document.body.removeChild(modalOverlay);
                                }, 300);
                            }
                        });
                        
                        // Don't go further - bypass the standard modal
                        return;
                } else if (projectId === "global-fashion") {
                    // Add custom styles if not already added
                    if (!document.getElementById('previousProjectsStyles')) {
                        const styles = document.createElement('style');
                        styles.id = 'previousProjectsStyles';
                        styles.textContent = `
                        :root {
                            --primary-color: #0a0a0a;
                            --secondary-color: #121212;
                            --accent-gradient: linear-gradient(135deg, #333333, #888888);
                            --text-color: #f8f8f8;
                            --border-radius: 8px;
                            --box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                        }
                        
                        .custom-modal-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, 0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 1000;
                            opacity: 0;
                            visibility: hidden;
                            transition: opacity 0.3s ease, visibility 0.3s ease;
                            overflow-y: auto;
                        }
                        
                        .custom-modal-overlay.open {
                            opacity: 1;
                            visibility: visible;
                        }
                        
                        .modal-container {
                            max-width: 1400px;
                            width: 95%;
                            margin: 40px auto;
                            background: #1a1a1a;
                            border-radius: var(--border-radius);
                            overflow: hidden;
                            box-shadow: var(--box-shadow);
                            transition: transform 0.3s ease;
                            max-height: 90vh;
                            overflow-y: auto;
                        }
                        
                        .modal-header {
                            background-color: var(--primary-color);
                            color: white;
                            padding: 24px 32px;
                            position: relative;
                            border-bottom: 3px solid #444444;
                        }
                        
                        .modal-body {
                            padding: 32px;
                            width: 100%;
                        }
                        
                        .modal-main-image {
                            width: 100%;
                            height: 400px;
                            background-color: #151515;
                            border-radius: var(--border-radius);
                            margin-bottom: 32px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        .slideshow-container {
                            width: 100%;
                            height: 100%;
                            position: relative;
                        }
                        
                        .slideshow-slide {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            transition: opacity 1s ease-in-out;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                        .slideshow-slide.active {
                            opacity: 1;
                        }
                        
                        .slideshow-slide img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        
                        .modal-section {
                            margin-bottom: 32px;
                            animation: fadeIn 0.6s ease-in-out;
                        }
                        
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        
                        .modal-section h3 {
                            margin-bottom: 16px;
                            font-size: 20px;
                            position: relative;
                            padding-bottom: 8px;
                        }
                        
                        .modal-section h3::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 60px;
                            height: 3px;
                            background: var(--accent-gradient);
                            transition: width 0.3s ease;
                        }
                        
                        .modal-section:hover h3::after {
                            width: 100px;
                        }
                        
                        .pdf-grid {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 30px;
                            margin-top: 10px;
                        }
                        
                        .pdf-card {
                            border: 1px solid #333;
                            border-radius: 8px;
                            overflow: hidden;
                            transition: transform 0.3s, box-shadow 0.3s;
                            background-color: #202020;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        }
                        
                        .pdf-card:hover {
                            transform: translateY(-8px) scale(1.02);
                            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                            border-color: #ffffff;
                        }
                        
                        .pdf-thumbnail {
                            height: 220px;
                            background-color: #2a2a2a;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        .pdf-thumbnail::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
                            opacity: 0;
                            transition: opacity 0.3s ease;
                        }
                        
                        .pdf-card:hover .pdf-thumbnail::after {
                            opacity: 1;
                        }
                        
                        .pdf-thumbnail img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: transform 0.5s ease;
                        }
                        
                        .pdf-card:hover .pdf-thumbnail img {
                            transform: scale(1.05);
                        }
                        
                        .pdf-overlay-icon {
                            position: absolute;
                            top: 10px;
                            right: 10px;
                            background-color: rgba(255, 87, 87, 0.8);
                            color: white;
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 16px;
                            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                            z-index: 2;
                        }
                        
                        .pdf-content {
                            padding: 16px;
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .pdf-title {
                            font-size: 18px;
                            margin-bottom: 8px;
                            color: #fff;
                            font-weight: 500;
                        }
                        
                        .pdf-description {
                            font-size: 14px;
                            color: #aaa;
                            margin-bottom: 16px;
                            flex-grow: 1;
                        }
                        
                        .pdf-view-btn {
                            display: inline-block;
                            background-color: transparent;
                            color: #ffffff;
                            padding: 10px 18px;
                            border-radius: 4px;
                            text-decoration: none;
                            font-weight: 500;
                            transition: all 0.3s;
                            border: 1px solid #555555;
                            text-align: center;
                            margin-top: auto;
                        }
                        
                        .pdf-view-btn:hover {
                            background: var(--accent-gradient);
                            color: white;
                            transform: translateX(5px);
                            border-color: transparent;
                        }
                        
                        /* Progress bar */
                        .progress-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 5px;
                            background: rgba(255,255,255,0.1);
                        }
                        
                        .progress-bar {
                            height: 100%;
                            background: linear-gradient(90deg, #333333, #888888);
                            width: 0%;
                            transition: width 0.5s linear;
                        }
                        
                        /* Close button */
                        .custom-modal-close {
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            background: none;
                            border: none;
                            color: white;
                            font-size: 24px;
                            cursor: pointer;
                            z-index: 10;
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            background-color: rgba(0, 0, 0, 0.5);
                            transition: background-color 0.3s ease;
                        }
                        
                        .custom-modal-close:hover {
                            background-color: rgba(255, 255, 255, 0.1);
                        }
                        
                        @media (max-width: 768px) {
                            .modal-container {
                                width: 98%;
                                margin: 20px auto;
                            }
                            
                            .modal-body {
                                padding: 20px;
                            }
                            
                            .pdf-grid {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 15px;
                            }
                            
                            .pdf-thumbnail {
                                height: 160px;
                            }
                        }
                        
                        /* Stack vertically on very small screens */
                        @media (max-width: 480px) {
                            .pdf-grid {
                                grid-template-columns: 1fr;
                            }
                            
                            .pdf-thumbnail {
                                height: 180px;
                            }
                        }
                        `;
                        document.head.appendChild(styles);
                    }
                    
                    // Create custom modal overlay
                    const modalOverlay = document.createElement('div');
                    modalOverlay.className = 'custom-modal-overlay';
                    modalOverlay.id = 'customModalOverlay';
                    
                    // Insert the custom HTML for Previous Projects
                    modalOverlay.innerHTML = `
                    <div class="modal-container">
                        <button class="custom-modal-close" id="customModalClose">&times;</button>
                        <div class="modal-header">
                            <h2>Previous Projects</h2>
                        </div>
                        
                        <div class="modal-body">
                            <div class="modal-main-image">
                                <div class="slideshow-container">
                                    <div class="slideshow-slide active">
                                        <img src="./images/Screenshot 2025-03-13 223958.png" alt="Previous Projects Main Image">
                                    </div>
                                    <div class="progress-container">
                                        <div class="progress-bar" style="width: 0%;"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Description</h3>
                                <p>This comprehensive research project documented textile traditions from various regions, with a focus on sustainable practices that have been embedded in cultural techniques for centuries. These projects showcase my earlier work in fashion design and exploration of different themes and techniques.</p>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Portfolio</h3>
                                <div class="pdf-grid" id="projectGrid">
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-13 224216.png" alt="Identity (artwork)">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Identity (artwork)</h4>
                                            <p class="pdf-description">An exploration of personal and cultural identity through artistic fashion expression.</p>
                                            <a href="#" onclick="openPdf('./images/privious/Identity (artwork).pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                    
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-13 224238.png" alt="Fashion Project">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Fashion Project</h4>
                                            <p class="pdf-description">A comprehensive fashion design project showcasing early design concepts and techniques.</p>
                                            <a href="#" onclick="openPdf('./images/privious/Fashion Project.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    
                    // Add to document
                    document.body.appendChild(modalOverlay);
                    
                    // Show modal
                    setTimeout(() => {
                        modalOverlay.classList.add('open');
                    }, 10);
                    
                    // Initialize custom modal functionality
                    const customModalClose = document.getElementById('customModalClose');
                    const progressBar = modalOverlay.querySelector('.progress-bar');
                    
                    // Progress bar animation
                    setTimeout(() => {
                        progressBar.style.width = '100%';
                    }, 50);
                    
                    // Intersection Observer for sections animation
                    const sections = modalOverlay.querySelectorAll('.modal-section');
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                            }
                        });
                    }, { threshold: 0.1 });
                    
                    // Set initial state and observe each section
                    sections.forEach(section => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        observer.observe(section);
                    });
                    
                    // Close modal when clicking X - return to portfolio
                    customModalClose.addEventListener('click', () => {
                        modalOverlay.classList.remove('open');
                        setTimeout(() => {
                            document.body.removeChild(modalOverlay);
                        }, 300);
                    });
                    
                    // Close modal when clicking outside - return to portfolio
                    modalOverlay.addEventListener('click', (e) => {
                        if (e.target === modalOverlay) {
                            modalOverlay.classList.remove('open');
                            setTimeout(() => {
                                document.body.removeChild(modalOverlay);
                            }, 300);
                        }
                    });
                    
                    // Don't go further - bypass the standard modal
                    return;
                } else if (projectId === "draping") {
                    // Add custom styles if not already added
                    if (!document.getElementById('drapingStyles')) {
                        const styles = document.createElement('style');
                        styles.id = 'drapingStyles';
                        styles.textContent = `
                        :root {
                            --primary-color: #0a0a0a;
                            --secondary-color: #121212;
                            --accent-gradient: linear-gradient(135deg, #333333, #888888);
                            --text-color: #f8f8f8;
                            --border-radius: 8px;
                            --box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                        }
                        
                        .custom-modal-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, 0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 1000;
                            opacity: 0;
                            visibility: hidden;
                            transition: opacity 0.3s ease, visibility 0.3s ease;
                            overflow-y: auto;
                        }
                        
                        .custom-modal-overlay.open {
                            opacity: 1;
                            visibility: visible;
                        }
                        
                        .modal-container {
                            max-width: 1400px;
                            width: 95%;
                            margin: 40px auto;
                            background: #1a1a1a;
                            border-radius: var(--border-radius);
                            overflow: hidden;
                            box-shadow: var(--box-shadow);
                            transition: transform 0.3s ease;
                            max-height: 90vh;
                            overflow-y: auto;
                        }
                        
                        .modal-header {
                            background-color: var(--primary-color);
                            color: white;
                            padding: 24px 32px;
                            position: relative;
                            border-bottom: 3px solid #444444;
                        }
                        
                        .modal-body {
                            padding: 32px;
                            width: 100%;
                        }
                        
                        .modal-main-image {
                            width: 100%;
                            height: 400px;
                            background-color: #151515;
                            border-radius: var(--border-radius);
                            margin-bottom: 32px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        .slideshow-container {
                            width: 100%;
                            height: 100%;
                            position: relative;
                        }
                        
                        .slideshow-slide {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            transition: opacity 1s ease-in-out;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                        .slideshow-slide.active {
                            opacity: 1;
                        }
                        
                        .slideshow-slide img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        
                        .modal-section {
                            margin-bottom: 32px;
                            animation: fadeIn 0.6s ease-in-out;
                        }
                        
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        
                        .modal-section h3 {
                            margin-bottom: 16px;
                            font-size: 20px;
                            position: relative;
                            padding-bottom: 8px;
                        }
                        
                        .modal-section h3::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 60px;
                            height: 3px;
                            background: var(--accent-gradient);
                            transition: width 0.3s ease;
                        }
                        
                        .modal-section:hover h3::after {
                            width: 100px;
                        }
                        
                        .pdf-grid {
                            display: grid;
                            grid-template-columns: repeat(1, 1fr);
                            gap: 30px;
                            margin-top: 10px;
                        }
                        
                        .pdf-card {
                            border: 1px solid #333;
                            border-radius: 8px;
                            overflow: hidden;
                            transition: transform 0.3s, box-shadow 0.3s;
                            background-color: #202020;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        }
                        
                        .pdf-card:hover {
                            transform: translateY(-8px) scale(1.02);
                            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                            border-color: #ffffff;
                        }
                        
                        .pdf-thumbnail {
                            height: 220px;
                            background-color: #2a2a2a;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            position: relative;
                        }
                        
                        .pdf-thumbnail::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
                            opacity: 0;
                            transition: opacity 0.3s ease;
                        }
                        
                        .pdf-card:hover .pdf-thumbnail::after {
                            opacity: 1;
                        }
                        
                        .pdf-thumbnail img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: transform 0.5s ease;
                        }
                        
                        .pdf-card:hover .pdf-thumbnail img {
                            transform: scale(1.05);
                        }
                        
                        .pdf-overlay-icon {
                            position: absolute;
                            top: 10px;
                            right: 10px;
                            background-color: rgba(255, 87, 87, 0.8);
                            color: white;
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 16px;
                            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                            z-index: 2;
                        }
                        
                        .pdf-content {
                            padding: 16px;
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .pdf-title {
                            font-size: 18px;
                            margin-bottom: 8px;
                            color: #fff;
                            font-weight: 500;
                        }
                        
                        .pdf-description {
                            font-size: 14px;
                            color: #aaa;
                            margin-bottom: 16px;
                            flex-grow: 1;
                        }
                        
                        .pdf-view-btn {
                            display: inline-block;
                            background-color: transparent;
                            color: #ffffff;
                            padding: 10px 18px;
                            border-radius: 4px;
                            text-decoration: none;
                            font-weight: 500;
                            transition: all 0.3s;
                            border: 1px solid #555555;
                            text-align: center;
                            margin-top: auto;
                        }
                        
                        .pdf-view-btn:hover {
                            background: var(--accent-gradient);
                            color: white;
                            transform: translateX(5px);
                            border-color: transparent;
                        }
                        
                        /* Progress bar */
                        .progress-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 5px;
                            background: rgba(255,255,255,0.1);
                        }
                        
                        .progress-bar {
                            height: 100%;
                            background: linear-gradient(90deg, #333333, #888888);
                            width: 0%;
                            transition: width 0.5s linear;
                        }
                        
                        /* Close button */
                        .custom-modal-close {
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            background: none;
                            border: none;
                            color: white;
                            font-size: 24px;
                            cursor: pointer;
                            z-index: 10;
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            background-color: rgba(0, 0, 0, 0.5);
                            transition: background-color 0.3s ease;
                        }
                        
                        .custom-modal-close:hover {
                            background-color: rgba(255, 255, 255, 0.1);
                        }
                        `;
                        document.head.appendChild(styles);
                    }
                    
                    // Create custom modal overlay
                    const modalOverlay = document.createElement('div');
                    modalOverlay.className = 'custom-modal-overlay';
                    modalOverlay.id = 'customModalOverlay';
                    
                    // Insert the custom HTML for Draping
                    modalOverlay.innerHTML = `
                    <div class="modal-container">
                        <button class="custom-modal-close" id="customModalClose">&times;</button>
                        <div class="modal-header">
                            <h2>Draping</h2>
                        </div>
                        
                        <div class="modal-body">
                            <div class="modal-main-image">
                                <div class="slideshow-container">
                                    <div class="slideshow-slide active">
                                        <img src="./images/Screenshot 2025-03-16 140723.png" alt="Draping">
                                    </div>
                                    <div class="progress-container">
                                        <div class="progress-bar" style="width: 0%;"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Description</h3>
                                <p>This draping project explored the classic princess line silhouette with contemporary design elements. Using premium muslin on dress forms, I developed a series of variations that maintain the elegant structured bodice while experimenting with different necklines and skirt volumes.</p>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Portfolio</h3>
                                <div class="pdf-grid" id="projectGrid">
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail">
                                            <img src="./images/Screenshot 2025-03-16 140708.png" alt="Draping Techniques">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">Princess Line Dress Draping</h4>
                                            <p class="pdf-description">A comprehensive documentation of the draping process for princess line dresses, showcasing various techniques and design iterations.</p>
                                            <a href="#" onclick="openPdf('./images/draping/Your paragraph text.pdf'); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    
                    // Add to document
                    document.body.appendChild(modalOverlay);
                    
                    // Show modal
                    setTimeout(() => {
                        modalOverlay.classList.add('open');
                    }, 10);
                    
                    // Initialize custom modal functionality
                    const customModalClose = document.getElementById('customModalClose');
                    const progressBar = modalOverlay.querySelector('.progress-bar');
                    
                    // Progress bar animation
                    setTimeout(() => {
                        progressBar.style.width = '100%';
                    }, 50);
                    
                    // Intersection Observer for sections animation
                    const sections = modalOverlay.querySelectorAll('.modal-section');
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                            }
                        });
                    }, { threshold: 0.1 });
                    
                    // Set initial state and observe each section
                    sections.forEach(section => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        observer.observe(section);
                    });
                    
                    // Close modal when clicking X - return to portfolio
                    customModalClose.addEventListener('click', () => {
                        modalOverlay.classList.remove('open');
                        setTimeout(() => {
                            document.body.removeChild(modalOverlay);
                        }, 300);
                    });
                    
                    // Close modal when clicking outside - return to portfolio
                    modalOverlay.addEventListener('click', (e) => {
                        if (e.target === modalOverlay) {
                            modalOverlay.classList.remove('open');
                            setTimeout(() => {
                                document.body.removeChild(modalOverlay);
                            }, 300);
                        }
                    });
                    
                    // Don't go further - bypass the standard modal
                    return;
                } else {
                    // Standard modal for other projects (if any remain)
                    // ... existing code ...
                }
            }
        });
    });

    // Add ESC key handler for closing any modal (keep this but modify it)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Remove standard modal closing code
            // if (modal.classList.contains('open')) {
            //    modal.classList.remove('open');
            // }
            
            // Keep custom modal closing code
            const customModal = document.getElementById('customModalOverlay');
            if (customModal && customModal.classList.contains('open')) {
                customModal.classList.remove('open');
                setTimeout(() => {
                    document.body.removeChild(customModal);
                }, 300);
            }
        }
    });

    // Portfolio filtering
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            document.querySelectorAll('.filter-button').forEach(btn => 
                btn.classList.remove('active'));
            button.classList.add('active');
            
            document.querySelectorAll('.portfolio-item').forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // EmailJS initialization
    (function() {
        emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");
    })();

    // Handle form submission without reCAPTCHA
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Check if the form should use AJAX or direct submission
        const useAjax = false; // Set to true if you want to use your Express server instead of FormSubmit
        
        if (useAjax) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(contactForm);
                const formDataObj = {};
                formData.forEach((value, key) => {
                    formDataObj[key] = value;
                });
                
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Send data to server
                fetch('/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataObj)
                })
                .then(response => response.json())
                .then(data => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    document.getElementById('formSuccess').classList.remove('hidden');
                    
                    // Reset button
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Hide success message after some time
                    setTimeout(() => {
                        document.getElementById('formSuccess').classList.add('hidden');
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    
                    // Show error message
                    document.getElementById('formError').classList.remove('hidden');
                    
                    // Reset button
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Hide error message after some time
                    setTimeout(() => {
                        document.getElementById('formError').classList.add('hidden');
                    }, 5000);
                });
            });
        } else {
            // Using FormSubmit.co (default)
            // The default HTML form will handle submission
            // Simply add a tracking mechanism for the success message
            contactForm.addEventListener('submit', function() {
                localStorage.setItem('formSubmitted', 'true');
                // FormSubmit.co will handle the actual submission and redirect
            });
        }
    }

    // Check for form submission status (after redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const formStatus = urlParams.get('form');
    
    if (formStatus === 'success' || localStorage.getItem('formSubmitted') === 'true') {
        const formSuccess = document.getElementById('formSuccess');
        if (formSuccess) {
            formSuccess.classList.remove('hidden');
            localStorage.removeItem('formSubmitted');
            
            // Hide success message after some time
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
        }
    }
    
    if (formStatus === 'error') {
        const formError = document.getElementById('formError');
        if (formError) {
            formError.classList.remove('hidden');
            
            // Hide error message after some time
            setTimeout(() => {
                formError.classList.add('hidden');
            }, 5000);
        }
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.elegant-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('currentYear')) {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }
});