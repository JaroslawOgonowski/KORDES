import styled, { keyframes } from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  margin-left: 5%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BIO = styled.div`
  width: 100%;
  font-size: 1.2em;
`;

export const List = styled.div`
  margin: 0;
  margin-top: 50px;
  margin-bottom: 60px;
  padding: 0;
  width: 100%;
  font-size: 1.1em;
  background-color:   rgba(34, 31, 32, 0.86) 60%,;
`;
export const ListT = styled.h2`
  margin-bottom: -20px;
  padding: 0;
  font-size: 1.4em;

`
const pulse = keyframes`
  0% {
    font-weight: 400;
    transform: scale(1);
  }
  10% {

    transform: scale(1.05);
  }
  20% {
    font-weight: 400;
    transform: scale(1);
  }
  100% {
        font-weight: 400;
    transform: scale(1);
  }
`;

export const AnimatedList = styled.ul`
  padding: 0;
  margin: 20px;
`;

export const AnimatedItem = styled.li`
  margin-bottom: 8px;
  transition: 500ms;
  animation: ${pulse} 10s ease infinite;
  animation-delay: ${(props) => props.delay}s;
`;
export const AnimatedItem2 = styled.li`
  margin-bottom: 8px;
  transition: 500ms;
  animation: ${pulse} 12s ease infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const rotate = keyframes`
  0% {
   transform: rotate(0deg);
  }
  100% {

    transform: rotate(360deg);
  }
`;

export const FBox = styled.div`
  width: 100%;
  position: relative;
`;

export const Felga = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: -300px;
  margin-left: 200px;
  animation: ${rotate} 10s ease infinite;
`;

const swing = keyframes`
  0% {
    transform:  rotate(0deg);
  }
  25% {
    transform:  rotate(15deg);
  }
  50% {
    transform:  rotate(0deg);
  }
  75% {
    transform:  rotate(-15deg);
  }
  100% {
    transform:  rotate(0deg);
  }
`;

export const Gun = styled.img`
  width: 800px;
  height: 400px;
  position: absolute;
  z-index: -1;
  top: 0px;
  right: -200px;
  transform-origin: right center;
  transform: rotate(-10deg);
`;
export const GalleryBox = styled.div`
  width: 90%;
  align-self: flex-start;
`;

export const Title = styled.h2`
  width: 112%;
  margin-left: -6%;
  margin-top: -20px;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  align-self: flex-start;
  font-size: 2.3em;

  color: #f2f2f2;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.5),
    0 0 6px rgba(255, 255, 255, 0.4);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(
      8deg,
      transparent 55%,
      rgba(255, 0, 51, 0.59) 60%,
      transparent 65%
    ),
    linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.98),
      rgba(0, 0, 0, 0.92),
      rgba(20, 20, 20, 0.92),
      rgba(0, 0, 0, 0.98)
    );
`;

export const Table = styled.table`
width: 80%;
display: flex;
flex-direction: column;
margin-top:40px;
padding: 0;
align-self: flex-start;
`

export const STableRow = styled.tr`
padding-left: calc(20px + ${(props) => props.extraPadding}px);
border-bottom: 1px solid #ccc;
display: grid;
grid-template-columns: auto 0.7fr 1fr;
gap: 30px;
align-items: center;
transition: 500ms;

&:hover{
  transform: scale(1.03);
}
`
export const List2 = styled.ul`
  margin: 0;
  margin-top: 30px;  margin-bottom: 50px;
  padding: 0;
  list-style: none;
  font-size: 1.1em;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  `
export const LI2 = styled.li`
width: auto;
display: flex;
gap: 20px;
align-items: center;
transition: 500ms;

&:hover{
  transform: scale(1.03);
}

`

