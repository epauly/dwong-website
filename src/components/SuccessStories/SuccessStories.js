import React from "react";
import StoryIcon1 from "../../images/dwong.jpg";
// import StoriesCard from "./StoriesCard";
import {
  StoriesContainer,
  StoriesH1,
  StoriesWrapper,
  StoriesCard,
  StoriesIcon,
  StoriesH2,
  StoriesP,
} from "./SuccessStoriesElements";

const SuccessStories = () => {
  return (
    <>
      <StoriesContainer id="stories">
        <StoriesH1>Success Stories</StoriesH1>
        <StoriesWrapper>
          <StoriesCard>
            {/* !! REFACTOR INTO CARD COMPONENT */}
            {/* <StoriesCard storyIcon={storyIcon1} storyH2="Story H2" storyP="Story P"/> */}
            <StoriesIcon src={StoryIcon1} />
            <StoriesH2>Person Name</StoriesH2>
            <StoriesP>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna."
            </StoriesP>
          </StoriesCard>
          <StoriesCard>
            <StoriesIcon src={StoryIcon1} />
            <StoriesH2>Person Name</StoriesH2>
            <StoriesP>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </StoriesP>
          </StoriesCard>
          <StoriesCard>
            <StoriesIcon src={StoryIcon1} />
            <StoriesH2>Person Name</StoriesH2>
            <StoriesP>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </StoriesP>
          </StoriesCard>
        </StoriesWrapper>
      </StoriesContainer>
    </>
  );
};

export default SuccessStories;
