import React from "react";
import { Container, Copyright, SocialWrapper } from "./FooterElements";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <Container>
      <SocialWrapper>
        <FooterSocial />
        <Copyright>Eric Pauly &copy; {new Date().getFullYear()}</Copyright>
      </SocialWrapper>
    </Container>
  );
};

export default Footer;
