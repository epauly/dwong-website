import React from "react";
import { Button } from "../Button/ButtonElements";
import * as S from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <S.InfoContainer lightBg={lightBg} id={id}>
        <S.InfoWrapper>
          <S.InfoRow imgStart={imgStart}>
            <S.Column1>
              <S.TextWrapper>
                <S.TopLine>{topLine}</S.TopLine>
                <S.Heading lightText={lightText}>{headline}</S.Heading>
                <S.Subtitle darkText={darkText}>{description}</S.Subtitle>
                <S.BtnWrapper>
                  <Button
                    to="#" // !! Add navigate to appropriate pages
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80} // trigger navbar button highlight on scroll
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </S.BtnWrapper>
              </S.TextWrapper>
            </S.Column1>
            <S.Column2>
              <S.ImgWrap>
                <S.Img src={img} alt={alt} />
              </S.ImgWrap>
            </S.Column2>
          </S.InfoRow>
        </S.InfoWrapper>
      </S.InfoContainer>
    </>
  );
};

export default InfoSection;
