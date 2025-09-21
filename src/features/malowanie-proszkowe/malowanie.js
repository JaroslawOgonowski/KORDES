import Gallery from "react-photo-gallery";
import g from "../../images/gun10.webp";
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
import g25 from "../../images/Malowanie/25.JPG";
import g26 from "../../images/Malowanie/26.JPG";

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
import o1 from "../../images/icons/oferta/o1.jpg";
import o2 from "../../images/icons/oferta/o2.jpg";
import o3 from "../../images/icons/oferta/o3.jpg";
import o4 from "../../images/icons/oferta/o4.jpg";
import o5 from "../../images/icons/oferta/o5.jpg";
import o6 from "../../images/icons/oferta/o6.jpg";
import o7 from "../../images/icons/oferta/o7.jpg";
import o8 from "../../images/icons/oferta/o8.jpg";
import o9 from "../../images/icons/oferta/o9.jpg";
import o10 from "../../images/icons/oferta/o10.jpg";
import o11 from "../../images/icons/oferta/o11.jpg";
import o12 from "../../images/icons/oferta/o12.jpg";
import o14 from "../../images/icons/oferta/o14.jpg";
import o15 from "../../images/icons/oferta/o15.jpg";
import o16 from "../../images/icons/oferta/o16.jpg";
import o17 from "../../images/icons/oferta/o17.jpg";

import {
  BIO,
  FBox,
  GalleryBox,
  Gun,
  LI2,
  LI2Title,
  List,
  List2,
  ListT,
  STableRow,
  STRDescript,
  STRTitle,
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
        <Icon src={icon} alt={title} />
      </td>
      <td>
        <STRTitle>{title}</STRTitle>
      </td>
      <STRDescript>{description}</STRDescript>
    </STableRow>
  );
};

export const ListItem2 = ({ content, icon }) => {
  return (
    <LI2>
      <Icon src={icon} alt={content} /> <div>{content}</div>
    </LI2>
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
    { src: g24, width: 4, height: 4 },
    { src: g25, width: 3, height: 4 },
    { src: g26, width: 3, height: 4 },
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
        <table style={{width: "100%", marginLeft: "-10%", boxSizing: "border-box"}}>
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
</table>
        <List>
          <ListT>Etapy naszego procesu malowania proszkowego:</ListT>
          <FBox>
            <Gun src={g} alt="pistolet lakierniczy" />
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
          <div>
            {" "}
            Oferujemy{" "}
            <strong>
              kompleksową obsługę – od pojedynczych detali po całe serie
              produkcyjne
            </strong>
            . Obsługujemy klientów z różnych branż, od przemysłu i budownictwa
            po usługi i prywatne zlecenia. Malujemy{" "}
            <b>nie tylko części samochodowe</b>! Zajmujemy się kompleksowym
            zabezpieczaniem i malowaniem niemal każdego metalowego elementu.
          </div>
          <br />
          <br />
          <LI2Title>W naszej ofercie znajdziesz:</LI2Title>
          <List2>
            <ListItem2 icon={o1} content="bramy i ogrodzenia" />
            <ListItem2 icon={o2} content="balustrady i poręcze" />
            <ListItem2 icon={o3} content="konstrukcje stalowe" />
            <ListItem2 icon={o4} content="profile aluminiowe i stalowe" />
            <ListItem2 icon={o5} content="narzędzia" />
            <ListItem2 icon={o6} content="półki" />
            <ListItem2 icon={o7} content="regały magazynowe" />
            <ListItem2 icon={o8} content="szafy i skrzynki metalowe" />
            <ListItem2 icon={o9} content="felgi" />
            <ListItem2 icon={o10} content="ramy i części rowerowe" />
            <ListItem2
              icon={o11}
              content="elementy maszyn i urządzeń przemysłowych"
            />
            <ListItem2
              icon={o12}
              content="obudowy urządzeń mechanicznych i elektrycznych"
            />
            <ListItem2
              icon={o14}
              content="stelaże reklamowe i konstrukcje wystawiennicze"
            />
            <ListItem2 icon={o15} content="części motocyklowe" />
            <ListItem2 icon={o16} content="elementy wyposażenia ogrodu" />
            <ListItem2 icon={o17} content="meble metalowe" />
          </List2>
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
