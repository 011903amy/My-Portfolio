import { imgPath } from "@/components/helpers/functions-general";
import Header from "../partial/Header";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";
import CTA from "./CTA";
import Language from "./Language";
import Footer from "../partial/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Language />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
