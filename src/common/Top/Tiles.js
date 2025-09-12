import z1 from "../../images/m1.jpg";
import z2 from "../../images/m2.jpg";
import f1 from "../../images/fe1.jpg";
import f2 from "../../images/fe2.jpg";
import ag4 from "../../images/agregat/ag4.jpg";
import ag5 from "../../images/agregat/ag5.jpg";
import { List, SingleTile, Text, TilesNav } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AboutKordes from "../../features/onas";


export const Tile = () => {
  return <></>;
};

export const Tiles = () => {
  return (
    <>
    <TilesNav>
      <List>
        <Link to="/malowanie-proszkowe" style={{textDecoration: "none"}} ><SingleTile bg={z1}  bgHover={z2}><Text>Malowanie proszkowe</Text></SingleTile></Link>
        <Link to="/renowacja-felg" style={{textDecoration: "none"}} ><SingleTile bg={f1}  bgHover={f2}><Text>Renowacja felg & CNC</Text></SingleTile></Link>
         <Link to="/wynajem" style={{textDecoration: "none"}} ><SingleTile bg={ag5} bgHover={ag4}><Text>Wynajem</Text></SingleTile></Link>
      </List>
    </TilesNav>
     <AboutKordes/>
     </>

  );
};
