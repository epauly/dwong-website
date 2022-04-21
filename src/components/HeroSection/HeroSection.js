import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button/ButtonElements";
import * as S from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <S.HeroContainer id="home">
      <S.HeroBg>
        <S.VideoBg
          autoPlay
          loop
          muted
          /* Video by Tima Miroshnichenko from Pexels: https://www.pexels.com/video/close-up-view-of-weight-discs-in-a-gym-6389055/ */
          src={Video}
          type="video/mp4"
        />
      </S.HeroBg>
      <S.HeroContent>
        <S.HeroH1>Davidson Wong Fitness</S.HeroH1>
        <S.HeroP>Fitness training specialized for you.</S.HeroP>
        <S.HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
          >
            Get Started {hover ? <S.ArrowForward /> : <S.ArrowRight />}
          </Button>
        </S.HeroBtnWrapper>
      </S.HeroContent>
    </S.HeroContainer>
  );
};

export default HeroSection;
