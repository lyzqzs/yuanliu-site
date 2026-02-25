// minimal lightbox: click → next image

const images = Array.from(document.querySelectorAll('.work-img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

// open
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.remove('hidden');
  });
});

function showImage(){
  lightboxImg.src = images[currentIndex].src;
}

// click anywhere = next
lightbox.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// ESC to close
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    lightbox.classList.add('hidden');
  }
});
