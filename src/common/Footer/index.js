import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #000;
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
          <MapFrame>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1227.3051379113906!2d20.454982539024535!3d52.03219714312998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47194483240dca77%3A0x96df9603d90f73ba!2s%C5%9Awierkowa%2027%2C%2096-300%20Koryt%C3%B3w%20A!5e0!3m2!1spl!2spl!4v1757664711647!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa KORDES"
            ></iframe>
          </MapFrame>
        </Column>
      </FooterTop>

      <FooterBottom>
        © {new Date().getFullYear()} F.H.U. KORDES – Lakiernia Proszkowa.
        Wszelkie prawa zastrzeżone.
      </FooterBottom>
    </FooterContainer>
  );
};
