
import { AnimatedItem, AnimatedList, BIO, FBox, Felga, GalleryBox, List, StyledSection, Title } from "./styled";

import f from "../../images/felga.png";
import g0 from "../../images/Felgi/0.JPG";
import g1 from "../../images/Felgi/1.JPG";
import g2 from "../../images/Felgi/2.JPG";
import g3 from "../../images/Felgi/3.JPG";
import g4 from "../../images/Felgi/4.JPG";
import g5 from "../../images/Felgi/5.JPG";
import g6 from "../../images/Felgi/6.JPG";
import g7 from "../../images/Felgi/7.JPG";
import g8 from "../../images/Felgi/8.JPG";
import g9 from "../../images/Felgi/9.JPG";
import g10 from "../../images/Felgi/10.JPG";
import g11 from "../../images/Felgi/11.JPG";
import g12 from "../../images/Felgi/12.JPG";
import g13 from "../../images/Felgi/13.JPG";
import g14 from "../../images/Felgi/14.JPG";
import g15 from "../../images/Felgi/15.JPG";
import g16 from "../../images/Felgi/16.JPG";
import g17 from "../../images/Felgi/17.JPG";
import g18 from "../../images/Felgi/18.JPG";
import g19 from "../../images/Felgi/19.JPG";
import g20 from "../../images/Felgi/20.JPG";
import g21 from "../../images/Felgi/21.JPG";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState } from "react";


export const Renowacja = () => {
  const items = [
    "piaskowanie strumieniowo-ścierne,",
    "malowanie proszkowe,",
    "prostowanie na maszynach CNC,",
    "spawanie pęknięć,",
    "odtwarzanie oryginalnego kształtu felgi.",
  ];

  const photos = [
    { src: g0, width: 0.8, height: 1 },
    { src: g1, width: 4, height: 3 },
    { src: g2, width: 4, height: 3 },
    { src: g3, width: 1, height: 1 },
    { src: g4, width: 1, height: 1 },
    { src: g5, width: 1, height: 1 },
    { src: g6, width: 1, height: 1 },
    { src: g7, width: 1, height: 1 },
    { src: g8, width: 1, height: 1 },
    { src: g9, width: 1, height: 1 },
    { src: g10, width: 1, height: 1 },
    { src: g11, width: 4, height: 3 },
    { src: g12, width: 4, height: 3 },
    { src: g13, width: 4, height: 3 },
    { src: g14, width: 1, height: 1 },
    { src: g15, width: 1, height: 1 },
    { src: g16, width: 4, height: 3 },
    { src: g17, width: 4, height: 3 },
    { src: g18, width: 4, height: 3 },
    { src: g19, width: 4, height: 3 },
    { src: g20, width: 4, height: 3 },
    { src: g21, width: 4, height: 3 },
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
        Renowacja Felg w Żyrardowie i okolicach – Piaskowanie, Malowanie
        Proszkowe, Naprawa&nbsp;i&nbsp;Odtwarzanie Zniszczonych Felg
      </Title>

      <BIO>
        <div>
          <b>O felgach wiemy wszystko... </b>
        </div>
        Specjalizujemy się w kompleksowej renowacji felg – realizujemy zlecenia
        z <strong>całej Polski</strong>, ale działamy przede wszystkim lokalnie
        w <strong>Żyrardowie i okolicach</strong>. Dzięki wieloletniemu
        doświadczeniu przywracamy nawet bardzo zniszczone felgi do fabrycznego
        wyglądu i pełnej sprawności. Posiadamy jedną z nielicznych w polsce
        najnowszych maszyn CNC WRM przeznaczoną do renowacji felg.
      </BIO>

      <List>
        <b>Wykonujemy:</b>
        <FBox>
          <Felga src={f} alt="" />
        </FBox>
        <AnimatedList>
          {items.map((text, index) => (
            <AnimatedItem key={index} delay={index * 2}>
              {text}
            </AnimatedItem>
          ))}
        </AnimatedList>
        Każdy etap naprawy kontrolujemy pod kątem{" "}
        <strong>bezpieczeństwa i jakości</strong>. Zapewniamy szybkie terminy,
        dbałość o najmniejszy detal, atrakcyjne ceny i fachowe doradztwo.
      </List>
      <GalleryBox>
        <Gallery photos={photos} onClick={openLightbox} targetRowHeight={160}/>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={current}
                views={photos}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </GalleryBox>
    </StyledSection>
  );
};
