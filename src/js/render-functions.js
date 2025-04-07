import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const ul = document.querySelector('.gallery');
function createGallery(image) {
  ul.insertAdjacentHTML(
    'beforeend',
    `<li><a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" title=""/>
    <table>
  <thead>
    <tr class="th">
      <th>Likes</th>
      <th>Views</th>
      <th>Comments</th>
      <th>Downloads</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${image.likes}</td>
      <td>${image.views}</td>
      <td>${image.comments}</td>
      <td>${image.downloads}</td>
    </tr></tbody>
    </a></li>`
  );
}
export default createGallery;

const loader = document.querySelector('#loader');
function showLoader() {
  loader.classList = '';
}
function hideLoader() {
  loader.classList = 'hide';
}
export { showLoader, hideLoader };
