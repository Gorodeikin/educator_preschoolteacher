document.addEventListener('DOMContentLoaded', () => {
    const imageModal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const imageCloseBtn = imageModal.querySelector(".close");
    
    const prevBtn = imageModal.querySelector(".nav-btn.prev"); 
    const nextBtn = imageModal.querySelector(".nav-btn.next");

    let currentGalleryImages = []; 
    let currentIndex = 0;

    const updateModalImage = () => {
        if (currentGalleryImages[currentIndex]) {
            modalImg.src = currentGalleryImages[currentIndex].src;
        }
    };

    const galleryContainers = document.querySelectorAll('.diplomas, .gallery-photo, .material-previews, .thanks-photos');

    galleryContainers.forEach(container => {
        const imgs = Array.from(container.querySelectorAll('img'));
        
        imgs.forEach((img, index) => {
            img.style.cursor = "pointer";
            img.onclick = (e) => {
                e.preventDefault();
                currentGalleryImages = imgs;
                currentIndex = index;
                
                imageModal.style.display = "block";
                updateModalImage();
                document.body.style.overflow = "hidden";
            };
        });
    });

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % currentGalleryImages.length;
            updateModalImage();
        };
    }

    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
            updateModalImage();
        };
    }


    imageCloseBtn.onclick = () => {
        imageModal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    const videoModal = document.getElementById("videoModal");
    const videoContainer = document.getElementById("videoContainer");
    const videoClose = document.querySelector(".video-close");

    const videoItems = document.querySelectorAll(".video-item");

    videoItems.forEach(item => {
        item.onclick = function() {
            const videoId = this.getAttribute("data-video-id");
            if (videoId) {
                videoContainer.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>`;
                videoModal.style.display = "flex"; 
                document.body.style.overflow = "hidden";
            }
        };
    });

    if (videoClose) {
        videoClose.onclick = () => {
            videoModal.style.display = "none";
            videoContainer.innerHTML = ""; 
            document.body.style.overflow = "auto";
        };
    }

    window.onclick = (e) => {
        if (e.target === imageModal) imageCloseBtn.onclick();
        if (e.target === videoModal) videoClose.onclick();
    };

    document.addEventListener('keydown', (e) => {
        if (imageModal.style.display === "block") {
            if (e.key === "ArrowRight") nextBtn.onclick(e);
            if (e.key === "ArrowLeft") prevBtn.onclick(e);
            if (e.key === "Escape") imageCloseBtn.onclick();
        }
        if (videoModal.style.display === "flex" || videoModal.style.display === "block") {
            if (e.key === "Escape") videoClose.onclick();
        }
    });
});