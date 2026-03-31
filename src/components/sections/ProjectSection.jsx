import {Link} from "react-router-dom";
import ProjectCard from "../ui/ProjectCard";
import {Projects} from "../../data/Projects";


const ProjectSection = () => {
    return (
        <section>
            <div className="flex h-fit items-center mb-">
                <h1 className="flex mb-6 text-3xl">Recent Projects</h1>
                <Link to="/projects" className=" border  p-2 rounded border-slate-600  ml-auto  bg-[#1d1d1d] hover:scale-105 ">View Projects</Link>
            </div>

            <div className=" grid grid-cols-1 mx-auto max-w-5/8  bg-[#1d1d1d] my-auto items-center">
                <ProjectCard Projects={Projects}/>
            </div>


        </section>
    )
}
export default ProjectSection;
