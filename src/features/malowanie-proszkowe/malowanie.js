import Gallery from "react-photo-gallery";
import g from "../../images/gun10.png";
import g0 from "../../images/Malowanie/0.JPG";
import g1 from "../../images/Malowanie/1.JPG";
import g2 from "../../images/Malowanie/2.JPG";
import g3 from "../../images/Malowanie/3.JPG";
import g4 from "../../images/Malowanie/4.JPG";
import g5 from "../../images/Malowanie/5.JPG";
import g6 from "../../images/Malowanie/6.JPG";
import g7 from "../../images/Malowanie/7.JPG";
import g8 from "../../images/Malowanie/8.JPG";
import g9 from "../../images/Malowanie/9.JPG";
import g10 from "../../images/Malowanie/10.JPG";
import g11 from "../../images/Malowanie/11.JPG";
import g12 from "../../images/Malowanie/12.JPG";
import g13 from "../../images/Malowanie/13.JPG";
import g14 from "../../images/Malowanie/14.JPG";
import g15 from "../../images/Malowanie/15.JPG";
import g16 from "../../images/Malowanie/16.JPG";
import g17 from "../../images/Malowanie/17.JPG";
import g18 from "../../images/Malowanie/18.JPG";
import g19 from "../../images/Malowanie/19.JPG";
import g20 from "../../images/Malowanie/20.JPG";
import g21 from "../../images/Malowanie/21.JPG";
import g22 from "../../images/Malowanie/22.JPG";
import g23 from "../../images/Malowanie/23.JPG";
import g24 from "../../images/Malowanie/24.JPG";

import {
  AnimatedItem2,
  AnimatedList,
  BIO,
  FBox,
  Felga,
  GalleryBox,
  Gun,
  List,
  StyledSection,
  Title,
} from "../renowacja-felg/styled";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState } from "react";

export const Malowanie = () => {
  const items = [
    "przygotowanie powierzchni – dokładne czyszczenie i odtłuszczanie,",
    "piaskowanie lub chemiczne fosforanowanie dla zapewnienia doskonałej przyczepności,",
    "usunięcie wilgoci z detali, aby uniknąć wad powłoki,",
    "precyzyjne nanoszenie farby metodą elektrostatyczną w clean roomie,",
    "Polimeryzacja w piecu – wygrzewanie w temperaturze 160–200 °C,",
    "Kontrola jakości – szczegółowe sprawdzanie grubości powłoki, przyczepności i wykończenia przed wydaniem gotowych elementów.",
  ];

  const photos = [
    { src: g0, width: 1, height: 1 },
    { src: g1, width: 4, height: 3 },
    { src: g2, width: 4, height: 3 },
    { src: g3, width: 4, height: 3 },
    { src: g4, width: 4, height: 3 },
    { src: g5, width: 4, height: 3 },
    { src: g6, width: 4, height: 3 },
    { src: g7, width: 4, height: 3 },
    { src: g8, width: 4, height: 3 },
    { src: g9, width: 4, height: 3 },
    { src: g10, width: 4, height: 3 },
    { src: g11, width: 4, height: 3 },
    { src: g12, width: 4, height: 3 },
    { src: g13, width: 4, height: 3 },
    { src: g14, width: 4, height: 3 },
    { src: g15, width: 4, height: 3 },
    { src: g16, width: 4, height: 3 },
    { src: g17, width: 4, height: 3 },
    { src: g18, width: 4, height: 3 },
    { src: g19, width: 4, height: 3 },
    { src: g20, width: 4, height: 3 },
    { src: g21, width: 4, height: 3 },
    { src: g22, width: 4, height: 3 },
    { src: g23, width: 4, height: 3 },
    { src: g24, width: 4, height: 3 },
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
      <Title>
        Malowanie proszkowe – trwała ochrona i perfekcyjny wygląd Twoich
        elementów
      </Title>
      <BIO>
        <strong>Malowanie proszkowe</strong> to jedna z najtrwalszych i
        najbardziej estetycznych metod zabezpieczania powierzchni metalowych.
        <br />
        Polega na elektrostatycznym nanoszeniu farby w postaci proszku, który
        następnie jest wygrzewany w piecu w wysokiej temperaturze.
        <br /> Efekt?
        <br /> Wyjątkowo <strong>odporna, gładka i równomierna powłoka</strong>,
        która chroni przed korozją, promieniowaniem UV, wilgocią oraz
        uszkodzeniami mechanicznymi.
        <br /> W naszym zakładzie łączymy nowoczesną technologię z
        doświadczeniem ekspertów. Dysponujemy dużym piecem o imponujących
        wymiarach, <br />
        dzięki czemu malujemy zarówno małe detale, jak i większe konstrukcje.{" "}
        <br />
        Stosujemy <strong>clean room</strong> do nakładania proszku –
        gwarantując idealnie czystą powierzchnię bez zanieczyszczeń i skaz.{" "}
        <br />
        Pracujemy na najwyższej jakości sprzęcie i sprawdzonych materiałach, co
        pozwala uzyskać efekt, który nie tylko wygląda świetnie, ale przede
        wszystkim
        <br />
        <b> wytrzymuje lata intensywnego użytkowania</b>.
      </BIO>
      <List>
        <b>Etapy naszego procesu malowania proszkowego:</b>
        <FBox>
          <Gun src={g} alt="" />
        </FBox>
        <AnimatedList>
          {items.map((text, index) => (
            <AnimatedItem2 key={index} delay={index * 2}>
              {text}
            </AnimatedItem2>
          ))}
        </AnimatedList>
        Oferujemy{" "}
        <strong>
          kompleksową obsługę – od pojedynczych detali po całe serie produkcyjne
        </strong>
        . Obsługujemy klientów z różnych branż, od przemysłu i budownictwa po
        usługi i prywatne zlecenia. Malujemy <b>nie tylko części samochodowe</b>
        ! Zajmujemy się kompleksowym zabezpieczaniem i malowaniem niemal każdego
        metalowego elementu.
        <br />W naszej ofercie znajdziesz:
        <ul>
          <li>bramy i ogrodzenia,</li>
          <li>balustrady i poręcze,</li>
          <li>konstrukcje stalowe,</li>
          <li>profile aluminiowe i stalowe,</li>
          <li>narzędzia,</li>
          <li>półki i meble metalowe,</li>
          <li>regały magazynowe,</li>
          <li>szafy i skrzynki metalowe,</li>
          <li>felgi i ramy rowerowe,</li>
          <li>elementy maszyn i urządzeń przemysłowych,</li>
          <li>obudowy urządzeń mechanicznych i elektrycznych,</li>
          <li>kasetony i panele elewacyjne,</li>
          <li>stelaże reklamowe i konstrukcje wystawiennicze,</li>
          <li>części motocyklowe i rowerowe,</li>
          <li>
            elementy wyposażenia ogrodu (ławki, pergole, donice metalowe).
          </li>
        </ul>
        Dzięki nowoczesnym technologiom lakierniczym zapewniamy trwałą ochronę
        przed korozją, estetyczne wykończenie i indywidualne dopasowanie
        kolorystyki. Niezależnie od kształtu czy rozmiaru elementu – znajdziemy
        rozwiązanie, które spełni Twoje oczekiwania. Każdy element traktujemy
        indywidualnie, bo naszym celem jest niezmiennie najwyższa jakość
        wykonania i pełne zadowolenie klienta. Skontaktuj się z nami –
        doradzimy, wycenimy i dobierzemy najlepsze rozwiązanie do Twoich
        potrzeb.
      </List>

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
    </StyledSection>
  );
};
