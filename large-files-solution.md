# Handling Large Files for GitHub Pages

Your portfolio contains at least one file that exceeds GitHub's standard file size limits:
- `images/digital/FINAL illustrator.pdf` (123MB)

GitHub has the following limitations:
- Files >100MB are rejected
- Repositories should ideally be kept under 1GB

Here are three options to handle this situation:

## Option 1: Compress the PDF Files

You can reduce the file size of large PDFs using online tools or software like Adobe Acrobat:

1. Use an online service like [ILovePDF](https://www.ilovepdf.com/compress_pdf) or [Smallpdf](https://smallpdf.com/compress-pdf)
2. Choose "Medium compression" to maintain reasonable quality
3. Download the compressed file and replace the original
4. Make sure to update any references if the filename changes

## Option 2: Use Git LFS (Large File Storage)

Git LFS is an extension that helps with large files:

1. Install Git LFS from [git-lfs.github.com](https://git-lfs.github.com/)
2. In your repository, run:
   ```bash
   git lfs install
   git lfs track "*.pdf"
   git add .gitattributes
   git commit -m "Configure Git LFS for PDF files"
   ```
3. Then add and commit your files normally
4. Note: GitHub has a bandwidth limit for LFS, but it should be sufficient for a portfolio site

## Option 3: Host Large Files Elsewhere and Link

For the most reliable solution:

1. Upload large PDFs to a cloud storage service:
   - Google Drive
   - Dropbox
   - Microsoft OneDrive
   
2. Get a direct download or viewer link

3. Modify your code to use these external links:
   ```javascript
   // Example modification
   <a href="#" onclick="window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view', '_blank'); return false;" class="pdf-view-btn">View Project</a>
   ```

4. This approach separates your large media files from your code repository

For your immediate issue with `FINAL illustrator.pdf`, Option 3 is recommended since this file is particularly large (123MB). 