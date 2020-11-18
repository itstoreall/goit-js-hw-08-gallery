import images from "./gallery-items.js"

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector(".js-lightbox"),
  originalImg: document.querySelector(".lightbox__image"),
  backDrop: document.querySelector(".lightbox__overlay"),
  closeModalBtn: document.querySelector(".lightbox__button"),
};  

const original = refs.originalImg;
const gallery = refs.gallery;
const modal = refs.modal;
let activeIndex = 0;

// ------------ + ------------

gallery.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backDrop.addEventListener("click", onBackDropClick);

const galleryItem = images.reduce((acc, item, index) => {
  return acc + `
  <li class="gallery__item">
    <a class="gallery__link" href="">
      <img class="gallery__image" 
      data-source="${item.original}"
      src="${item.preview}" 
      alt="${item.description}"
      data-index="${index}">
    </a>
  </li>`
  }, ``
);
gallery.insertAdjacentHTML("beforeend", galleryItem);

// Open Modal

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    original.style.opacity = 1;
    window.addEventListener("keydown", onPressEscape);
    window.addEventListener("keydown", onPressRight);
    window.addEventListener("keydown", onPressLeft);
    modal.classList.add('is-open');
    activeIndex = Number(event.target.dataset.index);
    onAddImgAttributes(event);
  };
};

function onAddImgAttributes(event) {
  original.src = event.target.dataset.source;
  original.alt = event.target.alt;
  original.setAttribute("data-index", event.target.dataset.index);
};

// Press Right and Left

function onPressRight(event) {
  if (event.code === "ArrowRight" && activeIndex < images.length) {
    original.setAttribute('data-index', activeIndex += 1);
    original.src = images[activeIndex].original;
    console.log(activeIndex);
    console.log("length:", images.length);
  };
};

function onPressLeft(event) {
   if (onOpenModal && event.code === "ArrowLeft" && activeIndex >= 0) {
    original.setAttribute('data-index', activeIndex -= 1)
    original.src = images[activeIndex].original;
    console.log(activeIndex);
    console.log("length:", images.length);
  };
};

// Close Modal

function onCloseModal() {
  modal.classList.remove('is-open');
  original.style.opacity = 0;
  window.removeEventListener("keydown", onPressEscape);
  window.removeEventListener("keydown", onPressRight);
  window.removeEventListener("keydown", onPressLeft);
  original.src = "";
};

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  };
};

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
};

// */

// ============

/*

refs.gallery.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backDrop.addEventListener("click", onBackDropClick);
window.addEventListener("keydown", onEscapeClose);

const galleryItem = images.reduce((acc, item) => {
  return acc + `
  <li class="gallery__item">
    <a class="gallery__link" href="">
      <img class="gallery__image" 
      data-source="${item.original}" 
      src="${item.preview}" 
      alt="${item.description}">
    </a>
  </li>`
  }, ``
);
refs.gallery.insertAdjacentHTML("beforeend", galleryItem);

function onOpenModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName === 'IMG') {
    refs.modal.classList.add('is-open');
    onAddImgAttributes();
  };
};

function onAddImgAttributes() {
  refs.originalImg.src = event.target.dataset.source;
  refs.originalImg.alt = event.target.alt;
};

function onCloseModal() {
  refs.modal.classList.remove('is-open');
  refs.originalImg.src = "";
};

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  };
};

function onEscapeClose(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
};

*/

// ============ 

/*

// Создает лишку с картинкой в ссылке и впихиваем в DOM
const galleryItem = images.reduce((acc, item) => {
  return acc + `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" 
      data-source="${item.original}" 
      src="${item.preview}" 
      alt="${item.description}">
    </a>
  </li>`
  }, ``
);
refs.gallery.insertAdjacentHTML("beforeend", galleryItem);

// Открывает модалку (делегирование)
refs.gallery.addEventListener('click', event => {
  event.preventDefault();
  
  // Добавляет класс 
  if (event.target.nodeName === 'IMG') {
    onOpenModal();
  };

  // Добавляет атрибуты большой картинке
  refs.originalImg.src = event.target.dataset.source;
  refs.originalImg.alt = event.target.alt;
  
  // Закрывает модалку по Escape
  window.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      onCloseModal();
    };
  });
});

// Закрывает модалку с крестика
refs.closeModalBtn.addEventListener('click', onCloseModal);

// Закрывает модалку по бэкдропу
refs.backDrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    onCloseModal();
  };
});

function onOpenModal() {
  refs.modal.classList.add('is-open');
};

function onCloseModal() {
  refs.modal.classList.remove('is-open');
  refs.originalImg.src = "";
};

*/

