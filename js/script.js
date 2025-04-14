const burgerMenu = document.getElementById('burger-menu');
const menu = document.querySelector('.list');
const menuItems = document.querySelectorAll('.list__item');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  menu.classList.toggle('open');
});

// Додаємо обробник події для кожного елемента меню
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      burgerMenu.classList.remove('open');
      menu.classList.remove('open');
    }
  });
});


// gallery 

  const images = document.querySelectorAll('.gallery__image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      document.body.classList.add('noscroll');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.classList.remove('noscroll');
  });

  // Закриття по кліку на фон
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.classList.remove('noscroll');
    }
  });

