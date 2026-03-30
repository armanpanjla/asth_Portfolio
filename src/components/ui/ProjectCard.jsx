const ProjectCard = ({Projects}) => {
    return (
        <div> {
            Projects.map((project, index) => (
                <div key={index}
                    className="bg-[#1d1d1d] rounded-2xl grid grid-cols-2  mb-4 ">
                    <img className="p-3  "
                        src={
                            project.img
                        }
                        alt={
                            project.name
                        }
                        draggable="false"/>

                    <div>
                        <p>{
                            project.name
                        }</p>
                        <p>{
                            project.subhead
                        }</p>
                    </div>
                </div>
            ))
        } </div>
    )
}
export default ProjectCard;
