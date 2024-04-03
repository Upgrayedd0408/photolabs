import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import { useState } from "react";

const HomeRoute = (props) => {

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
      <TopNavigationBar fav={fav} topics={props.topics} />
      <PhotoList fav={fav} favPhoto={favPhoto} photos={props.photos}/>
    </div>
  );
};



export default HomeRoute;