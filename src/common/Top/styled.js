import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 150px;
  background-image: ${({ bg }) => `url(${bg})`};
  z-index: 0;
  padding-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); // <-- stopień przyciemnienia
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2; // <-- żeby dzieci były nad przyciemnieniem
  }
`;

export const Logo = styled.img`
  aspect-ratio: 1 / 1;
  width: 100px;
  height: 100px;
  filter: brightness(1.5);
  margin-left: 50px;
`;

const scroll = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const scroll2 = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  49%{ opacity: 1;}
    50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const BannerWrapper = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: transparent;

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
`;

export const ScrollingText = styled.h1`
padding-left: 10px;
  user-select: none;
  filter: brightness(3);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
  color: white;
  white-space: nowrap;
  animation: ${scroll} 40s linear infinite;
  animation-delay: 0s;
  z-index: 999;

  text-shadow: 0 0 5px crimson, 0 0 10px crimson, 0 0 20px crimson,
    0 0 40px rgba(220, 20, 20, 0.6);
`;

export const ScrollingText2 = styled.h2`
padding-left: 10px;
  user-select: none;
  filter: brightness(3);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  font-size: 2rem;
  color: white;
  white-space: nowrap;
  animation: ${scroll2} 40s linear infinite;
  animation-delay: 20s;
  z-index: 999;

  text-shadow: 0 0 5px crimson, 0 0 10px crimson, 0 0 20px crimson,
    0 0 40px rgba(220, 20, 20, 0.6);
`;

export const TilesNav = styled.nav`

  width: 100%;
  max-width: 100%;
`;
export const SingleTile = styled.li`
  position: relative;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  width: 100%;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Spodnia warstwa - pierwszy obraz */
  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: lightblue;
  font-size: 2em;
  filter: grayscale(0.8);
  border: 3px solid rgba(31, 30, 30, 0.8);

  transition: font-size 0.3s ease, color 0.3s ease, filter 0.3s ease, border 0.3s ease;

  -webkit-mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );
  mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgb(0, 0, 0) 50%,
    #000 75%
  );
  -webkit-mask-size: 800%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;
 
  &:hover {
    filter: grayscale(0);
    color: white;
    font-size: 3em;
    border-color: rgba(214, 10, 10, 0.6);
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
      align-items: flex-end;
  }

  /* Warstwa wierzchnia - drugi obraz */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${({ bgHover }) => `url(${bgHover})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  /* Efekt błysku */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.7s ease, opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    transform: translateX(100%);
    opacity: 1;
  }
`;


export const List = styled.li`
  list-style: none;
  padding: 0%;
  margin-left: -4px;

  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  gap: 5px;
  align-content: center;
  justify-content: center;
`;

export const Text = styled.strong`
  text-decoration: none;
  font-weight: 400;
  background-color: rgba(255, 38, 0, 0.52);
  border-radius: 5px;
  padding: 0 10px;
  text-align: center;
  z-index: 999;
  margin-bottom: 30px;
`;

