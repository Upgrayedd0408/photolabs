import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";



const PhotoList = (props) => {
  const { fav, favPhoto } = props;

  const listOfPhotos = photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} fav={fav} favPhoto={favPhoto} />);

  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
