import React from "react";
import StoryIcon1 from "../../images/dwong.jpg";
// import StoriesCard from "./StoriesCard";
import * as S from "./SuccessStoriesElements";

const SuccessStories = () => {
  return (
    <>
      <S.StoriesContainer id="stories">
        <S.StoriesH1>Success Stories</S.StoriesH1>
        <S.StoriesWrapper>
          <S.StoriesCard>
            {/* !! REFACTOR INTO CARD COMPONENT */}
            {/* <StoriesCard storyIcon={storyIcon1} storyH2="Story H2" storyP="Story P"/> */}
            <S.StoriesIcon src={StoryIcon1} />
            <S.StoriesH2>Person Name</S.StoriesH2>
            <S.StoriesP>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna."
            </S.StoriesP>
          </S.StoriesCard>
          <S.StoriesCard>
            <S.StoriesIcon src={StoryIcon1} />
            <S.StoriesH2>Person Name</S.StoriesH2>
            <S.StoriesP>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </S.StoriesP>
          </S.StoriesCard>
          <S.StoriesCard>
            <S.StoriesIcon src={StoryIcon1} />
            <S.StoriesH2>Person Name</S.StoriesH2>
            <S.StoriesP>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </S.StoriesP>
          </S.StoriesCard>
        </S.StoriesWrapper>
      </S.StoriesContainer>
    </>
  );
};

export default SuccessStories;
