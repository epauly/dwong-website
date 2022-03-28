import React from "react";
import { Container, Copyright, SocialWrapper } from "./FooterElements";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <Container>
      <SocialWrapper>
        <FooterSocial />
      </SocialWrapper>
      <Copyright>Eric Pauly &copy; {new Date().getFullYear()}</Copyright>
    </Container>
  );
};

export default Footer;
