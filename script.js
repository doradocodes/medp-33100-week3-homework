const photos = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
];

const photosPerPage = 6;
let currentIndex = 0;

window.onload = loadInitialPhotos;

function loadInitialPhotos() {
  currentIndex = 0;
  renderPhotos(photos);
}

// render photos
function renderPhotos(filteredPhotos) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  const photosToDisplay = filteredPhotos.slice(0, currentIndex + photosPerPage);

  photosToDisplay.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.type;
    gallery.appendChild(img);
  });

  // hide 'Load More' button if no more photos
  const loadMoreButton = document.getElementById('loadMore');
  if (photosToDisplay.length >= filteredPhotos.length) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'block';
  }

  // center "Load More" button
  const loadMoreContainer = document.querySelector('.load-more');
  loadMoreContainer.style.display = 'flex';
  loadMoreContainer.style.justifyContent = 'center';
}

// load more pictures
document.getElementById('loadMore').addEventListener('click', () => {
  currentIndex += photosPerPage;
  renderPhotos(photos);
});

// filter by type
document.getElementById('all').addEventListener('click', () => {
  currentIndex = 0;
  renderPhotos(photos);
});
document.getElementById('nature').addEventListener('click', () => {
  currentIndex = 0;
  const filteredPhotos = photos.filter(photo => photo.type === 'nature');
  renderPhotos(filteredPhotos);
});
document.getElementById('city').addEventListener('click', () => {
  currentIndex = 0;
  const filteredPhotos = photos.filter(photo => photo.type === 'city');
  renderPhotos(filteredPhotos);
});
document.getElementById('animals').addEventListener('click', () => {
  currentIndex = 0;
  const filteredPhotos = photos.filter(photo => photo.type === 'animals');
  renderPhotos(filteredPhotos);
});