import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {


  const {
    state,
    isFavouritePhoto,
    favouritePhoto,
    favouriteCount,
    modalDisplayed,
    closeModal,
    displayPhotoModal
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute topics={state.topicData} photos={state.photoData} modalDisplayed={modalDisplayed} displayPhotoModal={displayPhotoModal} favouritePhoto={favouritePhoto} favouriteCount={favouriteCount} isFavouritePhoto={isFavouritePhoto} />
      {modalDisplayed.displayed && <PhotoDetailsModal closeModal={closeModal} photo={modalDisplayed.selectedPhoto} isFavouritePhoto={isFavouritePhoto} favouritePhoto={favouritePhoto} displayPhotoModal={displayPhotoModal} modalDisplayed={modalDisplayed} />}
    </div>
  );
};

export default App;

