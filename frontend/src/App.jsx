import React from 'react';

import TopNavigationBar from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
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



  
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList fav={fav} favPhoto={favPhoto} />
    </div>
  );
};

export default App;

