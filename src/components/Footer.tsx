import { CiLocationOn } from "react-icons/ci"
import ShimmerButton from "../magicui/ButtonAnimated"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
<footer className=" py-4 border-t-2">

    <div className="flex flex-col justify-center items-center gap-4">  <h2 className="flex items-center text-xl"><CiLocationOn /> Nagpur,india  </h2>
    <div className="flex">
    <div className="cursor-pointer">
            <ShimmerButton to="https://github.com/Ankitb3">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight   dark:from-white dark:to-slate-900/10 lg:text-lg">
                <FaGithub />
              </span>
            </ShimmerButton>
        </div>
        <div className=" cursor-pointer ms-2">
          <ShimmerButton to="https://linkedin.com/in/ankit-bankar-b36a65256/">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight   dark:from-white dark:to-slate-900/10 lg:text-lg">
              <FaLinkedinIn />
            </span>
          </ShimmerButton>
        </div>
    </div>
    </div>
</footer>

    </div>
  )
}

export default Footer