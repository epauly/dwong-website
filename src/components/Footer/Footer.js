import React from "react";
import * as S from "./FooterElements";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <S.Container>
      <S.SocialWrapper>
        <FooterSocial />
        <S.Copyright>Eric Pauly &copy; {new Date().getFullYear()}</S.Copyright>
      </S.SocialWrapper>
    </S.Container>
  );
};

export default Footer;
