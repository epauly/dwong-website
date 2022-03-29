import styled from "styled-components";

export const Container = styled.div`
  /* Test */
  display: flex;
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
`;

export const SocialWrapper = styled.div`
  padding: 25px, 25px;
`;

export const SocialIcon = styled.a`
  margin: 1rem 0.5rem;
  transition: transform 250ms;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    color: #fff;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  opacity: 0.5;
  font-size: 16px;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
