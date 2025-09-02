import { useState } from "react";
import styled from "styled-components";
import { GalleryBox, StyledSection, Title, TitleBox } from "../renowacja-felg/styled";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import r1 from "../../images/wynajemRenault/r1.jpg";
import r2 from "../../images/wynajemRenault/r2.jpg";
import r3 from "../../images/wynajemRenault/r3.jpg";
import r4 from "../../images/wynajemRenault/r4.jpg";
import r5 from "../../images/wynajemRenault/r5.jpg";
import r6 from "../../images/wynajemRenault/r6.jpg";
import r7 from "../../images/wynajemRenault/r7.jpg";
import r8 from "../../images/wynajemRenault/r8.jpg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Section = styled.section`
  background: #1c1c1c;
  color: #f5f5f5;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
`;
const SectionPrime = styled.section`
  background: #1c1c1c;
  color: #f5f5f5;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  width: 90%;
`;
const Title2 = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: crimson;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.4rem 0;
    font-size: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    strong {
      color: crimson;
    }
  }
`;

const PriceNote = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #b4b4b4ff;
  font-style: italic;

  strong {
    color: crimson;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: black;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 2rem;

  a {
    display: inline-block;
    background: #2563eb;
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    text-decoration: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.2s ease;

    &:hover {
      background: #1d4ed8;
    }
  }
`;

export const WynajemRenault = () => {
    const photos = [
        { src: r1, width: 0.8, height: 1 },
        { src: r2, width: 4, height: 3 },
        { src: r3, width: 4, height: 3 },
        { src: r4, width: 4, height: 3 },
        { src: r5, width: 4, height: 3 },
        { src: r6, width: 4, height: 3 },
        { src: r7, width: 3, height: 3 },
        { src: r8, width: 3, height: 3 },
    ];

      const [current, setCurrent] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, { photo, index }) => {
    setCurrent(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrent(0);
    setViewerIsOpen(false);
  };
  return (
    <StyledSection>
      <Title>Renault Trafic Long</Title>
      <Container>
        <SectionPrime>
          <Title2>🚐 Renault Trafic L2 – 2022r</Title2>
          <SubTitle>
            2.0 dCi 150 KM | Bardzo Bogate Wyposażenie | Idealny na krótkie i
            długie podróże
          </SubTitle>

          <Grid>
            <Card>
              <CardTitle>⚙️ Silnik i Osiągi</CardTitle>
              <List>
                <li>2.0 dCi – 150 KM</li>
                <li>Manualna skrzynia 6-biegowa</li>
                <li>Niskie spalanie, dynamiczna jazda</li>
              </List>
            </Card>

            <Card>
              <CardTitle>🛋️ Komfort</CardTitle>
              <List>
                <li>Mnóstwo miejsca dla aż 9 osób</li>
                <li>Klimatyzacja automatyczna</li>
                <li>Wygodne, regulowane fotele</li>
                <li>Przestronna wersja L2 (długi rozstaw osi)</li>
              </List>
            </Card>

            <Card>
              <CardTitle>📱 Technologia</CardTitle>
              <List>
                <li>System multimedialny z ekranem dotykowym</li>
                <li>Android Auto / Apple CarPlay</li>
                <li>Bluetooth, USB, gniazda 12V</li>
              </List>
            </Card>

            <Card>
              <CardTitle>🛡️ Bezpieczeństwo</CardTitle>
              <List>
                <li>ABS, ESP, system kontroli trakcji</li>
                <li>Poduszki powietrzne kierowcy i pasażera</li>
                <li>Kamera cofania i czujniki parkowania</li>
              </List>
            </Card>
          </Grid>

          <CTA>
            <p>📅 Dostępny do wynajmu na krótkie i długie terminy</p>
            <a href="#kontakt">Zarezerwuj teraz</a>
          </CTA>
        </SectionPrime>

           <GalleryBox>
          <Gallery
            photos={photos}
            onClick={openLightbox}
            targetRowHeight={160}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel currentIndex={current} views={photos} />
              </Modal>
            ) : null}
          </ModalGateway>
        </GalleryBox>

        <Section>
          <Title2>🚐 Ceny wynajmu busa poza sezonem</Title2>
          <p>
            <strong>Limit: 300 km/doba</strong> (po przekroczeniu dopłata 1 km =
            0,50 zł)
          </p>
          <List>
            <li>
              1–3 dni → <strong>340 zł/doba</strong>
            </li>
            <li>
              4–6 dni → <strong>270 zł/doba</strong>
            </li>
            <li>
              7–9 dni → <strong>245 zł/doba</strong>
            </li>
            <li>
              10–14 dni → <strong>225 zł/doba</strong>
            </li>
            <li>
              Powyżej 14 dni → <strong>200 zł/doba</strong>
            </li>
          </List>
          <PriceNote>
            📌 Stawka dobowa bez limitu kilometrów: <strong>600 zł</strong>
          </PriceNote>
        </Section>

        <Section>
          <Title2>📅 Ceny wynajmu busa w sezonie</Title2>
          <p>
            <strong>Sezon letni:</strong> 01.06–30.09 |{" "}
            <strong>Sezon zimowy:</strong> 20.12–31.03
          </p>
          <p>
            <strong>Limit: 300 km/doba</strong> (po przekroczeniu dopłata 1 km =
            0,50 zł)
          </p>
          <List>
            <li>
              1–3 dni → <strong>350 zł/doba</strong>
            </li>
            <li>
              4–6 dni → <strong>280 zł/doba</strong>
            </li>
            <li>
              7–9 dni → <strong>255 zł/doba</strong>
            </li>
            <li>
              10–14 dni → <strong>235 zł/doba</strong>
            </li>
            <li>
              Powyżej 14 dni → <strong>210 zł/doba</strong>
            </li>
          </List>
          <PriceNote>
            📌 Stawka dobowa bez limitu kilometrów: <strong>600 zł</strong>
          </PriceNote>
        </Section>

        <Section>
          <Title2>🧰 Usługi dodatkowe</Title2>
          <List>
            <li>
              🚗 Door to door → od <strong>100 zł</strong> (podstawienie) + od{" "}
              <strong>100 zł</strong> (odbiór)
            </li>
            <li>
              🧼 Mycie → <strong>50 zł</strong>
            </li>
            <li>
              🧹 Czyszczenie pojazdu → <strong>100 zł</strong>
            </li>
            <li>
              🪑 Pranie tapicerki → <strong>250 zł</strong>
            </li>
            <li>
              🔗 Podpięcie haka → <strong>150 zł</strong>
            </li>
          </List>
        </Section>

        <Section>
          <Title2>🚛 Wynajem długoterminowy</Title2>
          <p>
            👉 Możliwość wynajmu na okres powyżej 30 dni –{" "}
            <strong>wycena indywidualna</strong>.
          </p>
        </Section>

        <Section>
          <Title2>💳 Warunki wynajmu</Title2>
          <List>
            <li>
              Kaucja zwrotna: <strong>1500 zł</strong>
            </li>
            <li>
              Rezerwacja = wpłata kaucji <strong>1500 zł</strong>
            </li>
            <li>Płatność: gotówka 💵 lub przelew 💳 (przedpłata)</li>
            <li>
              Zwrot przed terminem → <strong>opłata nie jest zwracana</strong>
            </li>
          </List>
        </Section>

        <Section>
          <Title2>💰 Dane do przelewu</Title2>
          <p>Santander Bank Polska</p>
          <p>
            <strong>98 1500 1689 1216 8006 1885 0000</strong>
          </p>
        </Section>
      </Container>
    </StyledSection>
  );
};
