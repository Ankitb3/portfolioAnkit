import { Tag } from "antd"
interface Props{
    img:string,
    date:string,
    course:string,
    collageName:string,
    gradiuate:string
}
const StudyCard = ({img,date,course,collageName,gradiuate}:Props) => {
  return (
    <div className=" bg-[#131824] lg:w-[60%] w-[95%] mt-4 border rounded hover:translate-x-4 cursor-pointer delay-75" style={{
        zIndex:"-1"
    }}>
        <div className="flex ">
            <div>        <img className="h-30 w-[8rem] m-4 rounded" src={img}/>
            </div>
            <div className="lg:ms-2 text-center lg:text-left">       
                <h2 className="text-blue-500 font-semibold lg:text-2xl mt-2 ">{gradiuate}</h2>
                <h2 className="text-blue-500 font-semibold lg:text-2xl mt-2 ">{date}</h2>
                <p className="font-semibold text-lg">{collageName}</p>
                <p className="font-semibold text-lg mt-2">{course}</p>
                <Tag color="cyan" className="text-[17px] bg-transparent font-semibold">🎓 Grade A+</Tag>
            </div>
        </div>
    </div>
  )
}

export default StudyCard