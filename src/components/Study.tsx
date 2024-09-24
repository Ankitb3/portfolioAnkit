import StudyCard from "./StudyCard"
import UG from "../assets/ug.jpeg"
import PG from "../assets/pg.jpeg"
// import MERN from "../assets/MERN1.png"

const Study = () => {
  return (
    <div className=" mt-40 lg:mt-10">
      <h2 className="  text-blue-500 font-semibold text-4xl text-center">
        Qualification
      </h2>
      <div>
        <StudyCard img={PG} gradiuate="Post-Gradiuate " date="July 2023 ~ July 2025" course="Master of Computer Applications-(MCA)" collageName="Wainganga College of Engineering , Nagpur"/>
        <StudyCard img={UG} gradiuate="Gradiuate" date=" July 2019 ~ July 2022" course="Bachelor of Computer Applications-(BCA)" collageName="Kamla Nehru Mahavidyalaya, Nagpur"/>
        {/* <StudyCard img={MERN} gradiuate="MERN STACK" date=" SEPTEMBER 2019 ~ AUGUST 2020" course="MERN" collageName="ROAD TO CODE, PUNE"/> */}
        </div>

    </div>
  )
}

export default Study