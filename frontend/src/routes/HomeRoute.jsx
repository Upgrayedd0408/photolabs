import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {

  const { isFavouritePhoto, addFavouritePhoto, favouriteCount, fetchPhotosByTopic } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        isFavouritePhoto={isFavouritePhoto}
        topics={props.topics}
        favouriteCount={favouriteCount}
        fetchPhotosByTopic={fetchPhotosByTopic} />
      <PhotoList
        isFavouritePhoto={isFavouritePhoto}
        addFavouritePhoto={addFavouritePhoto}
        photos={props.photos}
        displayPhotoModal={props.displayPhotoModal} />
    </div>
  );
};



export default HomeRoute;