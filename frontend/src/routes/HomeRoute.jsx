import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import { useState } from "react";

const HomeRoute = (props) => {

  const [isFavouritePhoto, setIsFavouritePhoto] = useState({});

  const favouritePhoto = (photoId) => {
    setIsFavouritePhoto(prevIsFavouritePhoto => ({
      ...prevIsFavouritePhoto,
      [photoId]: !prevIsFavouritePhoto[photoId]
    }));
  };

  let favouriteCount = 0;

  for (const photo in isFavouritePhoto) {
    if (Object.prototype.hasOwnProperty.call(isFavouritePhoto, photo) && isFavouritePhoto[photo]) {
      favouriteCount++;
    }
  }


  return (
    <div className="home-route">
      <TopNavigationBar isFavouritePhoto={isFavouritePhoto} topics={props.topics} favouriteCount={favouriteCount}/>
      <PhotoList isFavouritePhoto={isFavouritePhoto} favouritePhoto={favouritePhoto} photos={props.photos}/>
    </div>
  );
};



export default HomeRoute;