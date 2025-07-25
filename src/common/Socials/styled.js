import styled from "styled-components";

export const Socials = styled.section`
margin-top: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const SocialRow = styled.a`
color: black;
text-decoration: none;
margin-top: 100px;
font-size: 2em;
margin-left:40px;
display: flex;
align-items: center;
gap: 10px;
user-select: none;
cursor: pointer;
transition: 500ms;
  
&:hover {
scale: 1.05;

  }
`
export const SocialRowT = styled(SocialRow)`
  color: rgb(80, 83, 83);
  font-size: 1.6em;
  cursor: default;

  &:hover {
scale: 1;

  }
`

export const SocialLogo = styled.img`
width: 50px;
height: 50px;
`