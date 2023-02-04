import PropTypes from 'prop-types';

import { ImageGallery, ImageGalleryItem, Image } from './ImageGallery.styled';

export const Gallery = ({ images, onClick }) => {
  return (
    <ImageGallery>
      {images.map(el => {
        return (
          <ImageGalleryItem
            key={el.id}
            onClick={() => onClick(el.largeImageURL)}
          >
            <Image src={el.webformatURL} alt="" />
          </ImageGalleryItem>
        );
      })}
    </ImageGallery>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
