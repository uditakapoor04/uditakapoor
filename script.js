document.addEventListener('DOMContentLoaded', function() {
    // Force scroll to top on page load - override any hash navigation or browser memory
    setTimeout(() => {
        window.scrollTo(0, 0);
        // Clear any hash from URL to prevent auto-scroll
        if (window.location.hash) {
            history.replaceState(null, null, window.location.pathname);
        }
    }, 100);
    
    console.log('DOM content loaded');
    
    // Preload Versace images and styles for instant gallery opening
    addVersaceStyles();
    preloadVersaceImages();
    
    // Preload Mirrored NYC images and styles for instant gallery opening
    addMirroredNYCStyles();
    preloadMirroredNYCImages();
    
    // Preload DKNY images and styles for instant gallery opening
    addDKNYStyles();
    preloadDKNYImages();
    
    // Preload Wild & Serene images and styles for instant gallery opening
    addWildSereneStyles();
    preloadWildSereneImages();
    
    // Preload Tech Pack images and styles for instant gallery opening
    addTechPackStyles();
    preloadTechPackImages();
    
    // Preload Rustic Ocean images and styles for instant gallery opening
    addRusticOceanStyles();
    preloadRusticOceanImages();
    
    // Preload Wild and Blurry images and styles for instant gallery opening
    addWildBlurryStyles();
    preloadWildBlurryImages();
    
    // Preload Madeleine Vionnet images and styles for instant gallery opening
    addMadeleineVionnetStyles();
    preloadMadeleineVionnetImages();
    
    // Preload Bespoke Royalty Udaipur images and styles for instant gallery opening
    addBespokeRoyaltyStyles();
    preloadBespokeRoyaltyImages();
    
    // Preload Draping images and styles for instant gallery opening
    addDrapingStyles();
    preloadDrapingImages();
    
    // Preload Fashion Project images and styles for instant gallery opening
    addFashionProjectStyles();
    preloadFashionProjectImages();
    
    // Preload Identity Artwork images and styles for instant gallery opening
    addIdentityArtworkStyles();
    preloadIdentityArtworkImages();
    
    // Journal Process images and styles for instant gallery opening
    addJournalProcessStyles();
    preloadJournalProcessImages();
    
    // Resume Modal Functionality
    const resumeButton = document.getElementById('resumeButton');
    const resumeModal = document.getElementById('resumeModal');
    const resumeModalClose = document.getElementById('resumeModalClose');
    
    // We don't need to prevent default for the resume button anymore since it opens in a new tab
    // Keep the modal code for other potential uses
    if (resumeModal && resumeModalClose) {
        // Close the modal when clicking the close button
        resumeModalClose.addEventListener('click', function() {
            resumeModal.classList.remove('open');
            document.body.style.overflow = ''; // Restore body scrolling
        });
        
        // Close the modal when clicking outside the modal content
        window.addEventListener('click', function(e) {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('open');
                document.body.style.overflow = ''; // Restore body scrolling
            }
        });
        
        // Close the modal when pressing the Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && resumeModal.classList.contains('open')) {
                resumeModal.classList.remove('open');
                document.body.style.overflow = ''; // Restore body scrolling
            }
        });
    }
    
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
            description: "This digital design portfolio showcases mood boards and flats. The projects focus on creative direction, color theory, and developing cohesive visual narratives. These comprehensive design presentations demonstrate tech packs for technical proficiency in digital tools while maintaining a strong fashion design perspective.",
            tools: ["Adobe Illustrator", "Photoshop", "Procreate", "Digital Color Theory", "Trend Analysis"],
            image: "./images/T9R3VI.webp",
            backupImage: "https://via.placeholder.com/800x600?text=DKNY+Mood+Boards",
            detailedDescription: "This digital design portfolio showcases mood boards and flats. The projects focus on creative direction, color theory, and developing cohesive visual narratives. These comprehensive design presentations demonstrate tech packs for technical proficiency in digital tools while maintaining a strong fashion design perspective.",
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
                    title: "Madeleine Vionnet Study"
                },
                {
                    path: "./images/visual.pdf/Kapoor- Diesel collection.pdf",
                    title: "Diesel Collection"
                },
                {
                    path: "./images/visual.pdf/FINAL_PROJECT.pdf",
                    title: "Final Project"
                },
                {
                    path: "./images/visual.pdf/FF211-Bespoke Royalty Udaipur.pdf",
                    title: "Bespoke Royalty Udaipur"
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
            detailedDescription: "This comprehensive research project documented textile traditions from various regions, art forms, and abstract paintings with deep meaning. With a focus on sustainable practices that have been embedded in culture practices. These projects showcase my earlier work in fashion design and exploration of different themes and techniques.",
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
        // Find the "View Project" button within this portfolio item
        const viewButton = item.querySelector('.view-project-btn');
        
        // Handle click on entire portfolio item (for mobile/easier clicking)
        item.addEventListener('click', function(e) {
            // Only trigger if the click wasn't on the button (button has its own handler)
            if (!e.target.classList.contains('view-project-btn') && 
                !e.target.closest('.view-project-btn')) {
                const projectId = item.getAttribute('data-id');
                triggerModal(projectId);
            }
        });
        
        // Add specific handler for the button
        if (viewButton) {
            viewButton.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent the item click handler from firing
                const projectId = item.getAttribute('data-id');
                triggerModal(projectId);
            });
        }
    });
    
    // Function to trigger the appropriate modal based on project ID
    function triggerModal(projectId) {
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
                        background: #000;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--box-shadow);
                        transition: transform 0.3s ease;
                        max-height: 90vh;
                        overflow-y: auto;
                    }
                    
                    .modal-header {
                        background-color: #000;
                        color: white;
                        padding: 24px 32px;
                        position: relative;
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
                        background-color: #000;
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
                        border: 1px solid #000;
                        border-radius: 8px;
                        overflow: hidden;
                        transition: transform 0.3s, box-shadow 0.3s;
                        background-color: #000;
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
                        background-color: #000;
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
                        background-color: #000;
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
                        background: #000;
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        background: #000;
                        border-radius: 5px;
                    }
                    
                    ::-webkit-scrollbar-thumb:hover {
                        background: #888888;
                    }
                    
                    /* Toast notification */
                    .toast {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background-color: #000;
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
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Description</h3>
                            <p>This trend forecast involved analyzing global runway shows, street style, and cultural movements to predict upcoming fashion directions. The hand-drawn illustrations focused on exaggerated proportions, asymmetrical detailing, and innovative fabric combinations. The portfolio includes several detailed projects such as Madeleine Vionnet study, Diesel collection, and the Bespoke Royalty Udaipur project.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Portfolio</h3>
                            <div class="pdf-grid" id="projectGrid">
                                <!-- 1. Wild and Blurry Collection (first) -->
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openWildBlurryGallery(); return false;" style="cursor: pointer;">
                                        <img src="./wild and blurry/WB1.jpg" alt="Wild & Blurry Collection Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">WILD & BLURRY</h4>
                                        <a href="#" onclick="openWildBlurryGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                    </div>
                                </div>
                                
                                <!-- 2. Rustic Ocean Collection -->
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openRusticOceanGallery(); return false;" style="cursor: pointer;">
                                        <img src="./diesel/D1.jpg" alt="Rustic Ocean Collection Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">RUSTIC OCEAN</h4>
                                        <a href="#" onclick="openRusticOceanGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                    </div>
                                </div>
                                
                                <!-- 2. Madeleine Vionnet Study -->
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openMadeleineVionnetGallery(); return false;" style="cursor: pointer;">
                                        <img src="./Madeline vionnet/m1.jpg" alt="Madeleine Vionnet Collection Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">NOUVEAU BALLET</h4>
                                        <a href="#" onclick="openMadeleineVionnetGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                    </div>
                                </div>
                                
                                <!-- 3. Bespoke Royalty Udaipur -->
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openBespokeRoyaltyGallery(); return false;" style="cursor: pointer;">
                                        <img src="./udaipur/BR 1.jpg" alt="Bespoke Royalty Udaipur Collection Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">BESPOKE ROYALTY UDAIPUR</h4>
                                        <a href="#" onclick="openBespokeRoyaltyGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                    </div>
                                </div>
                                
                                <!-- 4. Journal Process -->
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openJournalProcessGallery(); return false;" style="cursor: pointer;">
                                        <img src="./journel process/1.png" alt="Journal Process Gallery Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">JOURNAL PROCESS</h4>
                                        <a href="#" onclick="openJournalProcessGallery(); return false;" class="pdf-view-btn">View Gallery</a>
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
                
                // Enhanced scroll animations with staggered timing
                const sections = modalOverlay.querySelectorAll('.modal-section');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const section = entry.target;
                            const sectionTitle = section.querySelector('h3')?.textContent;
                            
                            // Determine animation delay based on section type
                            let delay = 0;
                            if (sectionTitle?.includes('Project Portfolio')) {
                                delay = 0; // Portfolio appears first
                            } else if (sectionTitle?.includes('Project Description')) {
                                delay = 300; // Description appears after portfolio
                            }
                            
                            setTimeout(() => {
                                section.style.opacity = '1';
                                section.style.transform = 'translateY(0) scale(1)';
                            }, delay);
                        }
                    });
                }, { threshold: 0.15 });
                
                // Set initial state and observe each section with enhanced animations
                sections.forEach((section, index) => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(50px) scale(0.95)';
                    section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
                        background: #000;
                            border-radius: var(--border-radius);
                            overflow: hidden;
                            box-shadow: var(--box-shadow);
                            transition: transform 0.3s ease;
                            max-height: 90vh;
                            overflow-y: auto;
                        }
                        
                        .modal-header {
                            background-color: #000;
                            color: white;
                            padding: 24px 32px;
                            position: relative;
                        }
                        
                        .modal-body {
                            padding: 32px;
                            width: 100%;
                        }
                        
                        .modal-main-image {
                            width: 100%;
                            height: 400px;
                            background-color: #000;
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
                            object-fit: contain;
                        }
                        
                        .modal-section {
                            margin-bottom: 32px;
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
                            border: 1px solid #000;
                            border-radius: 8px;
                            overflow: hidden;
                            transition: transform 0.3s, box-shadow 0.3s;
                            background-color: #000;
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
                            background-color: #000;
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
                                </div>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Description</h3>
                                <p>This digital design portfolio showcases mood boards and flats. The projects focus on creative direction, color theory, and developing cohesive visual narratives. These comprehensive design presentations demonstrate tech packs for technical proficiency in digital tools while maintaining a strong fashion design perspective.</p>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Project Portfolio</h3>
                                <div class="pdf-grid" id="projectGrid">
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail" onclick="openWildSereneGallery(); return false;" style="cursor: pointer;">
                                            <img src="./Sailor/Wild 1 .jpg" alt="Wild & Serene Collection">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-images"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">WILD & SERENE</h4>
                                            <a href="#" onclick="openWildSereneGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                        </div>
                                    </div>
                                    
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail" onclick="openMirroredNYCGallery(); return false;" style="cursor: pointer;">
                                            <img src="./mirrored/NYC1.jpg" alt="Mirrored NYC Collection">
                                            <div class="pdf-overlay-icon">
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">MIRRORED NYC</h4>
                                            <a href="#" onclick="openMirroredNYCGallery(); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                    
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail" onclick="openDKNYGallery(); return false;" style="cursor: pointer;">
                                            <img src="./images/Screenshot 2025-03-13 221607.png" alt="DKNY Collection Preview">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-images"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">KATE SPADE DKNY COLLABORATION</h4>
                                            <a href="#" onclick="openDKNYGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                        </div>
                                    </div>
                                    
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail" onclick="openVersaceGallery(); return false;" style="cursor: pointer;">
                                            <img src="./images/Screenshot 2025-03-13 221744.png" alt="Project 1 Portfolio">
                                            <div class="pdf-overlay-icon">
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">VERSACE COLLECTION</h4>
                                            <a href="#" onclick="openVersaceGallery(); return false;" class="pdf-view-btn">View Project</a>
                                        </div>
                                    </div>
                                    
                                    <div class="pdf-card">
                                        <div class="pdf-thumbnail" onclick="openTechPackGallery(); return false;" style="cursor: pointer;">
                                            <img src="./tech pack digi/CAD DIGI 1.jpg" alt="Tech Pack Collection Preview">
                                            <div class="pdf-overlay-icon">
                                                <i class="fas fa-images"></i>
                                            </div>
                                        </div>
                                        <div class="pdf-content">
                                            <h4 class="pdf-title">TECH PACK FINAL</h4>
                                            <a href="#" onclick="openTechPackGallery(); return false;" class="pdf-view-btn">View Gallery</a>
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
                    
                    // Enhanced scroll animations with staggered timing
                    const sections = modalOverlay.querySelectorAll('.modal-section');
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const section = entry.target;
                                const sectionTitle = section.querySelector('h3')?.textContent;
                                
                                // Determine animation delay based on section type
                                let delay = 0;
                                if (sectionTitle?.includes('Project Portfolio')) {
                                    delay = 0; // Portfolio appears first
                                } else if (sectionTitle?.includes('Project Description')) {
                                    delay = 300; // Description appears after portfolio
                                }
                                
                                setTimeout(() => {
                                    section.style.opacity = '1';
                                    section.style.transform = 'translateY(0) scale(1)';
                                }, delay);
                            }
                        });
                    }, { threshold: 0.15 });
                    
                    // Set initial state and observe each section with enhanced animations
                    sections.forEach((section, index) => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(50px) scale(0.95)';
                        section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
                        background: #000;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--box-shadow);
                        transition: transform 0.3s ease;
                        max-height: 90vh;
                        overflow-y: auto;
                    }
                    
                    .modal-header {
                        background-color: #000;
                        color: white;
                        padding: 24px 32px;
                        position: relative;
                    }
                    
                    .modal-body {
                        padding: 32px;
                        width: 100%;
                    }
                    
                    .modal-main-image {
                        width: 100%;
                        height: 400px;
                        background-color: #000;
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
                        object-fit: contain;
                    }
                    
                    .modal-section {
                        margin-bottom: 32px;
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
                        border: 1px solid #000;
                        border-radius: 8px;
                        overflow: hidden;
                        transition: transform 0.3s, box-shadow 0.3s;
                        background-color: #000;
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
                        background-color: #000;
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
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Description</h3>
                            <p>This comprehensive research project documented textile traditions from various regions, art forms, and abstract paintings with deep meaning. With a focus on sustainable practices that have been embedded in culture practices. These projects showcase my earlier work in fashion design and exploration of different themes and techniques.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Portfolio</h3>
                            <div class="pdf-grid" id="projectGrid">
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openIdentityArtworkGallery(); return false;" style="cursor: pointer;">
                                        <img src="./identity artwork/Identity 1.jpg" alt="Identity Artwork Gallery Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">Identity (artwork)</h4>
                                        <a href="#" onclick="openIdentityArtworkGallery(); return false;" class="pdf-view-btn">View Gallery</a>
                                    </div>
                                </div>
                                
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openFashionProjectGallery(); return false;" style="cursor: pointer;">
                                        <img src="./fashion project/FP 1.jpg" alt="Fashion Project Gallery Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">Fashion Project</h4>
                                        <a href="#" onclick="openFashionProjectGallery(); return false;" class="pdf-view-btn">View Gallery</a>
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
                
                // Enhanced scroll animations with staggered timing
                const sections = modalOverlay.querySelectorAll('.modal-section');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const section = entry.target;
                            const sectionTitle = section.querySelector('h3')?.textContent;
                            
                            // Determine animation delay based on section type
                            let delay = 0;
                            if (sectionTitle?.includes('Project Portfolio')) {
                                delay = 0; // Portfolio appears first
                            } else if (sectionTitle?.includes('Project Description')) {
                                delay = 300; // Description appears after portfolio
                            }
                            
                            setTimeout(() => {
                                section.style.opacity = '1';
                                section.style.transform = 'translateY(0) scale(1)';
                            }, delay);
                        }
                    });
                }, { threshold: 0.15 });
                
                // Set initial state and observe each section with enhanced animations
                sections.forEach((section, index) => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(50px) scale(0.95)';
                    section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
                        background: #000;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--box-shadow);
                        transition: transform 0.3s ease;
                        max-height: 90vh;
                        overflow-y: auto;
                    }
                    
                    .modal-header {
                        background-color: #000;
                        color: white;
                        padding: 24px 32px;
                        position: relative;
                    }
                    
                    .modal-body {
                        padding: 32px;
                        width: 100%;
                    }
                    
                    .modal-main-image {
                        width: 100%;
                        height: 400px;
                        background-color: #000;
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
                        object-fit: contain;
                    }
                    
                    .modal-section {
                        margin-bottom: 32px;
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
                        border: 1px solid #000;
                        border-radius: 8px;
                        overflow: hidden;
                        transition: transform 0.3s, box-shadow 0.3s;
                        background-color: #000;
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
                        background-color: #000;
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
                                                                         <img src="./draping main/13 (1).jpg" alt="Draping">
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Description</h3>
                            <p>Draping project throughout 4 semesters explore the draping elements and techniques with contemporary design elements. Developed a series of variations like jackets, skirts, dresses with sewing techniques that maintain the elegant structured bodice while experimenting with different necklines and skirt volumes.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Portfolio</h3>
                            <div class="pdf-grid" id="projectGrid">
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openDrapingGallery(); return false;" style="cursor: pointer;">
                                        <img src="./draping main/1 (1).jpg" alt="Draping Techniques Gallery Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">DRAPING</h4>
                                        <a href="#" onclick="openDrapingGallery(); return false;" class="pdf-view-btn">View Gallery</a>
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
                
                // Enhanced scroll animations with staggered timing
                const sections = modalOverlay.querySelectorAll('.modal-section');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const section = entry.target;
                            const sectionTitle = section.querySelector('h3')?.textContent;
                            
                            // Determine animation delay based on section type
                            let delay = 0;
                            if (sectionTitle?.includes('Project Portfolio')) {
                                delay = 0; // Portfolio appears first
                            } else if (sectionTitle?.includes('Project Description')) {
                                delay = 300; // Description appears after portfolio
                            }
                            
                            setTimeout(() => {
                                section.style.opacity = '1';
                                section.style.transform = 'translateY(0) scale(1)';
                            }, delay);
                        }
                    });
                }, { threshold: 0.15 });
                
                // Set initial state and observe each section with enhanced animations
                sections.forEach((section, index) => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(50px) scale(0.95)';
                    section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
                        background: #000;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--box-shadow);
                        transition: transform 0.3s ease;
                        max-height: 90vh;
                        overflow-y: auto;
                    }
                    
                    .modal-header {
                        background-color: #000;
                        color: white;
                        padding: 24px 32px;
                        position: relative;
                    }
                    
                    .modal-body {
                        padding: 32px;
                        width: 100%;
                    }
                    
                    .modal-main-image {
                        width: 100%;
                        height: 400px;
                        background-color: #000;
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
                        object-fit: contain;
                    }
                    
                    .modal-section {
                        margin-bottom: 32px;
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
                        border: 1px solid #000;
                        border-radius: 8px;
                        overflow: hidden;
                        transition: transform 0.3s, box-shadow 0.3s;
                        background-color: #000;
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
                        background-color: #000;
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
                                                                         <img src="./draping main/13 (1).jpg" alt="Draping">
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Description</h3>
                            <p>Draping project throughout 4 semesters explore the draping elements and techniques with contemporary design elements. Developed a series of variations like jackets, skirts, dresses with sewing techniques that maintain the elegant structured bodice while experimenting with different necklines and skirt volumes.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Project Portfolio</h3>
                            <div class="pdf-grid" id="projectGrid">
                                <div class="pdf-card">
                                    <div class="pdf-thumbnail" onclick="openDrapingGallery(); return false;" style="cursor: pointer;">
                                        <img src="./draping main/1 (1).jpg" alt="Draping Techniques Gallery Preview">
                                        <div class="pdf-overlay-icon">
                                            <i class="fas fa-images"></i>
                                        </div>
                                    </div>
                                    <div class="pdf-content">
                                        <h4 class="pdf-title">DRAPING</h4>
                                        <a href="#" onclick="openDrapingGallery(); return false;" class="pdf-view-btn">View Gallery</a>
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
                
                // Enhanced scroll animations with staggered timing
                const sections = modalOverlay.querySelectorAll('.modal-section');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const section = entry.target;
                            const sectionTitle = section.querySelector('h3')?.textContent;
                            
                            // Determine animation delay based on section type
                            let delay = 0;
                            if (sectionTitle?.includes('Project Portfolio')) {
                                delay = 0; // Portfolio appears first
                            } else if (sectionTitle?.includes('Project Description')) {
                                delay = 300; // Description appears after portfolio
                            }
                            
                            setTimeout(() => {
                                section.style.opacity = '1';
                                section.style.transform = 'translateY(0) scale(1)';
                            }, delay);
                        }
                    });
                }, { threshold: 0.15 });
                
                // Set initial state and observe each section with enhanced animations
                sections.forEach((section, index) => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(50px) scale(0.95)';
                    section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
    }

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
        // Disabled EmailJS since we're using FormSubmit.co and server-side email handling
        // emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");
    })();

    // Contact form removed from HTML, so this functionality is disabled
    /*
    // Handle form submission without reCAPTCHA
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Hide any previous messages
            const formSuccess = document.getElementById('formSuccess');
            const formError = document.getElementById('formError');
            
            if (formSuccess) formSuccess.classList.add('hidden');
            if (formError) formError.classList.add('hidden');
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Sending form data:', formData);
            
            // Send data to server
            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
                if (data.success) {
                    // Show success message
                    if (formSuccess) formSuccess.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    // Show error message
                    if (formError) {
                        formError.textContent = data.message || 'Failed to send message. Please try again later.';
                        formError.classList.remove('hidden');
                    }
                }
            })
            .catch(error => {
                console.error('Error sending form:', error);
                if (formError) {
                    formError.textContent = 'An error occurred. Please try again later.';
                    formError.classList.remove('hidden');
                }
            });
        });
    }
    */

    // === Interactive 3D Dress Parallax Effect ===
    /* Fade-only mode – skip interactive rotation */
    (function() {
        // handle automatic opening after animation completes
        const attachAutoOpen = () => {
            const dressContainer = document.querySelector('.dress-3d-container');
            const loading = document.querySelector('.loading-screen');
            if(!dressContainer || !loading) return false;
            
            const hide = () => {
                loading.style.display = 'none';
                document.body.classList.add('loaded');
                document.body.style.opacity = '1';
                document.body.style.visibility = 'visible';
            };
            
            // Keep click functionality as backup
            dressContainer.addEventListener('click', hide);
            loading.addEventListener('click', hide);
            
            // Auto-open after animation completes (5 seconds for quicker access)
            setTimeout(() => {
                hide();
            }, 5000); // 5 seconds total
            
            return true;
        };

        if(!attachAutoOpen()){
            // If elements not yet present, try again after DOM ready
            document.addEventListener('DOMContentLoaded', attachAutoOpen);
        }
        return; // Skip interactive rotation
        const dressWrapper = document.querySelector('.dress-wrapper');
        const dressStage   = document.querySelector('.dress-stage');
        if (!dressWrapper || !dressStage) return; // Safety check

        // Disable any CSS-driven rotation so we can control it via JS
        dressWrapper.style.animation = 'none';

        const BASE_TILT_X = -10;           // keep slight downward tilt like before
        const MAX_ROTATE_Y = 180;          // allow full side-to-side view (front↔back)
        const MAX_ROTATE_X = 20;           // up/down tilt range

        let targetRotY = 0;
        let targetRotX = 0;

        // Track the mouse position to set rotation targets
        window.addEventListener('mousemove', (e) => {
            const percentX = (e.clientX / window.innerWidth)  - 0.5; // -0.5 → 0.5
            const percentY = (e.clientY / window.innerHeight) - 0.5; // -0.5 → 0.5
            targetRotY = percentX * MAX_ROTATE_Y * 2;      // map to ±180°
            targetRotX = BASE_TILT_X + (-percentY * MAX_ROTATE_X * 2);
            // Clamp horizontal rotation so edges are always visible
            if (targetRotY < -10) targetRotY = -10;
            if (targetRotY > 190) targetRotY = 190;
        });

        // Basic parallax on scroll (dress floats upward when scrolling down)
        window.addEventListener('scroll', () => {
            const offset = window.scrollY * -0.1; // slower than scroll speed
            dressStage.style.transform = `translateY(${offset}px)`;
        });

        // Interpolate to keep motion smooth
        let currentX = 0;
        let currentY = 0;
        let autoAngle   = 0;       // auto-rotation tracker
        let autoActive  = true;    // stops on user interaction

        // Stop auto-rotation on first mouse move
        window.addEventListener('mousemove', () => autoActive = false, { once: true });

        function animate() {
            if (autoActive) {
                autoAngle += 0.25;            // ~0.25° per frame ≈ 16s for full turn
                if (autoAngle >= 360) autoActive = false; // one full reveal, then stop
                targetRotY = autoAngle;
            }
            currentX += (targetRotX - currentX) * 0.08;
            currentY += (targetRotY - currentY) * 0.08;
            dressWrapper.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;
            requestAnimationFrame(animate);
        }
        animate();
    })();
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

// Additional backup to ensure page starts at top after all resources load
window.addEventListener('load', function() {
    // Force scroll to top after everything is loaded
    window.scrollTo(0, 0);
    // Clear any hash that might cause auto-scroll
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }
});

/**
 * Opens a PDF file in the custom PDF viewer
 * @param {string} url - Path to the PDF file
 */
function openPdf(url) {
    // Make sure url starts with a slash if it's a relative path
    if (!url.startsWith('http') && !url.startsWith('/')) {
        url = '/' + url;
    }
    
    // For local development with direct file paths
    if (url.includes('/c:/')) {
        // Use file protocol for direct file access
        window.open(url.replace('/c:/', 'file:///c:/'), '_blank');
    } else {
        // For web-hosted PDFs, ensure proper URL formatting
        // Replace spaces with %20
        url = url.replace(/ /g, '%20');
        window.open(url, '_blank');
    }
}

// PDF Handler for Resume
document.addEventListener('DOMContentLoaded', function() {
    // Get the resume button
    const resumeButton = document.querySelector('a[href*="Udita_Kapoor_Resume.pdf"]');
    
    if (resumeButton) {
        resumeButton.addEventListener('click', function(e) {
            // No need to prevent default as we want the natural link behavior with target="_blank" 
            // The PDF will open in a new tab automatically
        });
    }
});

// Resume Modal Functionality - This is a duplicate and can be removed
// as we've already handled the modal functionality at the top of the file
// document.addEventListener('DOMContentLoaded', function() {
//     const resumeButton = document.getElementById('resumeButton');
//     const resumeModal = document.getElementById('resumeModal');
//     const resumeModalClose = document.getElementById('resumeModalClose');
//     
//     if (resumeButton && resumeModal && resumeModalClose) {
//         // Open modal when resume button is clicked
//         resumeButton.addEventListener('click', function(e) {
//             e.preventDefault();
//             resumeModal.classList.add('open');
//             document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//         });
//         
//         // Close modal when X is clicked
//         resumeModalClose.addEventListener('click', function() {
//             resumeModal.classList.remove('open');
//             document.body.style.overflow = ''; // Restore scrolling
//         });
//         
//         // Close modal when clicking outside the content
//         window.addEventListener('click', function(e) {
//             if (e.target === resumeModal) {
//                 resumeModal.classList.remove('open');
//                 document.body.style.overflow = ''; // Restore scrolling
//             }
//         });
//         
//         // Close modal with Escape key
//         document.addEventListener('keydown', function(e) {
//             if (e.key === 'Escape' && resumeModal.classList.contains('open')) {
//                 resumeModal.classList.remove('open');
//                 document.body.style.overflow = ''; // Restore scrolling
//             }
//         });
//     }
// });

// Preload Versace images when page loads for instant gallery opening
let versaceImagesPreloaded = false;
const versaceImagePaths = [
    './versache/VERSACE 1.jpg',
    './versache/VERSACE 2.jpg',
    './versache/VERSACE 3.jpg'
];

function preloadVersaceImages() {
    if (versaceImagesPreloaded) return;
    
    versaceImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    versaceImagesPreloaded = true;
}

// Preload Mirrored NYC images when page loads for instant gallery opening
let mirroredNYCImagesPreloaded = false;
const mirroredNYCImagePaths = [
    './mirrored/NYC1.jpg',
    './mirrored/NYC2 .jpg',
    './mirrored/NYC4.jpg',
    './mirrored/NYC5 .jpg',
    './mirrored/NYC6.jpg',
    './mirrored/NYC7.jpg',
    './mirrored/NYC8.jpg'
];

function preloadMirroredNYCImages() {
    if (mirroredNYCImagesPreloaded) return;
    
    mirroredNYCImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    mirroredNYCImagesPreloaded = true;
}

// Add styles immediately when page loads for faster modal opening
function addVersaceStyles() {
    if (document.getElementById('versaceGalleryStyles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'versaceGalleryStyles';
    styles.textContent = `
        .versace-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .versace-modal-overlay.show {
            opacity: 1;
        }
        
        .versace-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .versace-modal-close {
            position: fixed;
            top: 20px;
            right: 30px;
            background: none;
            border: none;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            z-index: 1001;
            padding: 10px;
            line-height: 1;
            transition: opacity 0.2s ease;
        }
        
        .versace-modal-close:hover {
            opacity: 0.7;
        }
        
        .versace-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #ffffff;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: versaceEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        

        
        @keyframes versaceEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        

        
        .versace-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
                 .versace-project-gallery img {
             width: 100%;
             height: auto;
             display: block;
             object-fit: cover;
             transition: opacity 0.3s ease;
         }
        
        .image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .versace-header {
                font-size: 2.5rem;
                padding: 40px 20px 25px;
                letter-spacing: 2px;
            }
            

        }
        
        @media (max-width: 480px) {
            .versace-header {
                font-size: 2rem;
                padding: 30px 15px 20px;
                letter-spacing: 1px;
            }
            

        }
            
            .versace-project-gallery {
                gap: 30px;
                padding: 30px 15px;
            }
            
            .versace-modal-close {
                top: 15px;
                right: 20px;
                font-size: 24px;
            }
            
            .image-placeholder {
                height: 300px;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Add styles immediately when page loads for faster modal opening
function addMirroredNYCStyles() {
    if (document.getElementById('mirroredNYCGalleryStyles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'mirroredNYCGalleryStyles';
    styles.textContent = `
        .mirrored-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .mirrored-modal-overlay.show {
            opacity: 1;
        }
        
        .mirrored-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .mirrored-modal-close {
            position: fixed;
            top: 20px;
            right: 30px;
            background: none;
            border: none;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            z-index: 1001;
            padding: 10px;
            line-height: 1;
            transition: opacity 0.2s ease;
        }
        
        .mirrored-modal-close:hover {
            opacity: 0.7;
        }
        
        .mirrored-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #ffffff;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: mirroredEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes mirroredEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .mirrored-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .mirrored-project-gallery img {
             width: 100%;
             height: auto;
             display: block;
             object-fit: cover;
             transition: opacity 0.3s ease;
         }
        
        .mirrored-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .mirrored-header {
                font-size: 2.5rem;
                padding: 40px 20px 25px;
                letter-spacing: 2px;
            }
            
            .mirrored-project-gallery {
                gap: 30px;
                padding: 30px 15px;
            }
        }
        
        @media (max-width: 480px) {
            .mirrored-header {
                font-size: 2rem;
                padding: 30px 15px 20px;
                letter-spacing: 1px;
            }
            
            .mirrored-modal-close {
                top: 15px;
                right: 20px;
                font-size: 24px;
            }
            
            .mirrored-image-placeholder {
                height: 300px;
            }
        }
    `;
    document.head.appendChild(styles);
}

/**
 * Opens the Versace image gallery - Optimized for instant loading
 */
function openVersaceGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.versace-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'versace-modal-overlay';
    modalOverlay.id = 'versaceModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="versace-modal-container">
            <button class="versace-modal-close" id="versaceModalClose">×</button>
            <header class="versace-header">VERSACE COLLECTION</header>
            <div class="versace-project-gallery" id="versaceGallery">
                <div class="image-placeholder">Loading...</div>
                <div class="image-placeholder">Loading...</div>
                <div class="image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
        // Trigger header animation
        const header = modalOverlay.querySelector('.versace-header');
        if (header) {
            header.style.animationPlayState = 'running';
        }
    });
    
         // Load images after modal is shown
     const gallery = document.getElementById('versaceGallery');
     gallery.innerHTML = ''; // Clear placeholders
     
     versaceImagePaths.forEach((src, index) => {
         const img = document.createElement('img');
         img.src = src;
         img.alt = `Versace Design ${index + 1}`;
         img.style.opacity = '0';
         
         img.onload = () => {
             img.style.opacity = '1'; // Set opacity directly instead of using CSS class
         };
         
         gallery.appendChild(img);
     });
    
    // Close modal functionality
    const closeBtn = document.getElementById('versaceModalClose');
    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => modalOverlay.remove(), 200);
    });
    
    // Close with click outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
            setTimeout(() => modalOverlay.remove(), 200);
        }
    });
    
    // Close with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modalOverlay.classList.remove('show');
            setTimeout(() => modalOverlay.remove(), 200);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

/**
 * Opens the Mirrored NYC image gallery - Optimized for instant loading
 */
function openMirroredNYCGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.mirrored-modal-overlay, .versace-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'mirrored-modal-overlay';
    modalOverlay.id = 'mirroredModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="mirrored-modal-container">
            <button class="mirrored-modal-close" id="mirroredModalClose">×</button>
            <header class="mirrored-header">MIRRORED NYC</header>
            <div class="mirrored-project-gallery" id="mirroredGallery">
                <div class="mirrored-image-placeholder">Loading...</div>
                <div class="mirrored-image-placeholder">Loading...</div>
                <div class="mirrored-image-placeholder">Loading...</div>
                <div class="mirrored-image-placeholder">Loading...</div>
                <div class="mirrored-image-placeholder">Loading...</div>
                <div class="mirrored-image-placeholder">Loading...</div>
                <div class="mirrored-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
        // Trigger header animation
        const header = modalOverlay.querySelector('.mirrored-header');
        if (header) {
            header.style.animationPlayState = 'running';
        }
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('mirroredGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    mirroredNYCImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Mirrored NYC Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1'; // Set opacity directly instead of using CSS class
        };
        
        gallery.appendChild(img);
    });
    
    // Close modal functionality
    const closeBtn = document.getElementById('mirroredModalClose');
    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => modalOverlay.remove(), 200);
    });
    
    // Close with click outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
            setTimeout(() => modalOverlay.remove(), 200);
        }
    });
    
    // Close with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modalOverlay.classList.remove('show');
            setTimeout(() => modalOverlay.remove(), 200);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Global variables for Versace gallery navigation
let currentVersaceImageIndex = 0;
const versaceImages = [
    './versache/VERSACE 1.jpg',
    './versache/VERSACE 2.jpg',
    './versache/VERSACE 3.jpg'
];

/**
 * Changes the main Versace image - Simple & Clean
 */
function changeVersaceImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('versaceMainImage');
    const thumbnails = document.querySelectorAll('.versace-thumb');
    
    if (mainImage) {
        // Simple image change
        mainImage.src = imageSrc;
        
        // Update active thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        if (thumbnail) {
            thumbnail.classList.add('active');
        }
        
        // Update current index
        currentVersaceImageIndex = versaceImages.indexOf(imageSrc);
    }
}

/**
 * Shows previous Versace image
 */
function previousVersaceImage() {
    currentVersaceImageIndex = (currentVersaceImageIndex - 1 + versaceImages.length) % versaceImages.length;
    const newImageSrc = versaceImages[currentVersaceImageIndex];
    const thumbnail = document.querySelectorAll('.versace-thumb')[currentVersaceImageIndex];
    changeVersaceImage(newImageSrc, thumbnail);
}

/**
 * Shows next Versace image
 */
function nextVersaceImage() {
    currentVersaceImageIndex = (currentVersaceImageIndex + 1) % versaceImages.length;
    const newImageSrc = versaceImages[currentVersaceImageIndex];
    const thumbnail = document.querySelectorAll('.versace-thumb')[currentVersaceImageIndex];
    changeVersaceImage(newImageSrc, thumbnail);
}

// PDF Handler for Resume
// ... existing code ...

function preloadDKNYImages() {
    const dknyImages = [
        'DKNY/FINAL-1.jpg',
        'DKNY/FINAL-2.jpg', 
        'DKNY/FINAL-3.jpg',
        'DKNY/FINAL-4.jpg',
        'DKNY/FINAL-5.jpg'
    ];
    
    console.log('Preloading DKNY images...');
    dknyImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

// DKNY image paths array (same structure as Versace and Mirrored NYC)
const dknyImagePaths = [
    'DKNY/FINAL-1.jpg',
    'DKNY/FINAL-2.jpg', 
    'DKNY/FINAL-3.jpg',
    'DKNY/FINAL-4.jpg',
    'DKNY/FINAL-5.jpg'
];

function addDKNYStyles() {
    if (document.getElementById('dkny-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'dkny-gallery-styles';
    style.textContent = `
                 .dkny-modal-overlay {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background: #000;
             z-index: 1000;
             overflow-y: auto;
             opacity: 0;
             transition: opacity 0.2s ease;
         }
        
                 .dkny-modal-overlay.show {
             opacity: 1;
         }
        
                 .dkny-modal-container {
             min-height: 100vh;
             font-family: 'Helvetica Neue', sans-serif;
             background: #000;
             color: #fff;
             position: relative;
         }
        
                 .dkny-modal-close {
             position: fixed;
             top: 20px;
             right: 20px;
             background: rgba(255, 107, 107, 0.8);
             border: none;
             color: white;
             width: 50px;
             height: 50px;
             border-radius: 50%;
             font-size: 24px;
             cursor: pointer;
             z-index: 10;
             transition: all 0.3s ease;
             display: flex;
             align-items: center;
             justify-content: center;
         }
        
        .dkny-modal-close:hover {
            background: #FF6B6B;
            transform: scale(1.1);
        }
        
                 .dkny-header {
             padding: 60px 20px 40px;
             text-align: center;
             font-family: 'Times New Roman', serif;
             font-size: 3.5rem;
             font-weight: bold;
             letter-spacing: 4px;
             margin: 0;
             color: #FF69B4;
             text-transform: uppercase;
             position: relative;
             opacity: 0;
             animation: dknyEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
             animation-delay: 0.3s;
         }
         
         @keyframes dknyEntrance {
             0% {
                 opacity: 0;
                 transform: translateY(-50px) scale(0.8);
             }
             50% {
                 opacity: 0.8;
                 transform: translateY(-10px) scale(1.05);
             }
             100% {
                 opacity: 1;
                 transform: translateY(0) scale(1);
             }
         }
        
                 .dkny-project-gallery {
             display: flex;
             flex-direction: column;
             gap: 40px;
             max-width: 1000px;
             margin: 0 auto;
             padding: 40px 20px;
         }
         
         .dkny-project-gallery img {
             width: 100%;
             height: auto;
             display: block;
             object-fit: cover;
             transition: opacity 0.3s ease;
         }
         
         .dkny-image-placeholder {
             width: 100%;
             height: 400px;
             background: #111;
             display: flex;
             align-items: center;
             justify-content: center;
             color: #666;
             font-size: 14px;
         }
        
        
        
                 /* Mobile adjustments */
         @media (max-width: 768px) {
             .dkny-header {
                 font-size: 2.2rem;
                 padding: 40px 15px 25px;
             }
             
             .dkny-project-gallery {
                 padding: 20px 15px;
                 gap: 30px;
             }
             
             .dkny-modal-close {
                 width: 40px;
                 height: 40px;
                 font-size: 20px;
                 top: 15px;
                 right: 15px;
             }
         }
    `;
    document.head.appendChild(style);
}

function openDKNYGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'dkny-modal-overlay';
    modalOverlay.id = 'dknyModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="dkny-modal-container">
            <button class="dkny-modal-close" id="dknyModalClose">×</button>
            <header class="dkny-header">DKNY COLLABORATION</header>
            <div class="dkny-project-gallery" id="dknyGallery">
                <div class="dkny-image-placeholder">Loading...</div>
                <div class="dkny-image-placeholder">Loading...</div>
                <div class="dkny-image-placeholder">Loading...</div>
                <div class="dkny-image-placeholder">Loading...</div>
                <div class="dkny-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
         // Show modal instantly
     requestAnimationFrame(() => {
         modalOverlay.classList.add('show');
     });
    
    // Load images after modal is shown
    const gallery = document.getElementById('dknyGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    dknyImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `DKNY Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('dknyModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// Wild & Serene image paths array
const wildSereneImagePaths = [
    'Sailor/Wild 1 .jpg',
    'Sailor/Wild 2 .jpg', 
    'Sailor/Wild 3 .jpg',
    'Sailor/Wild 4.jpg'
];

function preloadWildSereneImages() {
    console.log('Preloading Wild & Serene images...');
    wildSereneImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addWildSereneStyles() {
    if (document.getElementById('wild-serene-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'wild-serene-gallery-styles';
    style.textContent = `
        .wild-serene-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .wild-serene-modal-overlay.show {
            opacity: 1;
        }
        
        .wild-serene-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .wild-serene-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(210, 180, 140, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .wild-serene-modal-close:hover {
            background: #D2B48C;
            transform: scale(1.1);
        }
        
        .wild-serene-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #D2B48C;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: wildSereneEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes wildSereneEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .wild-serene-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .wild-serene-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .wild-serene-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .wild-serene-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .wild-serene-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .wild-serene-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openWildSereneGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'wild-serene-modal-overlay';
    modalOverlay.id = 'wildSereneModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="wild-serene-modal-container">
            <button class="wild-serene-modal-close" id="wildSereneModalClose">×</button>
            <header class="wild-serene-header">WILD & SERENE</header>
            <div class="wild-serene-project-gallery" id="wildSereneGallery">
                <div class="wild-serene-image-placeholder">Loading...</div>
                <div class="wild-serene-image-placeholder">Loading...</div>
                <div class="wild-serene-image-placeholder">Loading...</div>
                <div class="wild-serene-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('wildSereneGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    wildSereneImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Wild & Serene Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('wildSereneModalClose');
    const handleClose = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Tech Pack image paths array
const techPackImagePaths = [
    'tech pack digi/CAD DIGI 1.jpg',
    'tech pack digi/CAD DIGI 2.jpg', 
    'tech pack digi/CAD DIGI 3.jpg',
    'tech pack digi/CAD DIGI 4.jpg',
    'tech pack digi/CAD DIGI 5.jpg',
    'tech pack digi/CAD DIGI 6.jpg',
    'tech pack digi/CAD DIGI 7.jpg',
    'tech pack digi/CAD DIGI 8.jpg',
    'tech pack digi/CAD DIGI 9.jpg'
];

function preloadTechPackImages() {
    console.log('Preloading Tech Pack images...');
    techPackImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addTechPackStyles() {
    if (document.getElementById('tech-pack-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'tech-pack-gallery-styles';
    style.textContent = `
        .tech-pack-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .tech-pack-modal-overlay.show {
            opacity: 1;
        }
        
        .tech-pack-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .tech-pack-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(135, 206, 235, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .tech-pack-modal-close:hover {
            background: #87CEEB;
            transform: scale(1.1);
        }
        
        .tech-pack-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #87CEEB;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: techPackEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes techPackEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .tech-pack-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .tech-pack-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .tech-pack-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .tech-pack-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .tech-pack-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .tech-pack-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openTechPackGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'tech-pack-modal-overlay';
    modalOverlay.id = 'techPackModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="tech-pack-modal-container">
            <button class="tech-pack-modal-close" id="techPackModalClose">×</button>
            <header class="tech-pack-header">TECH PACK FINAL</header>
            <div class="tech-pack-project-gallery" id="techPackGallery">
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
                <div class="tech-pack-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('techPackGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    techPackImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Tech Pack Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('techPackModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Rustic Ocean image paths array
const rusticOceanImagePaths = [
    'diesel/D1.jpg',
    'diesel/D2.jpg', 
    'diesel/D3.jpg',
    'diesel/D4.jpg',
    'diesel/D5.jpg'
];

function preloadRusticOceanImages() {
    console.log('Preloading Rustic Ocean images...');
    rusticOceanImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addRusticOceanStyles() {
    if (document.getElementById('rustic-ocean-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'rustic-ocean-gallery-styles';
    style.textContent = `
        .rustic-ocean-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .rustic-ocean-modal-overlay.show {
            opacity: 1;
        }
        
        .rustic-ocean-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .rustic-ocean-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(139, 69, 19, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .rustic-ocean-modal-close:hover {
            background: #8B4513;
            transform: scale(1.1);
        }
        
        .rustic-ocean-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #8B4513;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: rusticOceanEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes rusticOceanEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .rustic-ocean-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .rustic-ocean-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .rustic-ocean-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .rustic-ocean-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .rustic-ocean-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .rustic-ocean-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openRusticOceanGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'rustic-ocean-modal-overlay';
    modalOverlay.id = 'rusticOceanModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="rustic-ocean-modal-container">
            <button class="rustic-ocean-modal-close" id="rusticOceanModalClose">×</button>
            <header class="rustic-ocean-header">RUSTIC OCEAN</header>
            <div class="rustic-ocean-project-gallery" id="rusticOceanGallery">
                <div class="rustic-ocean-image-placeholder">Loading...</div>
                <div class="rustic-ocean-image-placeholder">Loading...</div>
                <div class="rustic-ocean-image-placeholder">Loading...</div>
                <div class="rustic-ocean-image-placeholder">Loading...</div>
                <div class="rustic-ocean-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('rusticOceanGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    rusticOceanImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Rustic Ocean Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('rusticOceanModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Wild and Blurry image paths array
const wildBlurryImagePaths = [
    'wild and blurry/WB1.jpg',
    'wild and blurry/2.jpg', 
    'wild and blurry/3.jpg',
    'wild and blurry/4.jpg',
    'wild and blurry/5.jpg',
    'wild and blurry/6.jpg',
    'wild and blurry/7.jpg',
    'wild and blurry/8.jpg',
    'wild and blurry/9.jpg',
    'wild and blurry/10.jpg',
    'wild and blurry/11.jpg',
    'wild and blurry/12.jpg'
];

function preloadWildBlurryImages() {
    console.log('Preloading Wild and Blurry images...');
    wildBlurryImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addWildBlurryStyles() {
    if (document.getElementById('wild-blurry-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'wild-blurry-gallery-styles';
    style.textContent = `
        .wild-blurry-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .wild-blurry-modal-overlay.show {
            opacity: 1;
        }
        
        .wild-blurry-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .wild-blurry-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(245, 245, 220, 0.8);
            border: none;
            color: #333;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .wild-blurry-modal-close:hover {
            background: #F5F5DC;
            transform: scale(1.1);
        }
        
        .wild-blurry-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #F5F5DC;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: wildBlurryEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes wildBlurryEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .wild-blurry-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .wild-blurry-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .wild-blurry-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .wild-blurry-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .wild-blurry-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .wild-blurry-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openWildBlurryGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'wild-blurry-modal-overlay';
    modalOverlay.id = 'wildBlurryModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="wild-blurry-modal-container">
            <button class="wild-blurry-modal-close" id="wildBlurryModalClose">×</button>
            <header class="wild-blurry-header">WILD & BLURRY</header>
            <div class="wild-blurry-project-gallery" id="wildBlurryGallery">
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
                <div class="wild-blurry-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('wildBlurryGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    wildBlurryImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Wild & Blurry Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('wildBlurryModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Madeleine Vionnet image paths array
const madeleineVionnetImagePaths = [
    'Madeline vionnet/m1.jpg',
    'Madeline vionnet/m2.jpg', 
    'Madeline vionnet/M3.jpg',
    'Madeline vionnet/Mv 4.jpg',
    'Madeline vionnet/MV 5.jpg',
    'Madeline vionnet/MV 6.jpg',
    'Madeline vionnet/MV 7.jpg'
];

function preloadMadeleineVionnetImages() {
    console.log('Preloading Madeleine Vionnet images...');
    madeleineVionnetImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addMadeleineVionnetStyles() {
    if (document.getElementById('madeleine-vionnet-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'madeleine-vionnet-gallery-styles';
    style.textContent = `
        .madeleine-vionnet-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .madeleine-vionnet-modal-overlay.show {
            opacity: 1;
        }
        
        .madeleine-vionnet-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .madeleine-vionnet-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(205, 92, 92, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .madeleine-vionnet-modal-close:hover {
            background: #CD5C5C;
            transform: scale(1.1);
        }
        
        .madeleine-vionnet-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #CD5C5C;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: madeleineVionnetEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes madeleineVionnetEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .madeleine-vionnet-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .madeleine-vionnet-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .madeleine-vionnet-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .madeleine-vionnet-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .madeleine-vionnet-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .madeleine-vionnet-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openMadeleineVionnetGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.madeleine-vionnet-modal-overlay, .wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'madeleine-vionnet-modal-overlay';
    modalOverlay.id = 'madeleineVionnetModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="madeleine-vionnet-modal-container">
            <button class="madeleine-vionnet-modal-close" id="madeleineVionnetModalClose">×</button>
            <header class="madeleine-vionnet-header">NOUVEAU BALLET</header>
            <div class="madeleine-vionnet-project-gallery" id="madeleineVionnetGallery">
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
                <div class="madeleine-vionnet-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('madeleineVionnetGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    madeleineVionnetImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Madeleine Vionnet Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('madeleineVionnetModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Bespoke Royalty Udaipur image paths array
const bespokeRoyaltyImagePaths = [
    'udaipur/BR 1.jpg',
    'udaipur/BR 2.jpg', 
    'udaipur/BR 3.jpg',
    'udaipur/BR 4.jpg',
    'udaipur/BR 5.jpg',
    'udaipur/BR 6.jpg',
    'udaipur/BR 7.jpg',
    'udaipur/BR 8.jpg',
    'udaipur/BR 9.jpg'
];

function preloadBespokeRoyaltyImages() {
    console.log('Preloading Bespoke Royalty Udaipur images...');
    bespokeRoyaltyImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addBespokeRoyaltyStyles() {
    if (document.getElementById('bespoke-royalty-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'bespoke-royalty-gallery-styles';
    style.textContent = `
        .bespoke-royalty-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .bespoke-royalty-modal-overlay.show {
            opacity: 1;
        }
        
        .bespoke-royalty-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .bespoke-royalty-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(139, 112, 87, 0.8);
            border: none;
            color: #F5F5DC;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .bespoke-royalty-modal-close:hover {
            background: #8B7057;
            transform: scale(1.1);
        }
        
        .bespoke-royalty-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #8B7057;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: bespokeRoyaltyEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes bespokeRoyaltyEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .bespoke-royalty-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .bespoke-royalty-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .bespoke-royalty-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .bespoke-royalty-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .bespoke-royalty-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .bespoke-royalty-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openBespokeRoyaltyGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.bespoke-royalty-modal-overlay, .madeleine-vionnet-modal-overlay, .wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'bespoke-royalty-modal-overlay';
    modalOverlay.id = 'bespokeRoyaltyModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="bespoke-royalty-modal-container">
            <button class="bespoke-royalty-modal-close" id="bespokeRoyaltyModalClose">×</button>
            <header class="bespoke-royalty-header">BESPOKE ROYALTY UDAIPUR</header>
            <div class="bespoke-royalty-project-gallery" id="bespokeRoyaltyGallery">
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
                <div class="bespoke-royalty-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('bespokeRoyaltyGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    bespokeRoyaltyImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Bespoke Royalty Udaipur Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('bespokeRoyaltyModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Draping image paths array
const drapingImagePaths = [
    'draping main/1 (1).jpg',
    'draping main/2 (2).jpg',
    'draping main/3 (2).jpg',
    'draping main/4 (2).jpg',
    'draping main/5 (2).jpg',
    'draping main/6 (2).jpg',
    'draping main/7 (2).jpg',
    'draping main/8 (2).jpg',
    'draping main/9 (2).jpg',
    'draping main/10 (2).jpg',
    'draping main/11 (2).jpg',
    'draping main/12 (2).jpg',
    'draping main/13 (1).jpg'
];

function preloadDrapingImages() {
    console.log('Preloading Draping images...');
    drapingImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addDrapingStyles() {
    if (document.getElementById('draping-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'draping-gallery-styles';
    style.textContent = `
        .draping-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .draping-modal-overlay.show {
            opacity: 1;
        }
        
        .draping-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .draping-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(135, 206, 235, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .draping-modal-close:hover {
            background: #87CEEB;
            transform: scale(1.1);
        }
        
        .draping-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #87CEEB;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: drapingEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes drapingEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .draping-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .draping-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .draping-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .draping-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .draping-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .draping-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openDrapingGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.draping-modal-overlay, .bespoke-royalty-modal-overlay, .madeleine-vionnet-modal-overlay, .wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'draping-modal-overlay';
    modalOverlay.id = 'drapingModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="draping-modal-container">
            <button class="draping-modal-close" id="drapingModalClose">×</button>
            <header class="draping-header">DRAPING</header>
            <div class="draping-project-gallery" id="drapingGallery">
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
                <div class="draping-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('drapingGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    drapingImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Draping Technique ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('drapingModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Fashion Project image paths array
const fashionProjectImagePaths = [
    'fashion project/FP 1.jpg',
    'fashion project/FP 2.jpg',
    'fashion project/FP 3.jpg',
    'fashion project/FP 4.jpg',
    'fashion project/FP 5.jpg',
    'fashion project/FP 6.jpg',
    'fashion project/FP 7.jpg',
    'fashion project/FP 8.jpg'
];

function preloadFashionProjectImages() {
    console.log('Preloading Fashion Project images...');
    fashionProjectImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addFashionProjectStyles() {
    if (document.getElementById('fashion-project-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'fashion-project-gallery-styles';
    style.textContent = `
        .fashion-project-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .fashion-project-modal-overlay.show {
            opacity: 1;
        }
        
        .fashion-project-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .fashion-project-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(220, 20, 60, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .fashion-project-modal-close:hover {
            background: #DC143C;
            transform: scale(1.1);
        }
        
        .fashion-project-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #DC143C;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: fashionProjectEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes fashionProjectEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .fashion-project-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .fashion-project-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .fashion-project-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .fashion-project-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .fashion-project-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .fashion-project-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openFashionProjectGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.fashion-project-modal-overlay, .draping-modal-overlay, .bespoke-royalty-modal-overlay, .madeleine-vionnet-modal-overlay, .wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'fashion-project-modal-overlay';
    modalOverlay.id = 'fashionProjectModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="fashion-project-modal-container">
            <button class="fashion-project-modal-close" id="fashionProjectModalClose">×</button>
            <header class="fashion-project-header">FASHION PROJECT</header>
            <div class="fashion-project-project-gallery" id="fashionProjectGallery">
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
                <div class="fashion-project-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('fashionProjectGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    fashionProjectImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Fashion Project Design ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('fashionProjectModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Identity Artwork image paths array
const identityArtworkImagePaths = [
    'identity artwork/Identity 1.jpg',
    'identity artwork/Identity 2.jpg',
    'identity artwork/Identity 3.jpg',
    'identity artwork/Identity 4.jpg',
    'identity artwork/Identity 5.jpg',
    'identity artwork/Identity 6.jpg'
];

function preloadIdentityArtworkImages() {
    console.log('Preloading Identity Artwork images...');
    identityArtworkImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addIdentityArtworkStyles() {
    if (document.getElementById('identity-artwork-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'identity-artwork-gallery-styles';
    style.textContent = `
        .identity-artwork-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .identity-artwork-modal-overlay.show {
            opacity: 1;
        }
        
        .identity-artwork-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .identity-artwork-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(148, 0, 211, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .identity-artwork-modal-close:hover {
            background: #9400D3;
            transform: scale(1.1);
        }
        
        .identity-artwork-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #9400D3;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: identityArtworkEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes identityArtworkEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .identity-artwork-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .identity-artwork-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .identity-artwork-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .identity-artwork-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .identity-artwork-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .identity-artwork-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openIdentityArtworkGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.identity-artwork-modal-overlay, .fashion-project-modal-overlay, .draping-modal-overlay, .bespoke-royalty-modal-overlay, .madeleine-vionnet-modal-overlay, .wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'identity-artwork-modal-overlay';
    modalOverlay.id = 'identityArtworkModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="identity-artwork-modal-container">
            <button class="identity-artwork-modal-close" id="identityArtworkModalClose">×</button>
            <header class="identity-artwork-header">IDENTITY (ARTWORK)</header>
            <div class="identity-artwork-project-gallery" id="identityArtworkGallery">
                <div class="identity-artwork-image-placeholder">Loading...</div>
                <div class="identity-artwork-image-placeholder">Loading...</div>
                <div class="identity-artwork-image-placeholder">Loading...</div>
                <div class="identity-artwork-image-placeholder">Loading...</div>
                <div class="identity-artwork-image-placeholder">Loading...</div>
                <div class="identity-artwork-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('identityArtworkGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    identityArtworkImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Identity Artwork ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('identityArtworkModalClose');
    const handleClose = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...

// Journal Process image paths array
const journalProcessImagePaths = [
    'journel process/1.png',
    'journel process/10.png',
    'journel process/BR 2 (1).jpg',
    'journel process/BR 3 (1).jpg',
    'journel process/JOURNAL 4.jpg',
    'journel process/Journal 5 .jpg',
    'journel process/Journal 6.jpg',
    'journel process/Journal 7.jpg',
    'journel process/Journal 8.jpg',
    'journel process/Journal 9.jpg',
    'journel process/Journal 11.jpg'
];

function preloadJournalProcessImages() {
    console.log('Preloading Journal Process images...');
    journalProcessImagePaths.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.warn(`Failed to load: ${src}`);
    });
}

function addJournalProcessStyles() {
    if (document.getElementById('journal-process-gallery-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'journal-process-gallery-styles';
    style.textContent = `
        .journal-process-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 1000;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .journal-process-modal-overlay.show {
            opacity: 1;
        }
        
        .journal-process-modal-container {
            min-height: 100vh;
            font-family: 'Helvetica Neue', sans-serif;
            background: #000;
            color: #fff;
            position: relative;
        }
        
        .journal-process-modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(176, 224, 230, 0.8);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .journal-process-modal-close:hover {
            background: #B0E0E6;
            transform: scale(1.1);
        }
        
        .journal-process-header {
            padding: 60px 20px 40px;
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 3.5rem;
            font-weight: bold;
            letter-spacing: 4px;
            margin: 0;
            color: #B0E0E6;
            text-transform: uppercase;
            position: relative;
            opacity: 0;
            animation: journalProcessEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            animation-delay: 0.3s;
        }
        
        @keyframes journalProcessEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-10px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .journal-process-project-gallery {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .journal-process-project-gallery img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }
        
        .journal-process-image-placeholder {
            width: 100%;
            height: 400px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
            .journal-process-header {
                font-size: 2.2rem;
                padding: 40px 15px 25px;
            }
            
            .journal-process-project-gallery {
                padding: 20px 15px;
                gap: 30px;
            }
            
            .journal-process-modal-close {
                width: 40px;
                height: 40px;
                font-size: 20px;
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function openJournalProcessGallery() {
    // Close any existing modals
    const existingModals = document.querySelectorAll('.journal-process-modal-overlay, .identity-artwork-modal-overlay, .fashion-project-modal-overlay, .draping-modal-overlay, .bespoke-royalty-modal-overlay, .madeleine-vionnet-modal-overlay, .wild-blurry-modal-overlay, .rustic-ocean-modal-overlay, .tech-pack-modal-overlay, .wild-serene-modal-overlay, .dkny-modal-overlay, .versace-modal-overlay, .mirrored-modal-overlay, .custom-modal-overlay');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal overlay - show structure immediately
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'journal-process-modal-overlay';
    modalOverlay.id = 'journalProcessModalOverlay';
    
    // Create modal structure with placeholders
    modalOverlay.innerHTML = `
        <div class="journal-process-modal-container">
            <button class="journal-process-modal-close" id="journalProcessModalClose">×</button>
            <header class="journal-process-header">JOURNAL PROCESS</header>
            <div class="journal-process-project-gallery" id="journalProcessGallery">
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
                <div class="journal-process-image-placeholder">Loading...</div>
            </div>
        </div>
    `;
    
    // Add to document immediately
    document.body.appendChild(modalOverlay);
    
    // Show modal instantly
    requestAnimationFrame(() => {
        modalOverlay.classList.add('show');
    });
    
    // Load images after modal is shown
    const gallery = document.getElementById('journalProcessGallery');
    gallery.innerHTML = ''; // Clear placeholders
    
    journalProcessImagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Journal Process ${index + 1}`;
        img.style.opacity = '0';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
        
        gallery.appendChild(img);
    });
    
    // Add close functionality
    const closeBtn = document.getElementById('journalProcessModalClose');
    const handleClose = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }, 300);
    };
    
    closeBtn.addEventListener('click', handleClose);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close on background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            handleClose();
        }
    });
}

// ... existing code ...