import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import { useState } from "react";

const HomeRoute = (props) => {

  const { isFavouritePhoto, favouritePhoto, favouriteCount } = props;

  /*   const [isFavouritePhoto, setIsFavouritePhoto] = useState({});

  const favouritePhoto = (photoId) => {
    setIsFavouritePhoto(prevIsFavouritePhoto => ({
      ...prevIsFavouritePhoto, //spreads the existing isFavouritePhoto Object
      [photoId]: !prevIsFavouritePhoto[photoId] // Adds the new photoId that is passed into the function and if it doesn't already exist, it is set to true.
    }));
  };

  // Keep track of how many photos have been added to the favourite list. This creates an array of the values from the isFavouritePhoto Object and provides the array length. essentially counting them.
  let favouriteCount = Object.values(isFavouritePhoto).filter(isFav => isFav).length; */


  return (
    <div className="home-route">
      <TopNavigationBar isFavouritePhoto={isFavouritePhoto} topics={props.topics} favouriteCount={favouriteCount}/>
      <PhotoList isFavouritePhoto={isFavouritePhoto} favouritePhoto={favouritePhoto} photos={props.photos} displayPhotoModal={props.displayPhotoModal} />
    </div>
  );
};



export default HomeRoute;