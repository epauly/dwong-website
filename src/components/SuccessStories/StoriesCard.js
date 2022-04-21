import React from "react";
import * as S from "./SuccessStoriesElements";

//!! FOR REFACTOR

const StoriesCard = (props) => {
  return (
    <>
      <S.StoriesIcon src={props.storyIcon} />
      <S.StoriesH2>{props.storyH2}</S.StoriesH2>
      <S.StoriesP>{props.storyP}</S.StoriesP>
    </>
  );
};

export default StoriesCard;
