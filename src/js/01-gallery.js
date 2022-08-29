import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import galleryCardsTpl from '../templates/gallery-markup.hbs';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

// markup function
function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item"
      target="_self"
      rel="nofollow, noreferrer"
      title="Click to enlarge" 
      href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`;
    })
    .join('');
}

// click event function
function onGalleryContainerClick(event) {
  event.preventDefault();
}

// lightbox
var lightbox = new SimpleLightbox('.gallery a', {
  //   options
  captionDelay: 250,
  captionSelector: 'img',
  captionsData: 'alt',
});
