import { lazy } from "react";
import IntroContent from "../../content/AboutUs.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import WhyUsContent from "../../content/WhyUsContent.json"
import WhyUsBlock from "../../components/WhyUsBlock";
import VisionContent from "../../content/VisionContext.json"
import HeretohelpContent from "../../content/HeretohelpContent.json"
import ServiceContent from "../../content/ServiceContent.json"
import CoreValuesContent from '../../content/CoreValuesContent.json'
import ApproachContent from '../../content/ApproachContent.json'
import EngagementContent from '../../content/EngagementContent.json'

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const CardsBlock= lazy(() => import("../../components/CardsBlock"));
const AboutUs = lazy(() => import("../../components/AboutUs"));
const Vision = lazy(() => import("../../components/Vision"));
const Mission = lazy(() => import("../../components/Mission"));
const HeretoHelp = lazy(() => import("../../components/HeretoHelp"));
const CoreValue = lazy(()=> import('../../components/CoreValue'))
const Approach = lazy(()=> import('../../components/Approach'))
const Engagement = lazy(()=> import('../../components/Engagement'))

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <AboutUs
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="triumph.svg"
        id="about"
      />
      <Vision
        title={VisionContent.title}
        content={VisionContent.text}
        button={VisionContent.button}
      />
      <Mission
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="mission.svg"
        id="mission"
      />
     <CoreValue 
      title={CoreValuesContent.title}
      content={CoreValuesContent.text}
      section={CoreValuesContent.section}
      />
      <Approach
        direction="left"
        title={ApproachContent.title}
        content={ApproachContent.text}
        icon="approach.jpg"
        id="approach"
      />
      {/* <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="triumph.svg"
        id="intro"
      /> */}
      <WhyUsBlock
      title={WhyUsContent.title}
      cards={WhyUsContent.cards}
      id="whyus"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      
      <CardsBlock 
      title={ServiceContent.title}
      content={ServiceContent.text}
      section={ServiceContent.section}
      id="product"
      />
      <HeretoHelp
        direction="left"
        title={HeretohelpContent.title}
        content={HeretohelpContent.text}
        section={HeretohelpContent.section}
        icon="graphs.svg"
        id="help"
      />
  
      {/* <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
       <Engagement 
      title={EngagementContent.title}
      content={EngagementContent.text}
      section={EngagementContent.section}
      content2={EngagementContent.text2}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
