import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const { isFavouritePhoto, favouritePhoto, toggleModal } = props;
  const { photos } = props;


  const listOfPhotos = photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} isFavouritePhoto={isFavouritePhoto || false} toggleFavourite={() => favouritePhoto(photo.id)} toggleModal={toggleModal} />);

  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
