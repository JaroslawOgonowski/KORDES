import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState } from "react";
import { BackToMain } from "../../common/BackToMain/BackToMain";
import { Icon } from "../../common/ListItem";
import {
  ArticleContent,
  ArticleTitle,
  BIO,
  CenteredText,
  CenteredTextLink,
  FBox,
  Felga,
  GalleryBox,
  List,
  ServicesGrid,
  ServicesIcon,
  ServicesText,
  StyledArticle,
  StyledSection,
  StyledTile,
  Subtitle,
  Title,
  TitleBox,
} from "./styled";

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
import fp1 from "../../images/etapy/fp1.png";
import fp2 from "../../images/etapy/fp2.png";
import fp3 from "../../images/etapy/fp3.png";
import fp4 from "../../images/etapy/fp4.png";
import fp5 from "../../images/etapy/fp5.png";
import fp6 from "../../images/etapy/fp6.png";
import t1 from "../../videos/roztaczenieOtworu.mp4";
import t2 from "../../videos/toczenie2.mp4";
import t3 from "../../videos/toczenie3.mp4";
import z1 from "../../images/z1.JPG";
import z2 from "../../images/z2.JPG";
import z3 from "../../images/z3.JPG";
import z4 from "../../images/z4.JPG";
import z5 from "../../images/z5.JPG";
import z6 from "../../images/z6.JPG";
import s1 from "../../images/s1.JPG";
import s2 from "../../images/s2.JPG";
import s3 from "../../images/s3.JPG";
import s4 from "../../images/s4.JPG";
import s5 from "../../images/s5.jpg";

import p1 from "../../videos/vprostowanie.mp4";
import p2 from "../../videos/vprostowanie2.mp4";
import {
  ImageBox,
  ImageInVBox,
  Videosbox,
  VideoWithOverlay,
} from "../../common/VideoComponent";

// ✅ Smooth scroll globalnie
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const ServicesTile = ({ icon, content, href }) => {
  return (
    <StyledTile as={Link} to={`/renowacja-felg${href}`}>
      <ServicesIcon src={icon} alt={content} />
      <ServicesText>{content}</ServicesText>
    </StyledTile>
  );
};

const PhaseArticle = ({ articleContent, id }) => {
  return (
    <StyledArticle id={id}>
      <TitleBox>
        <Icon src={articleContent.icon} />
        <ArticleTitle>{articleContent.title}</ArticleTitle>
      </TitleBox>
      <ArticleContent>
        {Array.isArray(articleContent.content)
          ? articleContent.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          : <p>{articleContent.content}</p>}
      </ArticleContent>
    </StyledArticle>
  );
};


export const Renowacja = ({backToMain}) => {
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

  const articles = [
  {
    icon: fp1,
    title: "Przygotowanie powierzchni",
    content: [
      "Przygotowanie powierzchni felg to jeden z najważniejszych i zarazem pierwszych etapów renowacji. W naszej firmie traktujemy go niezwykle poważnie, ponieważ od jakości tego procesu zależy trwałość oraz efekt końcowy całej usługi.",
      "Stosujemy dwie sprawdzone metody: w przypadku felg aluminiowych starą powłokę lakierniczą usuwamy metodą chemiczną, co pozwala dokładnie oczyścić powierzchnię bez ryzyka uszkodzenia struktury materiału, natomiast felgi stalowe oczyszczamy metodą piaskowania strumieniowo-ściernego, dzięki której skutecznie eliminujemy rdzę, starą powłokę i wszelkie zanieczyszczenia.",
      "Takie podejście zapewnia idealnie przygotowaną „czystą bazę” do dalszych prac renowacyjnych. Dbamy o równomierne i precyzyjne oczyszczenie całej felgi, również w trudnodostępnych miejscach.",
      "Dzięki temu masz pewność, że już od pierwszego etapu Twoje felgi trafiają w ręce specjalistów, którzy przykładają ogromną wagę do detali i jakości wykonania. To właśnie staranność na tym etapie sprawia, że końcowy efekt renowacji nie tylko wygląda perfekcyjnie, ale również pozostaje trwały na lata."
    ],
  },
  {
    icon: fp2,
    title: "Malowanie proszkowe",
    content: [
      "Malowanie proszkowe to nowoczesna metoda, która zapewnia trwałe i estetyczne wykończenie felg.",
      "Farba proszkowa jest nakładana elektrostatycznie i utwardzana w piecu, co gwarantuje wysoką odporność na uszkodzenia mechaniczne i chemiczne."
    ],
  },
  {
    icon: fp3,
    title: "Prostowanie na maszynach Nitromac",
    content: [
      "Prostowanie felg to kluczowy etap renowacji, który pozwala na precyzyjne przywrócenie felgom ich fabrycznego kształtu. Nawet niewielkie odkształcenia mogą powodować drgania, nierówną pracę kół, a w konsekwencji obniżać komfort i bezpieczeństwo jazdy.",
      "Dlatego w naszej firmie przykładamy do tego procesu szczególną wagę. Pracujemy na profesjonalnej prostowarce do felg Nitromac wyposażonej w trzy siłowniki, co umożliwia dokładny pomiar i kontrolowane prostowanie z precyzją sięgającą ułamków milimetra.",
      "Dzięki temu jesteśmy w stanie skutecznie wyeliminować wszelkie odchylenia od osi obrotu, a felga odzyskuje swoją pierwotną geometrię i pełną funkcjonalność.",
      "Nasz zespół to doświadczeni specjaliści, regularnie szkolący się z obsługi najnowszych technologii, co gwarantuje, że każda usługa jest wykonywana zgodnie z najwyższymi standardami jakości i bezpieczeństwa.",
      "Dzięki połączeniu wiedzy, praktyki i nowoczesnych rozwiązań klient ma pewność, że jego felgi nie tylko wyglądają perfekcyjnie, ale przede wszystkim są w pełni bezpieczne w dalszej eksploatacji."
    ],
  },
  {
    icon: fp4,
    title: "Spawanie pęknięć",
    content: [
      "Nawet najbardziej zniszczone felgi mają u nas drugie życie.",
      "Specjalizujemy się w profesjonalnym spawaniu i renowacji, dzięki którym przywracamy pełną wytrzymałość oraz bezpieczeństwo nawet w przypadku głębokich pęknięć czy poważnych uszkodzeń.",
      "To, co inni uznaliby za stracone, my traktujemy jako wyzwanie – i udowadniamy, że felgi renomowanych marek można uratować i ponownie cieszyć się ich niezawodnością."
    ],
  },
  {
    icon: fp5,
    title: "Odtwarzanie oryginalnego kształtu felgi",
    content: [
      "Zajmujemy się również odtwarzaniem oryginalnego kształtu felg, co ma kluczowe znaczenie, szczególnie w przypadku felg aluminiowych, które są bardziej podatne na odkształcenia.",
      "Dzięki specjalistycznemu sprzętowi jesteśmy w stanie przywrócić ich pierwotną geometrię – zarówno po uderzeniach w krawężnik, jak i wskutek jazdy po nierównych nawierzchniach.",
      "Proces ten wymaga dużej precyzji i doświadczenia, ponieważ niewłaściwie wyprostowana felga może prowadzić do wibracji, szybszego zużycia opon, a nawet zagrożenia bezpieczeństwa.",
      "U nas każda felga przechodzi dokładną kontrolę – stawiamy na jakość i bezpieczeństwo, a nie szybkie, powierzchowne naprawy."
    ],
  },
  {
    icon: fp6,
    title: "Toczenie otworu centrującego felgi",
    content: [
      "Toczenie otworu centrującego felgi to kluczowy proces, który zapewnia idealne dopasowanie felgi do piasty koła – a tym samym stabilność i bezpieczeństwo jazdy.",
      "To jedna z naszych specjalizacji. Jako jedyni w Żyrardowie i okolicach wykonujemy tę usługę profesjonalnie, z wykorzystaniem specjalistycznego sprzętu i precyzyjnych technik.",
      "Nie działamy „przy okazji” – stawiamy na jakość, dokładność i doświadczenie.",
      "Jeśli zależy Ci na perfekcyjnym spasowaniu felgi z piastą – jesteś we właściwym miejscu."
    ],
  },
];

  return (
    <>
      {/* ✅ Smooth scroll aktywowany globalnie */}
      <GlobalStyle />
      <ScrollToHashElement />
      <StyledSection>
        <Title>
          Renowacja Felg w Żyrardowie i okolicach – Piaskowanie, Malowanie
          Proszkowe, Naprawa&nbsp;i&nbsp;Odtwarzanie Zniszczonych Felg
        </Title>

        <BIO>
          <div>
            <b>O felgach wiemy wszystko... </b>
          </div>
          Specjalizujemy się w kompleksowej renowacji felg – realizujemy
          zlecenia z <strong>całej Polski</strong>, ale działamy przede
          wszystkim lokalnie w <strong>Żyrardowie i okolicach</strong>. Dzięki
          wieloletniemu doświadczeniu przywracamy nawet bardzo zniszczone felgi
          do fabrycznego wyglądu i pełnej sprawności. Posiadamy jedną z
          nielicznych w polsce najnowszych maszyn CNC WRM przeznaczoną do
          renowacji felg a także prostowarce do felg Nitromac wyposażonej w trzy siłowniki. Wykonujemy cały proces renowacji oraz pojedyncze
          etapy, takie jak piaskowanie, malowanie proszkowe, czy prostowanie. Specjalizujemy się w felgach aluminiowych, stalowych i TIR.
          <p><b>Skontaktuj się z nami już dziś, a doradzimy i wycenimy wybraną przec Ciebie usługę!</b></p>
        </BIO>

        <List>
          <Subtitle>Wykonujemy:</Subtitle>
          <FBox>
            <Felga src={f} alt="" />
          </FBox>
          <ServicesGrid>
            <ServicesTile
              icon={fp1}
              content="Przygotowanie powierzchni"
              href="#pp"
            />
            <ServicesTile
              icon={fp2}
              content="malowanie proszkowe"
              href="#malowanie"
            />
            <ServicesTile
              icon={fp3}
              content="prostowanie na maszynach Nitromac"
              href="#prostowanie"
            />
            <ServicesTile
              icon={fp4}
              content="spawanie pęknięć"
              href="#spawanie"
            />
            <ServicesTile
              icon={fp5}
              content="odtwarzanie oryginalnego kształtu felgi"
              href="#odtwarzanie"
            />
            <ServicesTile
              icon={fp6}
              content="toczenie otwóru centrującego felgi"
              href="#toczenie"
            />
          </ServicesGrid>
          <CenteredText>
            Każdy etap naprawy kontrolujemy pod kątem{" "}
            <strong>bezpieczeństwa i jakości</strong>. Zapewniamy szybkie
            terminy, dbałość o najmniejszy detal, atrakcyjne ceny i fachowe
            doradztwo.
          </CenteredText>
        </List>

        {/* ✅ Nadanie ID artykułom */}
        <PhaseArticle id="pp" articleContent={articles[0]} />
        <PhaseArticle id="malowanie" articleContent={articles[1]} />
        <ImageBox>
          <ImageInVBox src={z1} alt="Malowanie proszkowe" />
          <ImageInVBox src={z2} alt="Malowanie proszkowe" />
          <ImageInVBox src={z3} alt="Malowanie proszkowe" />
          <ImageInVBox src={z4} alt="Malowanie proszkowe" />
          <ImageInVBox src={z5} alt="Malowanie proszkowe" />
          <ImageInVBox src={z6} alt="Malowanie proszkowe" />
        </ImageBox>
        <CenteredTextLink as={Link} to="/malowanie-proszkowe">
          Więcej o malowaniu proszkowym...
        </CenteredTextLink>
        <PhaseArticle id="prostowanie" articleContent={articles[2]} />
        <Videosbox>
          <VideoWithOverlay src={p1} />
          <VideoWithOverlay src={p2} />
        </Videosbox>
        <PhaseArticle id="spawanie" articleContent={articles[3]} />
        <ImageBox>
          <ImageInVBox src={s1} alt="Spawanie felg" />
          <ImageInVBox src={s2} alt="Spawanie felg" />
          <ImageInVBox src={s3} alt="Spawanie felg" />
          <ImageInVBox src={s4} alt="Spawanie felg" />
          <ImageInVBox src={s5} alt="Spawanie felg" />
        </ImageBox>
        <PhaseArticle id="odtwarzanie" articleContent={articles[4]} />

        <Videosbox>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkordeslakierniaproszkowa%2Fposts%2Fpfbid0EJ5dchAi8b83gG5NpzzQnvakTRyQSbetuCTGg6NDsHSn2YqrtNmGr6taHqfFCCZhl&show_text=false&width=500"
            width="auto"
            height="500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkordeslakierniaproszkowa%2Fposts%2Fpfbid02HzEupuJbESze1bvr8u1oeZ413nnaGk3D5y2ngD27epvaiCL7T3dAau36B92t7BM3l&show_text=false&width=500"
            width="auto"
            height="500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkordeslakierniaproszkowa%2Fposts%2Fpfbid02xnBpNGMTWEjgWfpJocXCiGFTmHwd5mn73UsS562yG6iaBYRgAcEpzvfX3Cj2WqmAl&show_text=false&width=500"
            width="auto"
            height="500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Videosbox>

        <PhaseArticle id="toczenie" articleContent={articles[5]} />

        <Videosbox>
          <VideoWithOverlay src={t1} />
          <VideoWithOverlay src={t2} />
          <VideoWithOverlay src={t3} />
        </Videosbox>
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
      {backToMain === true? <BackToMain /> : null}
      
    </>
  );
};
