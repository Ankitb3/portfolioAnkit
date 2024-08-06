// import ShimmerButton from "../magicui/ButtonAnimated";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { FollowerPointerCard, TitleComponent } from "../magicui/Pointer";
// import profile from "../assets/ankitpic.jpg";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrollY, setScrollY] = useState(window.scrollY);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); 
//   useEffect(() => {
//     console.log(scrollY, 'scroll');
//   }, [scrollY]);
//   return (
//     <div className={`flex justify-between m-2 p-2 fixed top-0 z-10 border-b-[1px] lg:w-full w-[90%]  left-2 lg:left-0`}>
//       <div>
//       <FollowerPointerCard
//         title={
//           <TitleComponent
//             title={"Ankit"}
//             avatar={profile}
//           />
//         }
//       >  <h2 className="text-blue-500 font-bold text-2xl">Ankit</h2>
// </FollowerPointerCard>
//       </div>
//       <div className="flex gap-2">
//         <div className="cursor-pointer">
//             <ShimmerButton to="https://github.com/Ankitb3">
//               <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight   dark:from-white dark:to-slate-900/10 lg:text-lg">
//                 <FaGithub />
//               </span>
//             </ShimmerButton>
//         </div>
//         <div className=" cursor-pointer">
//           <ShimmerButton to="https://linkedin.com/in/ankit-bankar-b36a65256/">
//             <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight   dark:from-white dark:to-slate-900/10 lg:text-lg">
//               <FaLinkedinIn />
//             </span>
//           </ShimmerButton>
//         </div>

//         {/* <div className=" cursor-pointer">
//           <ShimmerButton onClick={handleSwitch}>
//             {theme === "light"? <IoSunnyOutline/>:  <FaMoon /> }
          
//           </ShimmerButton>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import ShimmerButton from "../magicui/ButtonAnimated";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FollowerPointerCard, TitleComponent } from "../magicui/Pointer";
import profile from "../assets/ankitpic.jpg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div
      className={`flex justify-between  p-2 ${isFixed ? 'fixed top-0 z-10' : 'relative'} border-b-[1px] lg:w-full w-[90%] left-2 lg:left-0 
      transition-all duration-300 ease-in-out backdrop-blur-lg bg-white/10 ${isFixed ? 'shadow-md' : ''}`}
    >
      <div>
        <FollowerPointerCard
          title={
            <TitleComponent
              title={"Ankit"}
              avatar={profile}
            />
          }
        >
          <h2 className="text-blue-500 font-bold text-2xl">Ankit</h2>
        </FollowerPointerCard>
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer">
          <ShimmerButton to="https://github.com/Ankitb3">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg">
              <FaGithub />
            </span>
          </ShimmerButton>
        </div>
        <div className="cursor-pointer">
          <ShimmerButton to="https://linkedin.com/in/ankit-bankar-b36a65256/">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg">
              <FaLinkedinIn />
            </span>
          </ShimmerButton>
        </div>

        {/* <div className="cursor-pointer">
          <ShimmerButton onClick={handleSwitch}>
            {theme === "light" ? <IoSunnyOutline /> : <FaMoon />}
          </ShimmerButton>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
