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
import e1 from "../../images/etapy/etap1.jpg";
import e2 from "../../images/etapy/etap2.jpg";
import e3 from "../../images/etapy/etap3.jpg";
import e4 from "../../images/etapy/etap4.jpg";
import e5 from "../../images/etapy/etap5.jpg";
import e6 from "../../images/etapy/etap6.jpg";
import e7 from "../../images/etapy/etap7.jpg";
import mi1 from "../../images/etapy/mInfo1.png";
import mi2 from "../../images/etapy/mInfo2.png";
import mi3 from "../../images/etapy/mInfo3.png";
import mi4 from "../../images/etapy/mInfo4.png";
import mi5 from "../../images/etapy/mInfo5.png";
import mi6 from "../../images/etapy/mInfo6.png";

import styled, { css, keyframes } from "styled-components";
import {
  BIO,
  FBox,
  Felga,
  GalleryBox,
  Gun,
  List,
  ListT,
  STableRow,
  StyledSection,
  Table,
  Title,
} from "../renowacja-felg/styled";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState } from "react";
import { BackToMain } from "../../common/BackToMain/BackToMain";
import { Icon, ListItem } from "../../common/ListItem";

export const TableRow = ({ title, description, icon, extraPadding }) => {
  return (
    <STableRow extraPadding={extraPadding}>
      <td>
        <Icon src={icon} />
      </td>
      <td><b>{title}</b></td>
      <td>{description}</td>
    </STableRow>
  );
};

export const Malowanie = () => {
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
    <>
      <StyledSection>
        <Title>
          Malowanie proszkowe – trwała ochrona i perfekcyjny wygląd Twoich
          elementów
        </Title>
        <BIO>
          <strong>Malowanie proszkowe</strong> to jedna z najtrwalszych i
          najbardziej estetycznych metod zabezpieczania powierzchni metalowych.
        </BIO>
        <Table>
          <TableRow
            title="Odporna, gładka i równomierna powłoka"
            description="Chroni przed korozją, UV i uszkodzeniami"
            icon={mi1}
            extraPadding={0}
          />
          <TableRow
            title="Nowoczesna technologia i doświadczenie"
            description="Łączymy know-how z precyzją"
            icon={mi2}
            extraPadding={0}
          />
          <TableRow
            title="Wygrzewanie w piecu"
            description="Trwałość dzięki wysokiej temperaturze"
            icon={mi3}
            extraPadding={0}
          />
          <TableRow
            title="Clean room"
            description="Malowanie bez skaz i zanieczyszczeń"
            icon={mi4}
            extraPadding={8}
          />
          <TableRow
            title="Jakość i kontrola"
            description="Każdy detal pod lupą"
            icon={mi5}
            extraPadding={4}
          />
          <TableRow
            title="Siła i wtrzymałość"
            description="Perfekcyjny efekt na lata"
            icon={mi6}
            extraPadding={0}
          />
        </Table>

        <List>
          <ListT>Etapy naszego procesu malowania proszkowego:</ListT>
          <FBox>
            <Gun src={g} alt="" />
          </FBox>
          <List>
            <ListItem
              title="Przygotowanie powierzchni"
              content="usunięcie zabrudzeń, rdzy i odtłuszczanie,"
              icon={e1}
            ></ListItem>
            <ListItem
              title="Piaskowanie lub chemiczne fosforanowanie"
              content="dla zapewnienia doskonałej przyczepności"
              icon={e2}
            ></ListItem>
            <ListItem
              title="Usunięcie wilgoci z detali"
              content="aby uniknąć wad powłoki"
              icon={e3}
            ></ListItem>
            <ListItem
              title="Aplikacja podkładu lakierniczego"
              content="dla równego koloru bez przebarwień"
              icon={e7}
            />
            <ListItem
              title="Precyzyjne nanoszenie farby "
              content="metodą elektrostatyczną w clean roomie"
              icon={e4}
            />
            <ListItem
              title="Polimeryzacja w piecu"
              content="wygrzewanie w temperaturze 160–200 °C"
              icon={e5}
            />
            <ListItem
              title="Kontrola jakości"
              content="szczegółowe sprawdzanie grubości powłoki, przyczepności i wykończenia przed wydaniem gotowych elementów"
              icon={e6}
            />
          </List>
          Oferujemy{" "}
          <strong>
            kompleksową obsługę – od pojedynczych detali po całe serie
            produkcyjne
          </strong>
          . Obsługujemy klientów z różnych branż, od przemysłu i budownictwa po
          usługi i prywatne zlecenia. Malujemy{" "}
          <b>nie tylko części samochodowe</b>
          ! Zajmujemy się kompleksowym zabezpieczaniem i malowaniem niemal
          każdego metalowego elementu.
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
          kolorystyki. Niezależnie od kształtu czy rozmiaru elementu –
          znajdziemy rozwiązanie, które spełni Twoje oczekiwania. Każdy element
          traktujemy indywidualnie, bo naszym celem jest niezmiennie najwyższa
          jakość wykonania i pełne zadowolenie klienta. Skontaktuj się z nami –
          doradzimy, wycenimy i dobierzemy najlepsze rozwiązanie do Twoich
          potrzeb.
        </List>

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
      </StyledSection>
      <BackToMain />
    </>
  );
};
