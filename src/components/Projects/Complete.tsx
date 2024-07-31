import ProjectCard from "../ProjectCard";
import CryptoWorld from "../../assets/Cryptoworld.png"
import Portfolio from "../../assets/AnkitDev.png"
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
          to="https://portfolio-ankitdev.vercel.app/"
          github="https://github.com/Ankitb3/portfolioAnkit"
          techStack={poerfolio}
          projectLink="https://portfolio-ankitdev.vercel.app/"
          img={Portfolio}
          projectName="Developer Portfolio"
          desc="Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Reactjs."
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
          desc="The movie app is a comprehensive platform designed to help users discover, explore, and enjoy movies from various genres, languages, and countries. With a user-friendly interface and powerful features"
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
