// Simulated gallery data
const galleryData = [
  { image: 'image1.jpg', caption: 'Image 1' },
  { image: 'image2.jpg', caption: 'Image 2' },
  { image: 'image3.jpg', caption: 'Image 3' },
  { image: 'image4.jpg', caption: 'Image 4' },
  { image: 'image5.jpg', caption: 'Image 5' },
  { image: 'image6.jpg', caption: 'Image 6' },
  // Add more images as needed
];

const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');
let currentIndex = 0;

function createThumbnail(imageUrl, caption) {
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  const image = document.createElement('img');
  image.src = imageUrl;
  const captionElement = document.createElement('div');
  captionElement.classList.add('caption');
  captionElement.textContent = caption;
  thumbnail.appendChild(image);
  thumbnail.appendChild(captionElement);
  return thumbnail;
}

function displayThumbnails() {
  const endIndex = currentIndex + 9;
  for (let i = currentIndex; i <= endIndex && i < galleryData.length; i++) {
    const thumbnail = createThumbnail(galleryData[i].image, galleryData[i].caption);
    gallery.appendChild(thumbnail);
  }
  currentIndex = endIndex + 1;
  if (currentIndex >= galleryData.length) {
    loading.style.display = 'none';
  }
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loading.style.display = 'block';
    displayThumbnails();
  }
});

displayThumbnails();
