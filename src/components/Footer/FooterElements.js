import styled from "styled-components";

export const Container = styled.div`
  /* Test */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* End Test */

  padding: 80px, 60px;
  background: #010606;
  bottom: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    padding: 70px 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px 20px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const SocialIcon = styled.a`
  margin: 1rem 0.5rem;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-2px);
    color: #fff;
  }
`;

export const CopyrightWrapper = styled.div`
  display: flex;
`;

export const Copyright = styled.p`
  color: #fff;
  opacity: 0.5;
  font-size: 14px;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
