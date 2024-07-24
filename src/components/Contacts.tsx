import ShimmerButton from "../magicui/ButtonAnimated";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function DockDemo() {
  return (
    <div className="flex justify-center gap-4 mt-4">
     <ShimmerButton className="shadow-2xl">
      <Link to={""}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          <FaGithub/>
        </span>
        </Link>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl">
        <Link to={"https://www.linkedin.com/in/ankit-bankar-b36a65256/"}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          <FaLinkedinIn/>
        </span></Link>
       
      </ShimmerButton>
      {/* <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          <FaGithub/>
        </span>
      </ShimmerButton> */}
    </div>
  );
}


