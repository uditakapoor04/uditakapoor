# PDF Hosting Guide for Your Portfolio

## Problem: Large PDFs on GitHub Pages

Your portfolio site contains large PDF files that don't work properly when deployed to GitHub Pages. This happens because:

1. GitHub Pages has size limitations (recommended <10MB per file)
2. Large files load slowly in browsers
3. GitHub Pages doesn't run server-side code like your `server.js`

## Solution: Cloud Storage

The best way to handle this is to host your large PDFs on a cloud storage service and link to them from your portfolio.

### Option 1: Google Drive (Recommended)

1. **Upload PDFs to Google Drive**
   - Create a folder for your portfolio PDFs
   - Upload all PDF files
   
2. **Make PDFs publicly accessible**
   - Right-click on each PDF
   - Click "Share" → "Anyone with the link" → "Viewer"
   - Copy the sharing link
   
3. **Get the correct link format**
   - Google Drive link format: `https://drive.google.com/file/d/FILE_ID/view`
   - Find the FILE_ID in the URL (long alphanumeric string)

4. **Update your code**
   - Replace local PDF paths with Google Drive links:
   ```javascript
   // From this:
   openPdf('images/digital/FINAL.pdf');
   
   // To this:
   openPdf('https://drive.google.com/file/d/YOUR_FILE_ID/view');
   ```

### Option 2: GitHub LFS (Git Large File Storage)

If you want to keep files in your GitHub repository:

1. Install Git LFS: https://git-lfs.github.com/
2. Track your PDFs: `git lfs track "*.pdf"`
3. Add .gitattributes: `git add .gitattributes`
4. Add and commit PDFs normally

Note: GitHub LFS has storage and bandwidth limits on free accounts.

### Option 3: Dropbox, OneDrive, or AWS S3

These services also work well for file hosting. Use the direct link to the file in your `openPdf()` function.

## MongoDB Is Not Suitable

You asked about MongoDB:

- MongoDB is a database system, not a file storage solution
- It can store binary data (PDFs) as BLOBs but is not optimized for serving large files
- It requires server-side code (Node.js) which won't run on GitHub Pages
- It's overkill for this use case

## Recommended Approach

1. Use Google Drive for all PDFs over 5MB
2. Keep smaller PDFs in your GitHub repository
3. Update all PDF links to use the `openPdf()` function with cloud URLs

The updated `openPdf()` function in your `script.js` will now handle both local and cloud-hosted PDFs correctly. 