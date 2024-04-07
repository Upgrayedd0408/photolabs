import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalDisplayed, setModalDisplayed] = useState(false);

  const toggleModal = () => {
    if (modalDisplayed) {
      setModalDisplayed(false);
    } else {
      setModalDisplayed(true);
    }
  };
  
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} modalDisplayed={modalDisplayed} toggleModal={toggleModal} />
      {modalDisplayed && <PhotoDetailsModal />}
    </div>
  );
};

export default App;

