import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css, keyframes } from "styled-components";

const glowingAnimationGenerate = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

const Back = styled.button`
  border: none;
  outline: none;
  color: #fff;
  background: #000000d4;
  cursor: pointer;
  border-radius: 10px 10px 0 0;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingAnimationGenerate} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px 10px 0 0;
  }

    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100000;
    width: 20%;
    font-family: 'Saira', sans-serif;
    font-size: 1em;
    margin: 0;
    padding: 10px;
    
    @media (max-width: 960px) { 
      width: 60%;
      padding: 8px;
      margin-left: -10%;
    }

`;


export const BackToMain = () => {return(<>
    <Link to="" ><Back>Powrót do strony głównej</Back></Link>
</>)}