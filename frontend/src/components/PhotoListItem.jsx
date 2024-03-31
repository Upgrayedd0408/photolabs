import React from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
  const { imageSource, username, profile, location } = props.photoData;

  return (
    <div className="photo-list__item">
      <PhotoFavButton fav={props.fav} favPhoto={props.favPhoto} />
      <div className="photo-list__user-details">
        <img src={imageSource} className="photo-list__image" />
        <div className="photo-list__user-details2">
          <img src={profile} className="photo-list__user-profile" />
          <div className="photo-list__user-details">
            <span className="photo-list__user-info">
              {username}
            </span>
            <span className="photo-list__user-location">
              {location.city} {location.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
