import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalStyled, ModalOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, largeImg }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      e.code === 'Escape' && toggleModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    e.target === e.currentTarget && toggleModal();
  };
  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={largeImg} alt="" style={{ width: 900, height: 650 }} />
      </ModalStyled>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
