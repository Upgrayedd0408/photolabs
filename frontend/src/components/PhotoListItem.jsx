import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const { id, imageSource, profile, username, location } = props.sampleDataForPhotoListItem;

  return (
    <div key={id}>
      <img src = {imageSource} />
      <img src = {profile} />
      <h6>{username}</h6>
      <h6>{location.city} {location.country}</h6>
    </div>
  );
};

export default PhotoListItem;
