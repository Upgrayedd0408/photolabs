import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {

  const { isFavouritePhoto, favouriteCount } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {favouriteCount > 0 && <span>Photo added to Favourites!📸</span>} {/* If favouriteCount is more than 0, display notification */}
      <TopicList topics={props.topics} fetchPhotosByTopic={props.fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={Object.values(isFavouritePhoto).some(isFav => isFav)} />
    </div>
  );
};

export default TopNavigationBar;