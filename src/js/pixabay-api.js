import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import createGallery from './render-functions';
function getImagesByQuery(query) {
  return axios
    .get(
      `https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(function (response) {
      if (response.data.hits.length == 0) {
        iziToast.error({
          title: '',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      } else {
        return response.data.hits;
      }
    })
    .catch(error => {
      return error;
    });
}

export default getImagesByQuery;
