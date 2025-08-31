import logo from "../../images/logo.png";
import { BannerWrapper, Logo, ScrollingText, ScrollingText2, Wrapper } from "./styled";
import bg from "../../images/background.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const Top = () => {
    const text = " Renowacja felg, CNC, Malowanie proszkowe, Piaskowanie ✦   ";
  return (
    <Link to="strona-glowna">
    <Wrapper bg={bg}>
      <Logo src={logo} />
      <BannerWrapper>
        <ScrollingText>{"  " + text +  "  " + text + "  "}</ScrollingText>
        <ScrollingText2>{"  " + text + "  " +  text + "  "}</ScrollingText2>
      </BannerWrapper>
    </Wrapper>
   </Link>
  );
};
