import axious from 'axios';
export const fetchImages = async (filter, page = 1) => {
  const response = await axious.get(
    `https://pixabay.com/api/?q=${filter}&page=${page}&key=32049598-79ffe32a7f6e554826078582c&image_type=photo&orientation=horizontal&per_page=12`
  );
  const { hits } = response.data;
  return hits;
};
