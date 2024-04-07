import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalDisplayed, setModalDisplayed] = useState({ displayed: false, selectedPhoto: null });

  const closeModal = () => {
    setModalDisplayed({ displayed: false, selectedPhoto: null });
    console.log(modalDisplayed.selectedPhoto);
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
      <HomeRoute topics={topics} photos={photos} modalDisplayed={modalDisplayed} displayPhotoModal={displayPhotoModal} />
      {modalDisplayed.displayed && <PhotoDetailsModal closeModal={closeModal} modalDisplayed={modalDisplayed} />}
    </div>
  );
};

export default App;

