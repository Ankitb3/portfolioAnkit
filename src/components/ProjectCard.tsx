import { FaGithub } from "react-icons/fa";
import ShimmerButton from "../magicui/ButtonAnimated";
import { PinContainer } from "../magicui/Hoverpin";
interface Props{
  projectName:string,
  desc:string,
  img:string 
  projectLink:string,
  to:string,
  techStack:string[],
  github:string
}
const  ProjectCard=({projectName,desc,img,projectLink,to,techStack,github}:Props)=> {
  return (
    <div className=" flex items-center justify-center ">
      <PinContainer
        title={projectLink}
        to={to}
      >
        <div className="flex  flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]  ">
        <img src={img}/>
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-slate-100">
            {projectName}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {desc}
            </span>
          </div>
          <div className="flex justify-between ">{
            techStack.map((stack)=>(
              <img src={stack} className="h-10 w-10"/>
            ))   
            }
        
          </div>  
          <ShimmerButton to={github} className="mt-4">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                <FaGithub />
              </span>
            </ShimmerButton>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
        </div>
      </PinContainer>
    </div>
  );
}
export default ProjectCard;
