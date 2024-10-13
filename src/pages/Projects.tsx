import { Link } from "react-router-dom";
import { ProjectsList } from "../data/main-data";

const Projects = () => {
  return (
    <div className="w-full flex flex-wrap">
      {ProjectsList.map((project,index) => {
        return (
          <div className="w-full sm:w-full md:w-1/3 p-6" key={index}>
            <div className="w-[100%] sm:w-[100%] md:w-[90%] h-full rounded-2xl p-2 shadow-md shadow-black">
              <Link
                to={`/projects/${project.slug}`}
                className="flex flex-col items-center gap-1 mt-2"
              >
                <span className="w-full h-1/2 flex rounded-2xl overflow-hidden shadow-sm shadow-black">
                  <img
                    src={project.image}
                    alt="project"
                    className="w-full h-full object-cover"
                  />
                </span>
                <p className="text-softWhite text-xl text-center hover:underline">
                  {project.name}
                </p>
                <p className="line-clamp-5 text-softWhite text-xl text-center opacity-70">
                  {project.briefDesc}
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
