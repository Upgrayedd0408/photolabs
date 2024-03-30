import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const { id, imageSource, profile, username, location } = props.photoData;

  return (
    <div key={id} className="photo-list__item">
      <img src={imageSource} className="photo-list__image" />
      <img src={profile} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <span className="photo-list__user-info">
          {username}
        </span>
      </div>
      <div className="photo-list__user-details">
        <span className="photo-list__user-location">
          {location.city} {location.country}
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;
