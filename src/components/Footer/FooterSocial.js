import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "./FooterElements";

const FooterSocial = () => {
  return (
    <>
      <SocialIcon href="https://www.linkedin.com/in/davidson-wong-ma-cscs-1516391a">
        <FaLinkedin size={36} />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/dsonone">
        <FaInstagram size={36} />
      </SocialIcon>
    </>
  );
};

export default FooterSocial;
