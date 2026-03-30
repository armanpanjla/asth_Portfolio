import {Link} from "react-router-dom";
import ProjectCard from "../ui/ProjectCard";
import { Projects } from "../../data/Projects";

const ProjectSection = () => {
    return (
        <section>
            <h1 className="flex mb-6 text-3xl">Recent Projects</h1>
            <div className="flex">
                <Link to="/projects" className=" border  p-2 rounded border-slate-600  ml-auto  bg-[#1d1d1d] hover:scale-105 ">View Projects</Link>
            </div>

        <div className="">
           <ProjectCard Projects={Projects} />
        </div>


        </section>
    )
}
export default ProjectSection;
