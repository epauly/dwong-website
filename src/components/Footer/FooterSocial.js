import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "./FooterElements";

const FooterSocial = () => {
  return (
    <div>
      <SocialIcon href="https://www.facebook.com">
        <FaFacebookSquare size={36} />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com">
        <FaLinkedin size={36} />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com">
        <FaInstagram size={36} />
      </SocialIcon>
    </div>
  );
};

export default FooterSocial;
