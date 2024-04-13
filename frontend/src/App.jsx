import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isFavouritePhoto, setIsFavouritePhoto] = useState({});

  const favouritePhoto = (photoId) => {
    setIsFavouritePhoto(prevIsFavouritePhoto => ({
      ...prevIsFavouritePhoto, //spreads the existing isFavouritePhoto Object
      [photoId]: !prevIsFavouritePhoto[photoId] // Adds the new photoId that is passed into the function and if it doesn't already exist, it is set to true.
    }));
  };

  // Keep track of how many photos have been added to the favourite list. This creates an array of the values from the isFavouritePhoto Object and provides the array length. essentially counting them.
  let favouriteCount = Object.values(isFavouritePhoto).filter(isFav => isFav).length;



  // Code regarding the Modal.

  const [modalDisplayed, setModalDisplayed] = useState({ displayed: false, selectedPhoto: null });

  const closeModal = () => {
    setModalDisplayed({ displayed: false, selectedPhoto: null });
    console.log(modalDisplayed);
  };

  const displayPhotoModal = (photoId) => {
    const selectedPhoto = photos.find(photo => photo.id === photoId);

    if (selectedPhoto) {
      console.log(selectedPhoto);
      setModalDisplayed({ displayed: !modalDisplayed.displayed, selectedPhoto: selectedPhoto});
    } else {
      setModalDisplayed({ displayed: false, selectedPhoto: null});
    }
  };

  
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} modalDisplayed={modalDisplayed} displayPhotoModal={displayPhotoModal} favouritePhoto={favouritePhoto} favouriteCount={favouriteCount} isFavouritePhoto={isFavouritePhoto} />
      {modalDisplayed.displayed && <PhotoDetailsModal closeModal={closeModal} photo={modalDisplayed.selectedPhoto} isFavouritePhoto={isFavouritePhoto} favouritePhoto={favouritePhoto} displayPhotoModal={displayPhotoModal} modalDisplayed={modalDisplayed} />}
    </div>
  );
};

export default App;

