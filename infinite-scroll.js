// Infinite scroll gallery
window.addEventListener('scroll', function() {
  const galleryRows = document.querySelectorAll('.gallery-row');
  const lastRow = galleryRows[galleryRows.length - 1];
  const lastRowRect = lastRow.getBoundingClientRect();
  if (lastRowRect.bottom <= window.innerHeight) {
    // Clone and append the last row
    const newRow = lastRow.cloneNode(true);
    document.querySelector('.gallery').appendChild(newRow);
  }
});

// Open image and text box on thumbnail click
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function() {
    const imageSrc = this.querySelector('img').src;
    const caption = this.querySelector('.caption').textContent;
    openImageWindow(imageSrc, caption);
  });
});

function openImageWindow(imageSrc, caption) {
  // Create a new window
  const windowFeatures = 'width=600,height=400,resizable=yes,scrollbars=yes';
  const imageWindow = window.open('', '_blank', windowFeatures);

  // Set the content of the new window
  const htmlContent = `
    <html>
    <head>
      <title>Image</title>
      <style>
        body { margin: 0; padding: 20px; text-align: center; }
        img { max-width: 100%; max-height: 80vh; }
        .caption { margin-top: 10px; }
      </style>
    </head>
    <body>
      <img src="${imageSrc}" alt="Image">
      <div class="caption">${caption}</div>
    </body>
    </html>
  `;
  imageWindow.document.open();
  imageWindow.document.write(htmlContent);
  imageWindow.document.close();
}
