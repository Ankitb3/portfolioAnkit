import BackToTopButton from "../components/BackToTop";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TextRevealCmp from "../components/Quote";
import Skills from "../components/Skills";
import Study from "../components/Study";
import Todo from "../components/Todo";

const Home = () => {
  return (
    <div className="font-mono">
      <Navbar />
      <HeroSection />
      <Skills />
      <TextRevealCmp text={"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."}/>
      <Projects />
      <Study/>
      <Todo/>
      <GetInTouch/>
      <BackToTopButton/>
    </div>
  );
};

export default Home;
