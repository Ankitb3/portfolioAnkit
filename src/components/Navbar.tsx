import ShimmerButton from "../magicui/ButtonAnimated";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FollowerPointerCard, TitleComponent } from "../magicui/Pointer";
import profile from "../assets/ankitpic.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between m-2 border-b-[1px]">
      <div>
      <FollowerPointerCard
        title={
          <TitleComponent
            title={"Ankit"}
            avatar={profile}
          />
        }
      >  <h2 className="text-blue-500 font-bold text-2xl">Ankit</h2>
</FollowerPointerCard>
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer">
            <ShimmerButton to="https://github.com/Ankitb3">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                <FaGithub />
              </span>
            </ShimmerButton>
        </div>
        <div className=" cursor-pointer">
          <ShimmerButton to="https://linkedin.com/in/ankit-bankar-b36a65256/">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              <FaLinkedinIn />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
