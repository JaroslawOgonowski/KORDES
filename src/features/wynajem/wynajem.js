import { ListF2, SingleTile, Text, TilesNav } from "../../common/Top/styled";
import ag1 from "../../images/agregat/ag1.jpg";
import b from "../../images/b.webp";
import n3 from "../../images/WynajemNissan/n3.jpg";
import { StyledSection } from "../renowacja-felg/styled";

import styled from "styled-components";
import { WynajemRenault } from "./wynajemRenault";
import { useEffect, useState } from "react";
import { WynajemAgregat } from "./wynajemAgregat";
import { BackToMain } from "../../common/BackToMain/BackToMain";
import { WynajemNissanNT400 } from "./wynajemNissan";

const Container = styled(StyledSection)`
  width: 100%;
  margin: 0;
`;

export const Wynajem = () => {
  const [activeCard, setActiveCard] = useState("agregat");

  // 🔽 Scroll o 1vh przy każdej zmianie karty
  useEffect(() => {
    window.scrollBy({
      top: window.innerHeight * 0.55,
      left: 0,
      behavior: "smooth",
    });
  }, [activeCard]);

  return (
    <>
      <Container>
        <TilesNav>
          <ListF2>
            <SingleTile
              to="/wynajem"
              bg={ag1}
              bgHover={ag1}
              onClick={() => setActiveCard("agregat")}
            >
              <Text>Agregat 110kVa</Text>
            </SingleTile>

            <SingleTile
              to="/wynajem"
              bg={b}
              bgHover={b}
              onClick={() => setActiveCard("renault")}
            >
              <Text>Renault Trafic Long</Text>
            </SingleTile>
            <SingleTile
              to="/wynajem"
              bg={n3}
              bgHover={n3}
              onClick={() => setActiveCard("nissan")}
            >
              <Text>Nissan NT400</Text>
            </SingleTile>
          </ListF2>
        </TilesNav>
      </Container>

      {activeCard === "agregat" && <WynajemAgregat />}
      {activeCard === "renault" && <WynajemRenault />}
      {activeCard === "nissan" && <WynajemNissanNT400 />}
      <BackToMain />
    </>
  );
};
