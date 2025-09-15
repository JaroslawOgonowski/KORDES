import styled, { css } from "styled-components";
import { ReactComponent as Phone } from "../../images/phone-number-svgrepo-com.svg";
import { ReactComponent as Mail } from "../../images/email-svgrepo-com.svg";
import { ReactComponent as Facebook } from "../../images/Facebook_black.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const StyledPageFooter = styled.footer`
  margin-top: 120px;
  max-width: 691px;
    
  @media (max-width: 1360px) {
    margin-left: 16px;
    margin-right: 16px;
  };

  @media (max-width: 767px) {
    margin: 60px 16px 0 16px;
  };

  @media (min-width: 1700px) {
    max-width: 40%;
  }
`;

export const StyledParahraph = styled.p`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (min-width: 1700px) {
    font-size: 0.8vw;
  }
`;

export const StyledLink = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.5s;
  color: #ffc402a8;
  
  &:hover{
      color: #ffc402ff;
    };
  
    @media (max-width: 767px) {
    font-size: 18px;
  };

  @media (min-width: 1700px) {
    font-size: 1.8vw;
  }
`;

export const Content = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 18px;

  @media (min-width: 1700px) {
    font-size: 1.1vw;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
`;


export const SocialLink = styled.a`
  color: white;
  width: 48px;
  height: 48px;
  transition: 0.5s;

  &:hover{
      color: #ffc402
  };
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  padding-bottom: 50px;
  background-color: black;
`;

export const PhoneIcon = styled(Phone)`
  width: 40px;
  height: 40px;

  @media (min-width: 1700px) {
    width: 2vw;
    height: 2vw;
    margin-right: 0.5vw;
  }
`
export const MailIcon = styled(Mail)`
  width: 40px;
  height: 40px;

  @media (min-width: 1700px) {
    width: 2vw;
    height: 2vw;
    margin-right: 0.5vw;
  }
`
export const FacebookIcon = styled(Facebook)`
  width: 40px;
  height: 40px;

  @media (min-width: 1700px) {
    width: 2vw;
    height: 2vw;
    margin-right: 0.5vw;
  }
`