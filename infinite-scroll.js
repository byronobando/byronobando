// Infinite Scroll
window.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  let currentPage = 1;
  let loading = false;

  const fetchData = async () => {
    loading = true;
    // Simulating an asynchronous API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const data = [
      { src: 'image4.jpg', alt: 'Image 4' },
      { src: 'image5.jpg', alt: 'Image 5' },
      { src: 'image6.jpg', alt: 'Image 6' },
      // Add more image objects as needed
    ];

    data.forEach(image => {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;

      thumbnail.appendChild(img);
      gallery.appendChild(thumbnail);
    });

    currentPage++;
    loading = false;
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      fetchData();
    }
  };

  fetchData(); // Load initial data

  window.addEventListener('scroll', handleScroll);
});// Infinite Scroll
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('.loader');

let page = 1;
let fetching = false;

function fetchImages() {
  fetching = true;
  loader.style.display = 'block';

  // Simulating a fetch request delay
  setTimeout(() => {
    for (let i = 1; i <= 5; i++) {
      const image = document.createElement('div');
      image.className = 'thumbnail';
      image.innerHTML = `<img src="image${page}-${i}.jpg" alt="Image ${page}-${i}">`;
      gallery.appendChild(image);
    }

    fetching = false;
    loader.style.display = 'none';
    page++;
  }, 2000);
}

function checkScroll() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 200 && !fetching) {
    fetchImages();
  }
}

window.addEventListener('scroll', checkScroll);

