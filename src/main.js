import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { showLoader, hideLoader, clearGallery } from './js/render-functions';

const ul = document.querySelector('.gallery');
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();
  let userWrited = e.target.elements['search-text'];
  if (userWrited.value.trim()) {
    showLoader();
    getImagesByQuery(userWrited.value)
      .then(images => {
        createGallery(images);
      })
      .catch(() => {
        iziToast.error({
          title: '',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      })
      .finally(() => {
        hideLoader();
      });
    userWrited.value = '';
  }
});
