import axios from 'axios';

const URL = 'https://pixabay.com/api/';
// const KEY = '37108766-5551b03813e03655d0bec750c';
const KEY = '37108766-5551b03813e03655d0bec750c';

export async function searchImages(inputValue, page) {
  const response = await axios.get(
    `${URL}?key=${KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  return response;
}
