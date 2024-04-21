import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const { topic, fetchPhotosByTopic } = props;

  return (
    <div className="topic-list__item" >
      <span onClick={() => fetchPhotosByTopic(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
