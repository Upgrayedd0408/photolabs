import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photo;
  const { isFavouritePhoto, toggleFavourite, displayPhotoModal, displayMode } = props;

  const handleClick = () => {
    displayPhotoModal(id);
  };

  const imageClassName = displayMode === 'Modal' ? 'photo-details-modal__image' : 'photo-list__image';

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} isFavouritePhoto={isFavouritePhoto} toggleFavourite={toggleFavourite} />
      <div className="photo-list__user-details">
        <img src={urls.regular} className={imageClassName} onClick={handleClick} />
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
