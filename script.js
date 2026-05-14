function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.getElementById(name).classList.add('active');
    document.getElementById('nav-' + name).classList.add('active');
    window.scrollTo(0, 0);
    return false;
}

function buildGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const photos = [
        'assets/gallery/Photo 1.jpg',
        'assets/gallery/Photo 2.jpg',
        'assets/gallery/Photo 3.jpeg',
        'assets/gallery/Photo 4.jpg',
        'assets/gallery/Photo 5.JPG',
        'assets/gallery/Photo 6.jpg',
        'assets/gallery/Photo 7.jpeg',
        'assets/gallery/Photo 8.jpg',
        'assets/gallery/Photo 9.JPEG',
        'assets/gallery/Photo 10.jpg',
        'assets/gallery/Photo 11.jpg',
        'assets/gallery/Photo 12.jpg',
        'assets/gallery/Photo 13.jpg',
        'assets/gallery/Photo 14.jpg',
        'assets/gallery/Photo 15.jpg',
        'assets/gallery/Photo 16.jpg',
        'assets/gallery/Photo 17.jpg',
        'assets/gallery/Photo 18.jpg',
        'assets/gallery/Photo 19.jpg',
        'assets/gallery/Photo 20.jpg',
        'assets/gallery/Photo 21.jpg',
        'assets/gallery/Photo 22.jpg',
        'assets/gallery/Photo 23.jpg',
        'assets/gallery/Photo 24.jpg',
        'assets/gallery/Photo 25.jpg',
        'assets/gallery/Photo 26.jpg',
        'assets/gallery/Photo 27.jpg',
        'assets/gallery/Photo 28.jpg',
        'assets/gallery/Photo 29.jpg',
        'assets/gallery/Photo 30.jpg',
        'assets/gallery/Photo 31.jpg',
        'assets/gallery/Photo 32.jpg'
    ];

    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'g-item';
        item.innerHTML = `
            <div class="tile-inner">
                <img 
                    class="tile-img"
                    src="${photo}"
                    alt="Gallery Photo ${index + 1}"
                />
            </div>
        `;

        item.addEventListener('click', () => {
            document.getElementById('lightbox').classList.add('active');
            document.getElementById('lightboxImg').src = photo;
        });
        grid.appendChild(item);
    });

    document.getElementById('lightboxClose')
        .addEventListener('click', () => {
            document.getElementById('lightbox')
                .classList.remove('active');
        });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('lightbox')
                .classList.remove('active');
        }
    });

    document.getElementById('lightbox')
        .addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                e.currentTarget.classList.remove('active');
            }
        });
}

document.addEventListener('DOMContentLoaded', () => {
    buildGallery();
});