import React from "react";
// import StoriesCard from "./StoriesCard";

const SuccessStories = () => {
  return (
    <>
      <StoriesContainer id="stories">
        <StoriesH1>Success Stories</StoriesH1>
        <StoriesWrapper>
          <StoriesCard>
            <StoriesIcon src={storyIcon1} />
            <StoriesH2>Story H2</StoriesH2>
            <StoriesP>Story P</StoriesP>
          </StoriesCard>
          {/* <StoriesCard storyIcon={storyIcon1} storyH2="Story H2" storyP="Story P"/> */}
        </StoriesWrapper>
      </StoriesContainer>
    </>
  );
};

export default SuccessStories;
