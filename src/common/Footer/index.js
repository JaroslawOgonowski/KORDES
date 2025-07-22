import { Content, StyledLink, PhoneIcon, SocialLink, SocialLinks, StyledPageFooter, StyledParahraph, Wrapper, MailIcon, FacebookIcon } from "./styled";
import { useState } from "react"

export const Footer = () => {
 const [animation, setAnimation] = useState(false)

  return (
    <Wrapper animation={animation} onWheelCapture={()=>setAnimation(true)} >
      <StyledPageFooter>
        <StyledParahraph>Czekamy na kontakt!</StyledParahraph>
        <StyledLink href="biuro@kordes.org">
          <MailIcon />
          biuro@kordes.org
        </StyledLink>
        <br />
        <StyledLink href="tel:+48.504292097">
          <PhoneIcon /> 504 292 097
        </StyledLink>
        <Content>
          Doradzimy, odpowiemy na wszelkie pytania i dostosujemy usługę do twoich potrzeb!
        </Content>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/kordeslakierniaproszkowa/?locale=pl_PL"><FacebookIcon /></SocialLink>
        </SocialLinks>
      </StyledPageFooter>
    </Wrapper>
  );
};
