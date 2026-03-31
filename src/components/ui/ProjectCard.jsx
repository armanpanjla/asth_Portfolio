import Techused  from "./Techused"
const ProjectCard = ({Projects}) => {
    return (
        <div> {
            Projects.map((project, index) => (
                <div key={index}
                    className="">
                    <div className="flex ">
                        <div className="border p-4">
                            <div>
                                <p className="text-3xl tracking-wider">
                                    {
                                    project.name
                                }</p>
                            </div>
                            <img className=" border  rounded-2xl  mb-4  border-none p-6"
                                src={
                                    project.img
                                }
                                alt={
                                    project.name
                                }
                                draggable="false"/>

                            <div>
                                <p className="p-4">
                                    {
                                    project.subhead
                                }</p>
                            </div>
                        </div>


                        <div className="p-8">
                            {
                            <Techused techlist={project.techlist} />
                        } </div>
                    </div>
                </div>
            ))
        } </div>
    )
}
export default ProjectCard;
