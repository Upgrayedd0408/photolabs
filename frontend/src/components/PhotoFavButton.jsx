import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {
  const { fav, favPhoto } = props;

  const handleClick = () => {
    favPhoto();
    console.log("clicked!");
    console.log(fav);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={fav} selected={fav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;