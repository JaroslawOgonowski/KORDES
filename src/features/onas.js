import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import p from "../images/prezes.jpg";
import pracownia from "../images/pracownia.jpg";

// --- styled-components ---

const Container = styled.div`
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
  max-width:1240px;
  margin: 36px auto;
  padding: 28px;
  background: #080000e0;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(60, 61, 63, 0.08);
`;

const Head = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 12px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #333;
`;

const LogoIcon = styled.img`
  width: 100%;
  height: auto;
`;

const TitleGroup = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  color: white;
`;

const Subtitle = styled.p`
  margin: 4px 0 0 0;
  color: #ccc;
  font-size: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 22px;
`;

const Card = styled.section`
  background: #fafafa;
  border-radius: 10px;
  padding: 18px;
`;

const Carda = styled.section`
  background: none;
  border-radius: 10px;
  padding: 18px;
  color: white;
`;

const Small = styled.p`
  margin: 6px 0 0 0;
  color: ${(props) => props.color || "#555"};
  font-size: 13px;
`;

const ImgPlaceholder = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
`;

const ContactItem = styled.li`
  margin: 6px 0;
  font-size: 14px;
`;

const MapFrame = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  background: #ddd;
`;

const OwnerRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const IMG = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const SectionTitle = styled.h3`
  margin-top: ${(props) => props.mt || "16px"};
  color: ${(props) => props.color || "inherit"};
`;

const SectionSubtitle = styled.h2`
  margin-top: 0;
`;

// --- Dane ---
const DATA = {
  name: "F.H.U. KORDES – Lakiernia Proszkowa (Żyrardów/Korytów)",
  address: "Świerkowa 27, Korytów (96-300) – Żyrardów",
  phonePrimary: "+48 501 271 097",
  phoneAlt: "+48 509 250 755",
  owner: "Arkadiusz Rdes",
  services: [
    "Lakierowanie proszkowe elementów metalowych",
    "Renowacja i malowanie felg samochodowych",
    "Usługi CNC i prostowanie felg",
    "Malowanie detaliczne i seryjne dla przemysłu i klientów indywidualnych",
  ],
  noteHours:
    "Poniedziałek – Piątek: 8:00 – 17:00; Sobota: Nieczynne; Niedziela: nieczynne",
};

// --- Komponent główny ---
export default function AboutKordes() {
  return (
    <Container>
      <Head>
        <Logo>
          <LogoIcon src={logo} alt="logo KORDES" />
        </Logo>
        <TitleGroup>
          <Title>{DATA.name}</Title>
          <Subtitle>
            Specjalistyczna lakiernia proszkowa i renowacja felg — Żyrardów
          </Subtitle>
        </TitleGroup>
      </Head>

      <Grid>
        <div>
          <Card>
            <SectionSubtitle>ℹ️ O nas</SectionSubtitle>
            <Small>
              Zajmujemy się specjalistyczną renowaccją felg oraz oferujemy kompleksowe usługi
              malarskie — od pojedynczych detali po większe serie produkcyjne.
              Nasze doświadczenie w renowacji felg i lakierowaniu elementów
              przemysłowych sprawia, że obsługujemy zarówno klientów
              indywidualnych, jak i firmy lokalnie, z Polski i całej Europy.
            </Small>

            <SectionTitle>⭐ Co nas wyróżnia</SectionTitle>
            <ul>
              <li>
                Wieloletnie doświadczenie w renowacji felg i lakiernictwie
                proszkowym
              </li>
               <li>
                Liczne współprace z firmami stawiającymi na jakość- od lokalnych po największe korporacje.
              </li>
              <li>
                Kompleksowa obsługa: przygotowanie, malowanie, wykończenie
              </li>
              <li>Elastyczność: prace pojedyncze i seryjne</li>
              <li>Szybki kontakt i możliwość umawiania zleceń telefonicznie</li>
              <li>Bezpośredni kontakt i własnoręczne zaangażowanie właściclea firmy na każdym etapie</li>
            </ul>

            <SectionTitle>🛠️ Usługi</SectionTitle>
            <ul>
              {DATA.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <SectionTitle>📍 Jak dojechać</SectionTitle>
            <Small>
              Obiekt znajduje się w dzielnicy Korytów przy ulicy Świerkowej (kod
              96-300). Najwygodniej dojechać samochodem — dojazd lokalnymi
              drogami od Żyrardowa lub Mszczonowa. Dla większych elementów
              istnieje możliwość dostawy/przyjazdu na umówioną godzinę.
            </Small>

            <SectionTitle>⏰ Godziny otwarcia</SectionTitle>
            <Small>{DATA.noteHours}</Small>

            <SectionTitle>📞 Kontakt</SectionTitle>
            <ContactList>
              <ContactItem>
                Telefon: <strong>{DATA.phonePrimary}</strong>
              </ContactItem>
              <ContactItem>
                Alternatywny telefon: <strong>{DATA.phoneAlt}</strong>
              </ContactItem>
              <ContactItem>
                Adres: <strong>{DATA.address}</strong>
              </ContactItem>
            </ContactList>
          </Card>

          <Card style={{ marginTop: "30px" }}>
            <SectionTitle>🗺️ Mapa / lokalizacja</SectionTitle>
            <MapFrame>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1227.3051379113906!2d20.454982539024535!3d52.03219714312998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47194483240dca77%3A0x96df9603d90f73ba!2s%C5%9Awierkowa%2027%2C%2096-300%20Koryt%C3%B3w%20A!5e0!3m2!1spl!2spl!4v1757664711647!5m2!1spl!2spl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa KORDES"
              ></iframe>
            </MapFrame>
          </Card>
        </div>

        <aside style={{marginTop:"-150px"}}>
          <Carda>
            <SectionTitle color="white">👤 {DATA.owner}</SectionTitle>
            <ImgPlaceholder>
              <IMG src={p} alt="Arkadiusz Rdes" />
            </ImgPlaceholder>
            <OwnerRow>
              <div style={{ flex: "1" }}>
                <Small color="white">
                  <strong>{DATA.owner}</strong>. Od wielu lat prowadzi
                  działalność w zakresie lakiernictwa proszkowego i renowacji
                  felg. Fanatyk motoryzacji i wysokiej jakości 💪 Znany jest z
                  bezpośredniego kontaktu z klientami i indywidualnego podejścia
                  do zleceń oraz bezwzględnej oceny jakości.
                </Small>
              </div>
            </OwnerRow>

            <SectionTitle mt="14px" color="white">
              🏭 Nasza pracownia
            </SectionTitle>
            <ImgPlaceholder>
              <IMG src={pracownia} alt="Pracownia KORDES" />
            </ImgPlaceholder>
          </Carda>

          <Carda>
            <SectionTitle mt="14px" color="white">
              ⚡ Szybkie informacje
            </SectionTitle>
            <Small color="white">
              <strong>NIP:</strong> 8381542959
            </Small>
            <Small color="white">
              Telefon: <strong>{DATA.phonePrimary}</strong>
            </Small>
            <Small color="white">
              Alternatywny telefon: <strong>{DATA.phoneAlt}</strong>
            </Small>
            <Small color="white">
              <strong>Adres:</strong> {DATA.address}
            </Small>
          </Carda>
        </aside>
      </Grid>
    </Container>
  );
}
