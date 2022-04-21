import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import * as S from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <S.Nav scrollNav={scrollNav}>
        <S.NavbarContainer>
          <S.NavLogo
            to="/"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            Davidson Wong
          </S.NavLogo>
          <S.MobileIcon onClick={toggle}>
            <FaBars />
          </S.MobileIcon>
          <S.NavMenu>
            <S.NavItem>
              <S.NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks
                to="training"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Training
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks
                to="stories"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Success Stories
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </S.NavLinks>
            </S.NavItem>
          </S.NavMenu>
          <S.NavBtn>
            <S.NavBtnLink
              to="/signin"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Sign In
            </S.NavBtnLink>
          </S.NavBtn>
        </S.NavbarContainer>
      </S.Nav>
    </>
  );
};

export default Navbar;
