import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import { useState } from "react";

const HomeRoute = () => {

  const [fav, setFav] = useState(false);

  const favPhoto = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar fav={fav} />
      <PhotoList fav={fav} favPhoto={favPhoto} />
    </div>
  );
};



export default HomeRoute;