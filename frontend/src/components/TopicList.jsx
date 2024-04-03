import React from "react";
import TopicListItem from "./TopicListItem";



import "../styles/TopicList.scss";



const TopicList = (props) => {

  const { topics } = props;

  const listOfTopics = topics.map((topic) => <TopicListItem key={topic.id} topic={topic} /* fav={fav} favPhoto={favPhoto} */ />);

  return (
    <div className="top-nav-bar__topic-list">
      {listOfTopics}
    </div>
  );
};

export default TopicList;
