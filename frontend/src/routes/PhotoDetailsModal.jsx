import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {

  const { isFavouritePhoto, favouritePhoto, closeModal, photo, displayPhotoModal, modalDisplayed } = props;

  const handleClick = () => {
    closeModal();
  };

  const similarPhotosArray = Object.values(photo.similar_photos);
  console.log(similarPhotosArray);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        photo={photo}
        isFavouritePhoto={isFavouritePhoto}
        toggleFavourite={() => favouritePhoto(photo.id)}
        isInModal={modalDisplayed.displayed}
        displayMode={'Modal'}/>
      <PhotoList
        isFavouritePhoto={isFavouritePhoto}
        favouritePhoto={favouritePhoto}
        photos={similarPhotosArray}
        isInModal={modalDisplayed.displayed}
        displayPhotoModal={displayPhotoModal}
        modalDisplayed={modalDisplayed} />
    </div>
  );
};

export default PhotoDetailsModal;
