import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import Masthead from './Masthead';
import FinalCTA from './FinalCTA';
import USPs from './USPs';
import settings from '~/data/settings.json';

export default () => (
  <GlobalTemplate title={`Popmotion Pose - A declarative animation library for HTML, SVG and React`} theme="pose">
    <Header isHomepage={true} />
    <Masthead />
    <USPs />
    <FinalCTA />
    <Footer />
  </GlobalTemplate>
);