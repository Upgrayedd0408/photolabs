import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {

  const { fav } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={fav} />
    </div>
  );
};

export default TopNavigationBar;