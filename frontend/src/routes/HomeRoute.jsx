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


  return (
    <div className="home-route">
      <TopNavigationBar isFavouritePhoto={isFavouritePhoto} topics={props.topics} />
      <PhotoList isFavouritePhoto={isFavouritePhoto} favouritePhoto={favouritePhoto} photos={props.photos}/>
    </div>
  );
};



export default HomeRoute;