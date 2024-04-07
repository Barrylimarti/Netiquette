import { lazy } from "react";
import IntroContent from "../../content/AboutUs.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import VisionContent from "../../content/VisionContext.json"
import HeretohelpContent from "../../content/HeretohelpContent.json"
import ServiceContent from "../../content/ServiceContent.json"

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
        id="intro"
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
      {/* <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="triumph.svg"
        id="intro"
      /> */}
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <CardsBlock 
      title={ServiceContent.title}
      content={ServiceContent.text}
      section={ServiceContent.section}
      />
      <HeretoHelp
        direction="left"
        title={HeretohelpContent.title}
        content={HeretohelpContent.text}
        section={HeretohelpContent.section}
        icon="graphs.svg"
        id="about"
      />
  
      {/* <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
