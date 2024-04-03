import React from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
  const { location, urls, user } = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton fav={props.fav} favPhoto={props.favPhoto} />
      <div className="photo-list__user-details">
        <img src={urls.regular} className="photo-list__image" />
        <div className="photo-list__user-details2">
          <img src={user.profile} className="photo-list__user-profile" />
          <div className="photo-list__user-details">
            <span className="photo-list__user-info">
              {user.name}
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
