import styled from "styled-components";

export const Socials = styled.section`
  margin-top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    margin-top: 20px;
    }
`;
export const SocialsIconsContainer = styled.section`
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
`;
export const SocialRowTitle = styled.div`
  color: black;
  text-decoration: none;
  margin-top: 60px;
  font-size: 2em;
  margin-left: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  color: #ff0000ff;

  @media (max-width: 960px) {
    margin-top: 20px;
  }
`; 
export const SocialRow = styled.a`
  color: black;
  text-decoration: none;
  margin-top: 60px;
  font-size: 2em;
  margin-left: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    scale: 1.05;
  }

  @media (max-width: 960px) {
    margin-top: 20px;
  }
`;
export const SocialRow2 = styled.a`
  color: black;
  text-decoration: none;
  font-size: 2em;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    scale: 1.05;
  }
`;
export const SocialRowT = styled(SocialRow)`
  width: 100%;
  color: rgb(80, 83, 83);
  font-size: 1.5em;
  cursor: default;

  &:hover {
    scale: 1;
  }

  @media (max-width: 960px) {
    font-size: 1.2em;
  }
`;

export const SocialLogo = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 960px) {
    width: 40px;
    height: 40px;
  }
`;
