import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { showLoader, hideLoader } from './js/render-functions';

const ul = document.querySelector('.gallery');
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
  ul.innerHTML = '';
  let userWrited = e.target.elements['search-text'];
  if (userWrited.value.trim()) {
    showLoader();
    getImagesByQuery(userWrited.value)
      .then(images => {
        let gallery = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        for (const key in images) {
          createGallery(images[key]);
          gallery.refresh();
        }
      })
      .finally(() => {
        hideLoader();
      });
    userWrited.value = '';
  }
});
