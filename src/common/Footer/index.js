import React from "react";
import styled from "styled-components";
import m from "../../images/mapa.jpg"
const FooterContainer = styled.footer`
  background: #111111f3;
  color: #ccc;
  padding: 28px;
  margin-top: 40px;
  border-radius: 12px 12px 0 0;
  font-size: 14px;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1240px;
  margin: 0 auto 20px auto;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: left;
`;

const Title = styled.h4`
  margin: 0 0 10px;
  color: #fff;
  font-size: 16px;
`;

const Item = styled.p`
  margin: 4px 0;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 16px;
  font-size: 12px;
  color: #888;
  text-align: center;
`;

const MapFrame = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  background: #222;
`;

export const Mapa = () => {
  return(<>
  <a href="https://maps.app.goo.gl/WrbDoz4NCXz1Xne27" target="_blank"><img src={m} alt="Mapa dojazd do renowacja felg, malowanie proszkowe Kordes" style={{maxWidth: "100%"}}></img></a>
  </>)
}
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Column>
          <Title>F.H.U. KORDES</Title>
          <Item>Świerkowa 27, 96-300 Korytów (Żyrardów)</Item>
        </Column>

        <Column>
          <Title>Kontakt</Title>
          <Item>📞 +48 501 271 097</Item>
          <Item>📞 +48 509 250 755</Item>
          <Item>✉️ biuro@kordes.pl</Item>
        </Column>

        <Column>
          <Title>Godziny otwarcia</Title>
          <Item>Pn–Pt: 8:00 – 17:00</Item>
          <Item>Sobota: Nieczynne</Item>
          <Item>Niedziela: Nieczynne</Item>
        </Column>

        <Column>
          <Title>Mapa</Title>
         <Mapa/>
        </Column>
      </FooterTop>

      <FooterBottom>
        © {new Date().getFullYear()} F.H.U. KORDES – Lakiernia Proszkowa.
        Wszelkie prawa zastrzeżone.
      </FooterBottom>
    </FooterContainer>
  );
};
