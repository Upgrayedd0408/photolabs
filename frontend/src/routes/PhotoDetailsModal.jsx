import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, modalDisplayed }) => {

  const { selectedPhoto } = modalDisplayed;

  const handleClick = () => {
    closeModal();
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={selectedPhoto.urls.full} className="photo-details-modal__image" />
    </div>
  );
};

export default PhotoDetailsModal;
