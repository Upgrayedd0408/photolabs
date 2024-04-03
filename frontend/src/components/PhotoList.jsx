import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const { fav, favPhoto } = props;
  const { photos } = props;

  /* How come I only use props to assign { photos } and not props.photos. When I do that it tells me photos is undefined. */



  const listOfPhotos = photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} fav={fav} favPhoto={favPhoto} />);

  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
