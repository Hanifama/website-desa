import { useRef } from 'react';
import Apparatus from "../../components/aparatus/Index";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar/Index";
import News from "../../components/news/Index";
import Stastistic from "../../components/stastistic/Index";
import VillageActivities from "../../components/villageActivities/Index";
import VillageArea from "../../components/villageArea";
import VillageMarket from "../../components/villageMarket/Index";
import WebsiteOverview from "../../components/webOverview/Index";
import BackToTop from '../../components/_shared/backToTop';


export default function LandingPage() {
  const homeRef = useRef(null);
  const apparatusRef = useRef(null);
  const newsRef = useRef(null);
  const marketRef = useRef(null);
  const activitiesRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, apparatusRef, newsRef, marketRef, activitiesRef }} />
      <div ref={homeRef}><Header /></div>
      <Stastistic />
      <WebsiteOverview />
      <div ref={apparatusRef}><Apparatus /></div>
      <div ref={newsRef}><News /></div>
      <div ref={marketRef}><VillageMarket /></div>
      <div ref={activitiesRef}><VillageActivities /></div>
      <VillageArea />
      <Footer scrollToSection={scrollToSection} refs={{ homeRef, apparatusRef, newsRef, marketRef, activitiesRef }} />
      <BackToTop /> 
    </>
  );
}