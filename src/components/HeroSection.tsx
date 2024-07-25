import BoxReveal from "../magicui/BoxRevel";
import profile from "../assets/ankitpic.jpg";
import LetterPullup from "../magicui/LetterPullup";
import { FollowerPointerCard, TitleComponent } from "../magicui/Pointer";
import ShimmerButton from "../magicui/ButtonAnimated";
const HeroSection = () => {
  return (
    <div>
      <FollowerPointerCard
        title={
          <TitleComponent
            title={"Ankit"}
            avatar={profile}
          />
        }
      >
        <div className="flex justify-center">
          <BoxReveal boxColor={"#5046e6"} duration={1}>
            <img
              src={profile}
              alt="Your Image"
              className="w-60 h-60 rounded-full"
            />
          </BoxReveal>
        </div>
        </FollowerPointerCard>
        <div className=" flex flex-col justify-center items-center">
          <LetterPullup words={"Hi :) I'm Ankit"} delay={0.05} />
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <ShimmerButton to="">
            <p className="text-2xl lg:text-6xl font-bold cursor-pointer">
              Frontend Developer<span className="text-[#5046e6]">.</span>
            </p>
            </ShimmerButton>   
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] font-semibold">
              Frontend Developer{" "}
              <span className="text-[#5046e6]">Design Engineers</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-[1.5rem] font-semibold text-lg ms-2">
              <p>
                -&gt; Highly motivated and enthusiastic Frontend Engineer with
                experience in designing . <br />
                -&gt; developing and maintaining web applications using
                technologies such as Generative AI, Typescript, React, Javascript,Tailwindcss<br />
                -&gt; Animations and design using MagicUI,Accernity,FramerMotion. <br />
              </p>
            </div>
          </BoxReveal>

          
        </div>
    </div>
  );
};

export default HeroSection;
