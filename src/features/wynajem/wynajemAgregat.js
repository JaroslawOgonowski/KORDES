import styled from "styled-components";
import { TableRow } from "../malowanie-proszkowe/malowanie";
import {
  StyledSection,
  Subtitle,
  TableCenter,
  Title,
} from "../renowacja-felg/styled";
import i1 from "../../images/agregat/icons/i1.jpg";
import i2 from "../../images/agregat/icons/i2.jpg";
import i3 from "../../images/agregat/icons/i3.jpg";
import i4 from "../../images/agregat/icons/i4.jpg";
import i5 from "../../images/agregat/icons/i5.jpg";
import i6 from "../../images/agregat/icons/i6.jpg";
import i7 from "../../images/agregat/icons/i7.jpg";
import i8 from "../../images/agregat/icons/i8.jpg";
import i9 from "../../images/agregat/icons/i9.jpg";
import i10 from "../../images/agregat/icons/i10.jpg";
import i11 from "../../images/agregat/icons/i11.jpg";
import ag1 from "../../images/agregat/ag1.jpg";
import ag4 from "../../images/agregat/ag4.jpg";
import ag8 from "../../images/agregat/ag8.jpg";
import ag9 from "../../images/agregat/ag9.jpg";
import ag12 from "../../images/agregat/ag3.jpg";

import { ImageInVBox } from "../../common/VideoComponent";
import { FotoAg } from "./styled";
import { BIO } from "./bio";

const Container = styled.section`
  max-width: 100%;
  margin: 32px auto;
  padding: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;

    @media (max-width: 960px) {
    padding: 16px;
    }
`;

const Section = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin: 16px 0;
`;

const Title2 = styled.h2`
  font-size: 20px;
  margin: 0 0 12px 0;
  color: #0f172a;
`;

const Paragraph = styled.p`
  margin: 8px 0;
  line-height: 1.5;
  color: #16202a;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e6eef6;
  padding: 16px;
  border-radius: 12px;

  @media (max-width: 960px) {
    padding: 8px;
    }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 6px 0 0 0;
`;

const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin: 10px 0;
  font-weight: 500;
  color: #0f172a;
`;

const Icon = styled.span`
  min-width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(14, 165, 233, 0.12);
  color: #0369a1;
  font-size: 14px;
`;

const Conditions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Small = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #334155;
`;

export const WynajemAgregat = () => {
  return (
    <>
      <StyledSection>
        <Title>
          Wynajem agregatu prądotwórczego Siltec 110 kVa – mobilne źródło
          energii w każdych warunkach
        </Title>
 <BIO />
       
        <TableCenter>
          <Subtitle>Dane techniczne urządzenia </Subtitle>
          <TableRow
            title="Marka i model agregatu"
            description="Siltec 110 kVa"
            icon={i1}
            extraPadding={0}
          />
          <TableRow
            title="Moc znamionowa"
            description="110 kVa 80 kW (prime)"
            icon={i2}
            extraPadding={0}
          />
          <TableRow
            title="Napięcie wyjściowe"
            description="400 V / 230 V (3-fazowe)"
            icon={i3}
            extraPadding={0}
          />
          <TableRow
            title="Częstotliwość"
            description="50 Hz"
            icon={i4}
            extraPadding={0}
          />{" "}
          <TableRow
            title="Typ
          silnika"
            description="Perkins"
            icon={i5}
            extraPadding={0}
          />
          <TableRow
            title="Rodzaj
          paliwa"
            description="Diesel"
            icon={i6}
            extraPadding={0}
          />
          <TableRow
            title="Pojemność zbiornika paliwa oraz autonomia (czas pracy przy pełnym zbiorniku)"
            description="160l, 100% obciążenia → 6–7 h pracy"
            icon={i7}
            extraPadding={0}
          />
          <TableRow
            title="Poziom hałasu"
            description="Soundproof canopy 72–75 dB(A) @ 7 m"
            icon={i8}
            extraPadding={0}
          />
          <TableRow
            title="Masa całkowita i wymiary"
            description="waga: 1 365 kg, wymiary: 2650 × 950 × 1450 mm, "
            icon={i9}
            extraPadding={0}
          />
          <TableRow
            title="Rodzaj przyczepy"
            description="Dwuosiowa, hamowana, z dyszlem skrętnym"
            icon={i10}
            extraPadding={0}
          />
          <TableRow
            title="Mobilność i transport"
            description="W pełni zabudowana przyczepa z opcją dowozu i odbioru"
            icon={i11}
            extraPadding={0}
          />
        </TableCenter>
         <FotoAg>
          <ImageInVBox src={ag1} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag4} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag8} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag9} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag12} alt="Malowanie proszkowe" />
        </FotoAg>
        <Container>

          <Subtitle>Zastosowania</Subtitle>
          <Card>
            <List>
              <ListItem>
                <Icon>✅</Icon>
                <div>
                  <Paragraph>
                    Zasilanie awaryjne dla zakładów przemysłowych i instytucji
                  </Paragraph>
                </div>
              </ListItem>

              <ListItem>
                <Icon>✅</Icon>
                <div>
                  <Paragraph>
                    Place budowy, inwestycje drogowe i infrastrukturalne
                  </Paragraph>
                </div>
              </ListItem>

              <ListItem>
                <Icon>✅</Icon>
                <div>
                  <Paragraph>
                    Imprezy plenerowe, koncerty, eventy masowe
                  </Paragraph>
                </div>
              </ListItem>

              <ListItem>
                <Icon>✅</Icon>
                <div>
                  <Paragraph>
                    Awaryjne źródło energii dla szpitali i centrów danych
                  </Paragraph>
                </div>
              </ListItem>

              <ListItem>
                <Icon>✅</Icon>
                <div>
                  <Paragraph>
                    Zasilanie maszyn i urządzeń wymagających dużej mocy
                  </Paragraph>
                </div>
              </ListItem>
            </List>
          </Card>

          <Subtitle>Korzyści z wynajmu w KORDES</Subtitle>
          <Grid>
            <Card>
              <List>
                <ListItem>
                  <Icon>🚚</Icon>
                  <div>
                    <Paragraph>
                      <strong>Mobilność</strong> – agregat na przyczepie, szybki
                      transport w dowolne miejsce
                    </Paragraph>
                  </div>
                </ListItem>

                <ListItem>
                  <Icon>🔧</Icon>
                  <div>
                    <Paragraph>
                      <strong>Niezawodność</strong> – sprzęt serwisowany i
                      gotowy do pracy 24/7
                    </Paragraph>
                  </div>
                </ListItem>

                <ListItem>
                  <Icon>🛡️</Icon>
                  <div>
                    <Paragraph>
                      <strong>Pełne bezpieczeństwo</strong> – urządzenie zgodne
                      z normami i wyposażone w zabezpieczenia
                    </Paragraph>
                  </div>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem>
                  <Icon>🔁</Icon>
                  <div>
                    <Paragraph>
                      <strong>Elastyczne warunki wynajmu</strong> –
                      krótkoterminowo i długoterminowo
                    </Paragraph>
                  </div>
                </ListItem>

                <ListItem>
                  <Icon>⚙️</Icon>
                  <div>
                    <Paragraph>
                      <strong>Możliwość obsługi technicznej</strong> –
                      opcjonalnie operator lub serwis na miejscu
                    </Paragraph>
                  </div>
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Subtitle>Warunki wynajmu</Subtitle>
          <Card>
            <Conditions>
              <Paragraph>
                <Small>📅 Okres wynajmu:</Small> od 1 dnia do kilku miesięcy
              </Paragraph>

              <Paragraph>
                <Small>⛽ Paliwo:</Small> zapewniamy zatankowany agregat
                (możliwość dostawy paliwa w trakcie wynajmu)
              </Paragraph>

              <Paragraph>
                <Small>🚚 Transport:</Small> możliwość dowozu i odbioru na
                wskazane miejsce
              </Paragraph>

              <Paragraph>
                <Small>🛠️ Obsługa techniczna:</Small> w opcji z operatorem lub
                samodzielnie
              </Paragraph>

              <Paragraph>
                <Small>💰 Cena:</Small> ustalana indywidualnie w zależności od
                czasu i zakresu wynajmu
              </Paragraph>
            </Conditions>
          </Card>

          <Paragraph style={{ marginTop: 20, fontSize: 20, color: "#475569" }}>
            Masz dodatkowe wymagania (np. moc agregatu, doposażenie, miejsce
            dostawy)? Napisz, a dopasuję ofertę.
          </Paragraph>
        </Container>
      </StyledSection>
    </>
  );
};
