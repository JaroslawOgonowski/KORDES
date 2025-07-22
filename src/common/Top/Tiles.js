import z1 from "../../images/zacisk1.JPG";
import z2 from "../../images/zacisk2.JPG";
import f1 from "../../images/f1.JPG";
import f2 from "../../images/f2.JPG";

import b from "../../images/b.jpg";
import wyp2 from "../../images/wyp2.jpg";
import { List, SingleTile, Text, TilesNav } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const Tile = () => {
  return <></>;
};

export const Tiles = () => {
  return (
    <TilesNav>
      <List>
        <Link to="/malowanie-proszkowe" style={{textDecoration: "none"}} ><SingleTile bg={z1}  bgHover={z2}><Text>Malowanie proszkowe</Text></SingleTile></Link>
        <Link to="/renowacja-felg" style={{textDecoration: "none"}} ><SingleTile bg={f1}  bgHover={f2}><Text>Renowacja felg & CNC</Text></SingleTile></Link>
         <SingleTile bg={b} bgHover={wyp2}><Text>Wynajem</Text></SingleTile>
      </List>
    </TilesNav>

  );
};
