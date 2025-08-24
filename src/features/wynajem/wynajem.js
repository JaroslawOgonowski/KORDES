import { TableRow } from "../malowanie-proszkowe/malowanie";
import {
  BIO,
  StyledSection,
  Subtitle,
  Table,
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

export const Wynajem = () => {
  return (
    <>
      <StyledSection>
        <Title>
          Wynajem agregatu prądotwórczego Siltec 110 kVa – mobilne źródło
          energii w każdych warunkach
        </Title>
        <BIO>
          Oferujemy wynajem profesjonalnego agregatu prądotwórczego Siltec 110
          kVa zabudowanego na przyczepie. To niezawodne i mobilne źródło
          energii, które sprawdzi się zarówno w warunkach przemysłowych, jak i w
          terenie. Dzięki solidnej konstrukcji, dużej mocy i wysokiej jakości
          wykonania zapewnia bezpieczne i stabilne zasilanie w każdej sytuacji –
          od budów, przez imprezy masowe, po awaryjne zasilanie zakładów i
          instytucji.
        </BIO>
        <FotoAg>
          <ImageInVBox src={ag1} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag4} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag8} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag9} alt="Malowanie proszkowe" />
          <ImageInVBox src={ag12} alt="Malowanie proszkowe" />
        </FotoAg>
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
        
        <Subtitle>Zastosowania </Subtitle>✅ Zasilanie awaryjne dla zakładów
        przemysłowych i instytucji ✅ Place budowy, inwestycje drogowe i
        infrastrukturalne ✅ Imprezy plenerowe, koncerty, eventy masowe ✅
        Awaryjne źródło energii dla szpitali i centrów danych ✅ Zasilanie
        maszyn i urządzeń wymagających dużej mocy
        <Subtitle>Korzyści z wynajmu w KORDES </Subtitle>
        Mobilność – agregat na przyczepie, szybki transport w dowolne miejsce
        Niezawodność – sprzęt serwisowany i gotowy do pracy 24/7 Pełne
        bezpieczeństwo – urządzenie zgodne z normami i wyposażone w
        zabezpieczenia Elastyczne warunki wynajmu – krótkoterminowo i
        długoterminowo Możliwość obsługi technicznej – opcjonalnie operator lub
        serwis na miejscu
        <Subtitle>Warunki wynajmu </Subtitle>
        📅 Okres wynajmu: od 1 dnia do kilku miesięcy ⛽ Paliwo: zapewniamy
        zatankowany agregat (możliwość dostawy paliwa w trakcie wynajmu) 🚚
        Transport: możliwość dowozu i odbioru na wskazane miejsce 🛠️ Obsługa
        techniczna: w opcji z operatorem lub samodzielnie 💰 Cena: ustalana
        indywidualnie w zależności od czasu i zakresu wynajmu
      </StyledSection>
    </>
  );
};
