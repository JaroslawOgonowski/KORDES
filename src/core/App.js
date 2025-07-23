import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import { Main } from "../common/Main";
import { Footer } from "../common/Footer";
import { Top } from "../common/Top/Top";
import { Renowacja } from "../features/renowacja-felg/renowacja";
import { SocialSection } from "../common/Socials/SocialSection";
import { Tiles } from "../common/Top/Tiles";
import { Malowanie } from "../features/malowanie-proszkowe/malowanie";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Top />
        <Main>
          <Switch>
            <Route path="/renowacja-felg">
              <Renowacja />
            </Route>
            <Route path="/malowanie-proszkowe">
              <Malowanie />
            </Route>
            <Route path="/strona-glowna">
              <Tiles />
            </Route>
            <Route path="/">
              <Redirect to="/strona-glowna" />
            </Route>
            <BrowserRouter basename="/KORDES"></BrowserRouter>
          </Switch>
        </Main>
        <SocialSection />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
