import tt from "../../images/icons/4362958_tiktok_logo_social media_icon.svg";
import fb from "../../images/icons/834722_facebook_icon.svg";
import ig from "../../images/icons/6636566_instagram_social media_social network_icon.svg";
import { SocialLogo, SocialRow, SocialRow2, SocialRowTitle, Socials, SocialsIconsContainer } from "./styled";

export const SocialSection = () => {
  return (
    <Socials>
      <SocialRowTitle>Zobacz materiały z naszych realizacji:</SocialRowTitle>
      <SocialRow href="https://www.tiktok.com/@kordes.lakiernia" target="blank">
        TikTok <SocialLogo src={tt} alt="TikTok" />
      </SocialRow>
      <SocialRow
        href="https://www.facebook.com/kordeslakierniaproszkowa/?locale=pl_PL"
        target="blank"
      >
        Facebook <SocialLogo src={fb} alt="Facebook" />
      </SocialRow>
      <SocialRow href="https://www.instagram.com/arkadiuszrdes/" target="blank">
        Instagram <SocialLogo src={ig} alt="Instagram" />
      </SocialRow>
    </Socials>
  );
};

export const SocialsIcons = () => {
  return (
    <SocialsIconsContainer>
      <SocialRow2 href="https://www.tiktok.com/@kordes.lakiernia" target="blank">
        <SocialLogo src={tt} alt="TikTok" />
      </SocialRow2>
      <SocialRow2
        href="https://www.facebook.com/kordeslakierniaproszkowa/?locale=pl_PL"
        target="blank"
      >
        <SocialLogo src={fb} alt="Facebook" />
      </SocialRow2>
      <SocialRow2 href="https://www.instagram.com/arkadiuszrdes/" target="blank">
        <SocialLogo src={ig} alt="Instagram" />
      </SocialRow2>
    </SocialsIconsContainer>
  );
};
