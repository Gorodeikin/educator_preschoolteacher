document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    const closeBtn = document.querySelector('.video-close');
    const presItems = document.querySelectorAll('.presentation-item');

    presItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-src');
            // Створюємо iframe для презентації
            videoContainer.innerHTML = `
                <iframe 
                    src="${url}" 
                    frameborder="0" 
                    width="100%" 
                    height="565" 
                    allowfullscreen="true">
                </iframe>`;
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Вимикаємо скрол
        });
    });

    // Закриття модалки (додаємо до вашого існуючого коду закриття)
    if (closeBtn) {
        const originalClose = closeBtn.onclick;
        closeBtn.onclick = (e) => {
            if (originalClose) originalClose(e);
            videoModal.style.display = 'none';
            videoContainer.innerHTML = '';
            document.body.style.overflow = 'auto';
        };
    }
});