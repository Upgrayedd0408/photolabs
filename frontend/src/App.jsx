import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import { useState } from 'react';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [fav, setFav] = useState(false);
  const favPhoto = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };

  /* const photos = [...Array(3)];
  const list = photos.map((photo, i) => <PhotoListItem key={i} photoData={sampleDataForPhotoListItem} fav={fav} favPhoto={favPhoto} />); */

  return (
    <div className="App">
      <PhotoList fav={fav} favPhoto={favPhoto} />
    </div>
  );
};

export default App;

