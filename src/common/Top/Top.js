import logo from "../../images/logo.png";
import { BannerWrapper, Logo, ScrollingText, ScrollingText2, Wrapper } from "./styled";
import bg from "../../images/background.png";
import { Tiles } from "./Tiles";
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
 



       {/* <iframe
  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100048795611189%2Fvideos%2F4036504009997999%2F&show_text=false&width=267&t=0"
  width="267"
  height="476"
  style={{ border: "none", overflow: "hidden" }}
  scrolling="no"
  frameBorder="0"
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
/> */}

    </Link>
  );
};
