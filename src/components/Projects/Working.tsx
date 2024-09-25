import ProjectCard from "../ProjectCard";
import CryptoWorld from "../../assets/Cryptoworld.png"
import Prohired from '../../assets/prohired.jpg'
const cryptoWorld = [
    "https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "https://img.icons8.com/?size=48&id=20906&format=png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://magicui.design/icon.png",
    "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"
  ];
const Working = () => {
  return (
      <div className="flex flex-wrap gap-60 lg:gap-0 justify-center mt-20">
         <ProjectCard
          to=""
          github="https://github.com/Ankitb3/crypto-app"
          techStack={cryptoWorld}
          projectLink="Not Deploy yet"
          img={CryptoWorld}
          projectName="Crypto World"
          desc="The Crypto World App is designed to provide users with a seamless experience in exploring and managing cryptocurrencies. It allows users to add coins to their favorites for quick access and monitoring."
        />
         <ProjectCard
          to="https://prohired.netlify.app/"
          github="https://github.com/Ankitb3/ProHire"
          techStack={cryptoWorld}
          projectLink="https://prohired.netlify.app/"
          img={Prohired}
          projectName="Pro Hired"
          desc="ProHired is your go-to platform for seamless job postings and applications. Employers can easily list jobs, review applications, and gather feedback, while job seekers can browse opportunities and share their experiences."
        />
      </div>
  );
};

export default Working;
