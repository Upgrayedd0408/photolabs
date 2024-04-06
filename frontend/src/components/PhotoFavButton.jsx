import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {
  const { photoId, isFavouritePhoto, toggleFavourite } = props;

  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={isFavouritePhoto[photoId] || false} selected={isFavouritePhoto[photoId] || false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;