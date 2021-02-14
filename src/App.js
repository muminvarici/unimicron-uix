import React, { useRef, useEffect, createContext } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import Sectors from './views/Sectors';
import { dictionaryList } from './languages/languages';
import { LanguageProvider } from './languages/LanguageProvider';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export const LanguageContext = createContext({
  userLanguage: 'tr',
  dictionary: dictionaryList.tr
});


const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <LanguageProvider>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/sectors" component={Sectors} layout={LayoutDefault} />
            <AppRoute exact path="/about-us" component={AboutUs} layout={LayoutDefault} />
            <AppRoute exact path="/contact-us" component={ContactUs} layout={LayoutDefault} />
          </Switch>
        )} />
    </LanguageProvider>
  );
}

export default App;