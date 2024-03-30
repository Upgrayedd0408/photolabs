import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const { id, imageSource, profile, username, location } = props.photoData;

  return (
    <div key={id}>
      <img src={imageSource} className="photo-list__item"/>
      <img src={profile} className="photo-list__item" />
      <span>{username}</span>
      <span>{location.city} {location.country}</span>
    </div>
  );
};

export default PhotoListItem;
