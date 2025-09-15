import {
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import { Main } from "../common/Main";
import { Footer } from "../common/Footer";
import { Top } from "../common/Top/Top";
import { Renowacja } from "../features/renowacja-felg/renowacja";
import { SocialSection, SocialsIcons } from "../common/Socials/SocialSection";
import { Tiles } from "../common/Top/Tiles";
import { Malowanie } from "../features/malowanie-proszkowe/malowanie";
import { Wynajem } from "../features/wynajem/wynajem";
import GoToTopButton from "../common/GoUp/GoUp";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { HashRouter } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <HashRouter basename="/">
          <ScrollToTop />
          <SocialsIcons />
          <Top />

          <Main>
            <Switch>
              <Route path="/renowacja-felg">
                <Renowacja backToMain={true} />
              </Route>
              <Route path="/malowanie-proszkowe">
                <Malowanie />
              </Route>
              <Route path="/wynajem">
                <Wynajem />
              </Route>
              <Route path="/strona-glowna">
                <Tiles />
              </Route>
              <Route path="/">
                <Redirect to="/strona-glowna" />
              </Route>
            </Switch>
          </Main>
          <Route path="*" ><Redirect to="/strona-glowna" /></Route>
          <SocialSection />
          <Footer />
          <GoToTopButton showAt={250} size={56} shape="rounded" />
        </HashRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
