import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

import SearchBar from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import { fetchImages } from './Fetch';

const fetchImg = async (filter, page) => {
  try {
    const hits = await fetchImages(filter, page);
    if (hits.length === 0) {
      return { status: 'rejected', hits };
    }
    return { status: 'resolved', hits };
  } catch (error) {
    console.log(error);
    return { status: 'rejected' };
  }
};

export const App = () => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [largeImg, setLargeImg] = useState('');

  useEffect(() => {
    if (filter !== '') {
      setStatus('pending');

      (async () => {
        const result = await fetchImg(filter, page);
        setStatus(result.status);
        setImages(prev => [...prev, ...result.hits]);
      })();
    }
  }, [filter, page]);

  const openModal = img => {
    setLargeImg(img);
  };

  const toggleModal = () => {
    setLargeImg('');
  };
  const onSubmit = filterP => {
    if (filter !== filterP) {
      setImages([]);
      setPage(1);
    }
    setFilter(filterP);
  };
  const onClick = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      {status === 'rejected' && <h1>Something went wrong</h1>}
      {images.length > 0 && <Gallery images={images} onClick={openModal} />}
      {status === 'pending' && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {status === 'resolved' && images.length > 0 && (
        <Button onClick={onClick} />
      )}
      {largeImg && <Modal toggleModal={toggleModal} largeImg={largeImg} />}
    </>
  );
};
