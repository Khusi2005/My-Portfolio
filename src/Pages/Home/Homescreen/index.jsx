import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Resources from "../Resources";
import MySkills from "../MySkills";
import Academics from "../Academics";
import CP from "../CP";
export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Academics />
      <MyPortfolio />
      <CP />
      <Resources/>
      <ContactMe />
    </>
  );
}
