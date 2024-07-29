import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TextRevealCmp from "../components/Quote";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <TextRevealCmp text={"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."}/>
      <Projects />
    </div>
  );
};

export default Home;
