import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photo;
  const { isFavouritePhoto, toggleFavourite, toggleModal } = props;

  const handleClick = () => {
    toggleModal(id);
    console.log(`Displaying modal for photo ${id}`);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} isFavouritePhoto={isFavouritePhoto} toggleFavourite={toggleFavourite} />
      <div className="photo-list__user-details">
        <img src={urls.regular} className="photo-list__image" onClick={handleClick} />
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
