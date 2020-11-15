import images from "./gallery-items.js"


// Объект ссылок
const refs = {
  gallery: document.querySelector('ul.gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  button: document.querySelector('[data-action="close-lightbox"]')
};  

// Создаем лишку с картинкой в ссылке и впихиваем в DOM
const galleryItem = images.reduce((acc, item) => {
  return acc + `
  <li class="gallery__item"><a class="gallery__link" 
  href="${item.original}"><img class="gallery__image" 
  data-source="${item.original}" 
  src="${item.preview}" 
  alt="${item.description}"></a></li>`
  }, ``
);
refs.gallery.insertAdjacentHTML("beforeend", galleryItem);

// Открываем модалку и загружаем изображение
refs.gallery.addEventListener('click', event => {
  event.preventDefault();
  
  // Добавляем класс и атрибуты картинке в модалке
  if (event.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightboxImg.src = event.target.dataset.source;
    refs.lightboxImg.alt = event.target.alt;
  }
});

// Закрываем модалку и очищаем src
refs.button.addEventListener('click', event => {
    refs.lightboxImg.src = "";
    refs.lightbox.classList.remove('is-open');
});