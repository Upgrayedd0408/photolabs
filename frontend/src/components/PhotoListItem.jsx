import React from "react";

import "../styles/PhotoListItem.scss";







const PhotoListItem = (props) => {
  const photos = [props.photoData, props.photoData, props.photoData];

  const list = photos.map((photo) => {
    return (
      <div key={photo.id} className="photo-list__item">
        <img src={photo.imageSource} className="photo-list__image" />
        <img src={photo.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-details">
          <span className="photo-list__user-info">
            {photo.username}
          </span>
          <span className="photo-list__user-location">
            {photo.location.city} {photo.location.country}
          </span>
        </div>
      </div>
    );
  });
  

  return (
    <section>
      {list}
    </section>
  );
};

export default PhotoListItem;
