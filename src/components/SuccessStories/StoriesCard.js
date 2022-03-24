import React from "react";

const StoriesCard = (props) => {
  return (
    <>
      <StoriesIcon src={props.storyIcon} />
      <StoriesH2>{props.storyH2}</StoriesH2>
      <StoriesP>{props.storyP}</StoriesP>
    </>
  );
};

export default StoriesCard;
