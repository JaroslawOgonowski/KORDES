import { useState } from "react";
import styled from "styled-components";
import {
  GalleryBox,
  StyledSection,
  Title,
} from "../renowacja-felg/styled";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// Zdjęcia – podmień na swoje
import nt1 from "../../images/WynajemNissan/n1.jpg";
import nt2 from "../../images/WynajemNissan/n2.jpg";
import nt3 from "../../images/WynajemNissan/n3.jpg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Section = styled.section`
  background: #1c1c1c;
  color: #f5f5f5;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);

  @media (max-width: 960px) {
    padding: 10px;
  }
`;

const SectionPrime = styled(Section)`
  width: 90%;
`;

const Title2 = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: crimson;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 1.1em;
    text-align: center;
  }
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

// const PriceNote = styled.p`
//   margin-top: 0.5rem;
//   font-size: 0.95rem;
//   color: #b4b4b4ff;
//   font-style: italic;

//   strong {
//     color: crimson;
//   }
// `;

const SubTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    font-size: 1.1em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const Card = styled.div`
  background: black;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 960px) {
    padding: 1rem;
    padding-bottom: 30px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;

  @media (max-width: 960px) {
    margin: 10px;
  }
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

  @media (max-width: 960px) {
    padding-bottom: 20px;
  }
`;

export const WynajemNissanNT400 = () => {
  const photos = [
    { src: nt1, width: 3, height: 4 },
    { src: nt2, width: 3, height: 4 },
    { src: nt3, width: 3, height: 4 }
  ];

  const [current, setCurrent] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, { index }) => {
    setCurrent(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrent(0);
    setViewerIsOpen(false);
  };

  return (
    <StyledSection>
      <Title>Nissan NT400</Title>
      <Container>
        <SectionPrime>
          <Title2>🚚 Nissan NT400 – Lekki samochód ciężarowy</Title2>
          <SubTitle>
            Niezawodny i ekonomiczny pojazd do transportu towarów – idealny do
            przeprowadzek, przewozu sprzętu i materiałów.
          </SubTitle>

          <Grid>
            <Card>
              <CardTitle>⚙️ Silnik i Osiągi</CardTitle>
              <List>
                <li>Silnik diesla 2.5 dCi – 150 KM</li>
                <li>Manualna skrzynia 6-biegowa</li>
                <li>Ładowność do 1,5 tony</li>
              </List>
            </Card>

            <Card>
              <CardTitle>🛋️ Komfort</CardTitle>
              <List>
                <li>Miejsce dla 3 osób w kabinie</li>
                <li>Klimatyzacja</li>
                <li>Wygodne fotele i duża widoczność</li>
              </List>
            </Card>

            <Card>
              <CardTitle>📦 Przestrzeń ładunkowa</CardTitle>
              <List>
                <li>Paka do transportu dużych przedmiotów</li>
                <li>Idealny do przeprowadzek i transportu towarów</li>
                <li>Wysoka trwałość i solidna konstrukcja</li>
              </List>
            </Card>

            <Card>
              <CardTitle>🛡️ Bezpieczeństwo</CardTitle>
              <List>
                <li>ABS, ESP, kontrola trakcji</li>
                <li>Poduszki powietrzne kierowcy i pasażera</li>
                <li>Solidna rama i niezawodny układ hamulcowy</li>
              </List>
            </Card>
          </Grid>

          <CTA>
            <p>📅 Dostępny do wynajmu krótko- i długoterminowego</p>
            <a href="#kontakt">Zarezerwuj teraz</a>
          </CTA>
        </SectionPrime>

        <GalleryBox>
          <Gallery photos={photos} onClick={openLightbox} targetRowHeight={160} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel currentIndex={current} views={photos} />
              </Modal>
            ) : null}
          </ModalGateway>
        </GalleryBox>

        {/* <Section>
          <Title2>🚚 Ceny wynajmu</Title2>
          <p>
            <strong>Limit: 300 km/doba</strong> (po przekroczeniu dopłata 1 km =
            0,60 zł)
          </p>
          <List>
            <li>
              1–3 dni → <strong>300 zł/doba</strong>
            </li>
            <li>
              4–6 dni → <strong>260 zł/doba</strong>
            </li>
            <li>
              7–9 dni → <strong>240 zł/doba</strong>
            </li>
            <li>
              10–14 dni → <strong>220 zł/doba</strong>
            </li>
            <li>
              Powyżej 14 dni → <strong>200 zł/doba</strong>
            </li>
          </List>
          <PriceNote>
            📌 Stawka dobowa bez limitu kilometrów: <strong>550 zł</strong>
          </PriceNote>
        </Section> */}

        <Section>
          <Title2>🧰 Usługi dodatkowe</Title2>
          <List>
            <li>🚗 Door to door → od <strong>100 zł</strong> (podstawienie) + od <strong>100 zł</strong> (odbiór)</li>
            <li>🧼 Mycie → <strong>50 zł</strong></li>
            <li>🧹 Czyszczenie pojazdu → <strong>100 zł</strong></li>
            <li>🪑 Pranie tapicerki → <strong>250 zł</strong></li>
          </List>
        </Section>

        {/* <Section>
          <Title2>💳 Warunki wynajmu</Title2>
          <List>
            <li>Kaucja zwrotna: <strong>1500 zł</strong></li>
            <li>Rezerwacja = wpłata kaucji <strong>1500 zł</strong></li>
            <li>Płatność: gotówka 💵 lub przelew 💳 (przedpłata)</li>
            <li>Zwrot przed terminem → <strong>opłata nie jest zwracana</strong></li>
          </List>
        </Section>

        <Section>
          <Title2>💰 Dane do przelewu</Title2>
          <p>Santander Bank Polska</p>
          <p>
            <strong>98 1500 1689 1216 8006 1885 0000</strong>
          </p>
        </Section> */}
      </Container>
    </StyledSection>
  );
};
