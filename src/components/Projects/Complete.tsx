import ProjectCard from "../ProjectCard";
import CryptoWorld from "../../assets/Cryptoworld.png"
import Portfolio from "../../assets/AnkitDev.png"
import Prohired from '../../assets/prohired.jpg'
import Pixl from '../../assets/AiEditor.png'

const movieTechstack = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://img.icons8.com/?size=48&id=20906&format=png",
  "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
];
const roadtocode = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  "https://img.icons8.com/?size=48&id=20906&format=png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
];
const cryptoWorld = [
    "https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    "https://cdn-icons-png.flaticon.com/128/919/919832.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://magicui.design/icon.png",
    "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"
  ];
  const poerfolio = [
    "https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    "https://cdn-icons-png.flaticon.com/128/919/919832.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://magicui.design/icon.png",
    "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"
  ];

const Complete = () => {
  return (
      <div className="flex flex-wrap  lg:h-[160vh] h-fit gap-60 lg:gap-0 justify-center mt-10">
          
          <ProjectCard
          to="https://pixel-ai-editor.vercel.app/"
          github="https://github.com/Ankitb3/pixel"
          techStack={["https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "data:image/png;base64,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",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"]}
          projectLink="https://pixel-ai-editor.vercel.app/"
          img={Pixl}
          projectName="Pixel AI Editor "
          desc="A full-stack AI-powered image editor that allows users to intelligently extend images in any direction using generative fill. Built with Next.js, Convex, Clerk, and ImageKit."
        />
          <ProjectCard
          to="https://portfolio-ankitdev.vercel.app/"
          github="https://github.com/Ankitb3/portfolioAnkit"
          techStack={poerfolio}
          projectLink="https://portfolio-ankitdev.vercel.app/"
          img={Portfolio}
          projectName="Developer Portfolio"
          desc="Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Reactjs."
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
          to="https://movieimdb1.netlify.app/"
          github="https://github.com/Ankitb3/Movie-app"
          techStack={movieTechstack}
          projectLink="https://movieimdb1.netlify.app/"
          img="https://personalportfolioankit.netlify.app/assets/movie-c2e4e740.png"
          projectName="Movie App"
          desc="The movie app is a comprehensive platform designed to help users discover, explore."
        />
         <ProjectCard
          to="https://road-to-js.netlify.app/"
          github="https://github.com/Ankitb3/road-to-js-icp-3-group-d-"
          techStack={roadtocode}
          projectLink="https://road-to-js.netlify.app/"
          img="https://personalportfolioankit.netlify.app/assets/roadtocode-43677fb9.png"
          projectName="Road To Code"
          desc="Road To JS is a platform that contains the collection of JavaScript begineers friendly projects in one place"
        />
          {/* <ProjectCard
          to="https://github.com/Ankitb3/weather-app"
          github="https://github.com/Ankitb3/road-to-js-icp-3-group-d-"
          techStack={movieTechstack}
          projectLink="https://weather-app64.netlify.app/"
          img="https://personalportfolioankit.netlify.app/assets/roadtocode-43677fb9.png"
          projectName="Road To Code"
          desc="The weather app is a powerful and user-friendly application designed to provide accurate and up-to-date weather information for users. With its intuitive interface and robust features, the app aims to help users plan their day, stay informed about weather conditions."
        /> */}
      </div>
  );
};

export default Complete;
