import tt from "../../images/icons/4362958_tiktok_logo_social media_icon.svg"
import fb from "../../images/icons/834722_facebook_icon.svg"
import msg from "../../images/icons/7086697_messenger_facebook messenger_messenger logo_icon.svg"
import ig from "../../images/icons/6636566_instagram_social media_social network_icon.svg"
import { SocialLogo, SocialRow, SocialRowT, Socials } from "./styled";

export const SocialSection = () => {
  return (
    <Socials>
      <SocialRowT>Zobacz materiały z naszych realizacji:</SocialRowT>
      <SocialRow href="https://www.tiktok.com/@kordes.lakiernia" target="blank">
        TikTok <SocialLogo src={tt} alt="TikTok" /> 
      </SocialRow>
      <SocialRow href="https://www.facebook.com/kordeslakierniaproszkowa/?locale=pl_PL" target="blank">
        Facebook <SocialLogo src={fb} alt="Facebook" />
      </SocialRow>
      <SocialRow href="https://www.instagram.com/arkadiuszrdes/" target="blank">
        Instagram <SocialLogo src={ig} alt="Instagram" />
      </SocialRow>
    </Socials>
  );
};
