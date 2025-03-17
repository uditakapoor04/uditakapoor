# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying this portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio website files ready to deploy

## Steps to Deploy

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the + icon in the top right corner and select "New repository"
3. Name your repository (e.g., "udita-portfolio" or similar)
4. Add a description (optional)
5. Choose "Public" repository
6. Click "Create repository"

### 2. Initialize Git and Push Your Code

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize a Git repository in your project folder
git init

# Add all files to be committed
git add .

# Commit the files
git commit -m "Initial commit"

# Add the GitHub repository as a remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push your code to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab at the top)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. After a few minutes, your site will be published at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### 4. Verify Your Website is Live

1. GitHub will display the URL where your site is published in the GitHub Pages section
2. Visit the URL to make sure your website is displayed correctly
3. Test all functionality, especially:
   - Portfolio items opening correctly
   - PDF viewing working properly
   - Contact form submission

### 5. Making Updates

To update your website after making changes locally:

```bash
# Add changed files
git add .

# Commit the changes
git commit -m "Description of changes made"

# Push the changes to GitHub
git push
```

Your GitHub Pages site will automatically update after a few minutes.

## Troubleshooting

- **404 errors for PDF files**: Make sure all PDF file paths are correct and there are no spaces in the filenames
- **Blank pages**: Check browser console for errors
- **Contact form issues**: Verify FormSubmit.co configuration is correct

## IMPORTANT: Large Files

GitHub has a file size limit of 100MB. If any of your PDF files are larger than this, consider:

1. Compressing them to reduce file size
2. Hosting them elsewhere (like Google Drive) and linking to them
3. Using Git LFS (Large File Storage) if necessary 