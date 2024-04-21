import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const { isFavouritePhoto, addFavouritePhoto, displayPhotoModal, isInModal } = props;
  const { photos } = props;


  const listOfPhotos = photos.map((photo) =>
    <PhotoListItem
      key={photo.id}
      photo={photo}
      isInModal={isInModal}
      isFavouritePhoto={isFavouritePhoto || false}
      toggleFavourite={() => addFavouritePhoto(photo.id)}
      displayPhotoModal={displayPhotoModal}
    />);

  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
