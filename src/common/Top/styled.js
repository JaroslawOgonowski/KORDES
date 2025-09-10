import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 150px;
  background-image: ${({ bg }) => `url(${bg})`};
  z-index: 0;
  padding-bottom: 20px;
  min-width: 100%;

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

  @media (max-width: 960px) {
    width: 70px;
    height: 70px;
    margin-left: 10px;
  }
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

const scrollWeb = keyframes`
  0% {
    transform: translateX(10%);
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
  10%{ opacity: 1;}
    20% {
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
  @media (max-width: 960px) {
    margin-top: 70px;
  }
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

  @media (max-width: 960px) {
    font-size: 1.4rem;
    padding-left: 10px;
    animation: ${scrollWeb} 35s linear infinite;
  }
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

  @media (max-width: 960px) {
    display: none;
  }
`;

export const TilesNav = styled.nav`
  width: 100%;
  max-width: 100%;
  margin-bottom: 35px;
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

  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: lightblue;
  font-size: 2em;
  filter: grayscale(0.8);
  border: 3px solid rgba(31, 30, 30, 0.8);

  -webkit-mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );
  mask-image: linear-gradient(45deg, #000 25%, rgb(0, 0, 0) 50%, #000 75%);
  -webkit-mask-size: 800%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;
  transition: 300ms;

  &:hover {
    filter: grayscale(0);
    color: white;
    font-size: 3em;
    border-color: rgba(214, 10, 10, 0.6);
    -webkit-mask-position: 100%;
    mask-position: 100%;
    opacity: 1;
    align-items: flex-end;
  }

  /* Warstwa hover */
  &::after {
    content: "";
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
    content: "";
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

  @media (max-width: 960px) {
    height: 200px;
    filter: grayscale(0);
    border-color: rgba(214, 10, 10, 0.6);
    align-items: flex-end;
    /* Animacja automatyczna na mobile */
    animation: mobileHover 8s infinite; /* pełny cykl 10s = 5s efekt + 5s przerwy */
  }

  @keyframes mobileHover {
    0% {
      color: lightblue;
      font-size: 1.3em;
      -webkit-mask-position: 100%;
      mask-position: 100%;
    }
    25% {
      color: white;
      font-size: 1.3em;

      -webkit-mask-position: 100%;
      mask-position: 100%;
    }
    50% {
      color: white;
      font-size: 1.3em;
      -webkit-mask-position: 100%;
      mask-position: 100%;
    }
    75% {
      color: lightblue;
      font-size: 1.3em;

      -webkit-mask-position: 100%;
      mask-position: 100%;
    }
    100% {
      color: lightblue;
      font-size: 1.3em;
      -webkit-mask-position: 100%;
      mask-position: 100%;
    }
  }

  /* animacja "błysku" na mobile */
  @media (max-width: 960px) {
    &::before {
      animation: shine 10s infinite;
    }
    &::after {
      animation: fadeInOut 10s infinite;
    }
  }

  @keyframes shine {
    0%,
    20% {
      transform: translateX(-100%);
      opacity: 0;
    }
    25%,
    55% {
      transform: translateX(100%);
      opacity: 1;
    }
    60%,
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @keyframes fadeInOut {
    0%,
    20% {
      opacity: 0;
    }
    25%,
    55% {
      opacity: 1;
    }
    60%,
    100% {
      opacity: 0;
    }
  }
`;

export const List = styled.li`
  list-style: none;
  padding: 0%;
  margin-left: 0;
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  align-content: center;
  justify-content: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const ListF2 = styled.li`
  list-style: none;
  padding: 0%;
  margin-left: 0;

  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-content: center;
  justify-content: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
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
