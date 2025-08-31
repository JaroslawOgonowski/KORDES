import styled from "styled-components";


const Container = styled.section`
max-width: 100%;
margin: 40px auto;
padding: 40px;
background: linear-gradient(145deg, #1c1c1e, #2a2a2d);
border-radius: 20px;
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial;
color: #e5e7eb;
`;


const Title = styled.h1`
font-size: 28px;
margin: 0 0 28px 0;
text-align: center;
font-weight: 800;
background: linear-gradient(90deg, #dc143c, #ff4b6e);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;


const Section = styled.div`
display: flex;
gap: 18px;
align-items: flex-start;
margin: 28px 0;
padding: 20px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.04);
transition: transform 0.3s ease, background 0.3s ease;


&:hover {
transform: translateY(-4px);
background: rgba(220, 20, 60, 0.08);
}
`;


const Icon = styled.span`
min-width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 14px;
background: linear-gradient(135deg, #dc143c, #a40e2e);
color: #fff;
font-size: 24px;
box-shadow: 0 4px 12px rgba(220, 20, 60, 0.4);
`;


const Paragraph = styled.p`
margin: 0;
line-height: 1.7;
font-size: 17px;
color: #f3f4f6;


strong {
color: #ff4b6e;
font-weight: 700;
}
`;
export const BIO =  () => {
return (
<Container>
<Title>Wynajem agregatu prądotwórczego Siltec 110 kVA</Title>


<Section>
<Icon>⚡</Icon>
<Paragraph>
Oferujemy wynajem profesjonalnego agregatu prądotwórczego <strong>Siltec
110 kVA</strong> zabudowanego na przyczepie. To prawdziwa <strong>
„elektrownia na kołach”</strong> – urządzenie o <strong>ogromnej mocy</strong>,
które bez problemu zasili nawet najbardziej wymagające instalacje i
maszyny. Dzięki <strong>kompaktowej zabudowie</strong> i możliwości
transportu w dowolne miejsce, agregat jest w pełni mobilny i gotowy do
działania tam, gdzie go potrzebujesz.
</Paragraph>
</Section>


<Section>
<Icon>🛠️</Icon>
<Paragraph>
Obsługa agregatu jest <strong>intuicyjna i szybka</strong> – nie wymaga
specjalistycznej wiedzy, a w razie potrzeby oferujemy również pełne
wsparcie operatora. <strong>Solidna konstrukcja</strong>, wysoka jakość
wykonania i <strong>zaawansowane zabezpieczenia</strong> sprawiają, że
agregat pracuje niezawodnie <strong>24/7</strong>, gwarantując stabilne
i bezpieczne źródło energii.
</Paragraph>
</Section>


<Section>
<Icon>🏗️</Icon>
<Paragraph>
Niezależnie, czy chodzi o <strong>duże place budowy</strong>, <strong>
imprezy plenerowe</strong>, <strong>zakłady przemysłowe</strong> czy
<strong> awaryjne zasilanie szpitali</strong> i instytucji – Siltec 110
kVA to rozwiązanie, które zapewnia <strong>maksymalną moc</strong>,
<strong> bezpieczeństwo</strong> i <strong>komfort użytkowania</strong>.
</Paragraph>
</Section>
</Container>
);
}