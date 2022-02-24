import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          /* Video by Tima Miroshnichenko from Pexels: https://www.pexels.com/video/close-up-view-of-weight-discs-in-a-gym-6389055/ */
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Davidson Wong Fitness</HeroH1>
        <HeroP>Fitness training specialized for you.</HeroP>
        <HeroBtnWrapper>
          <Button to="contact">
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
