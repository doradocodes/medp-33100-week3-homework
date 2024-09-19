const photos = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'city',
  },
  {
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'city',
  },
  {
    url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'city',
  },
  {
    url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'city',
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

let num = 5;
let activeFilter = 'all';

function getImages() {
  const gallery = document.getElementById('gallery');

  for (let i = 0; i < photos.length; i++) {
    const createImg = document.createElement('img');
    createImg.src = photos[i].url;
    createImg.classList.add(photos[i].type);
    gallery.appendChild(createImg);

    if (i > num) {
      createImg.style.display = 'none';
    }
  }
}

function getAll() {
  activeFilter = 'all';
  const allImages = document.querySelectorAll('img');

  let shownImages = 0;
  for (let i = 0; i < allImages.length; i++) {
    if (shownImages <= num) {
      allImages[i].style.display = 'block';
      shownImages++;
    } else {
      allImages[i].style.display = 'none';
    }
  }
}

function getEach(buttonName) {
  activeFilter = buttonName;
  const allImages = document.querySelectorAll('img');
  let shownImages = 0;

  allImages.forEach((image) => {
    if (image.className === buttonName && shownImages <= num) {
      image.style.display = 'block';
      shownImages++;
    } else {
      image.style.display = 'none';
    }
  });
}

function showMore() {
  num = num + 6;
  if (activeFilter === 'all') {
    getAll();
  } else {
    getEach(activeFilter);
  }
}

function show() {
  const nature = document.getElementById('nature');
  const city = document.getElementById('city');
  const animal = document.getElementById('animals');
  const all = document.getElementById('all');
  const loadMore = document.getElementById('loadMore');

  getImages();

  all.addEventListener('click', () => {
    num = 5;
    getAll();
  });

  nature.addEventListener('click', () => {
    num = 5;
    getEach(nature.id);
  });

  city.addEventListener('click', () => {
    num = 5;
    getEach(city.id);
  });

  animal.addEventListener('click', () => {
    num = 5;
    getEach(animal.id);
  });

  loadMore.addEventListener('click', () => {
    showMore();
  });
}

show();
