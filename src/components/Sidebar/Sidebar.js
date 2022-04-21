import React from "react";
import * as S from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.Icon onClick={toggle}>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarLink to="about" onClick={toggle}>
            About
          </S.SidebarLink>
          <S.SidebarLink to="training" onClick={toggle}>
            Training
          </S.SidebarLink>
          <S.SidebarLink to="stories" onClick={toggle}>
            Success Stories
          </S.SidebarLink>
          <S.SidebarLink to="contact" onClick={toggle}>
            Contact
          </S.SidebarLink>
        </S.SidebarMenu>
        <S.SideBtnWrap>
          <S.SidebarRoute to="/signin">Sign In</S.SidebarRoute>
        </S.SideBtnWrap>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
};

export default Sidebar;
