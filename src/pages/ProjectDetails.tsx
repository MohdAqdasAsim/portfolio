import { Link, useParams } from "react-router-dom";
import { ProjectsList } from "../data/main-data"; // Import the ProjectsList from where it's stored

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>(); // Get the slug from the URL

  // Find the project that matches the slug
  const project = ProjectsList.find((proj) => proj.slug === slug);

  if (!project) {
    // If no project is found, display a message
    return <div>Project not found.</div>;
  }

  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-4xl text-softWhite text-center mb-2">{project.name}</h1>
      <span className="w-full flex flex-col sm:flex-col md:flex-row gap-4">
        <span className="h-72 w-full sm:w-full md:w-1/3 rounded-2xl overflow-hidden shadow-black shadow-lg">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full"
          />
        </span>

        <span className="w-full sm:w-full md:w-2/3">
          <p className="text-lg text-softWhite mb-4 opacity-80">{project.briefDesc}</p>

          {/* Links for live version and GitHub repository */}
          <div className="flex gap-4">
            {project.liveLink && (
              <Link
                to={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmGold hover:text-mintGreen border-2 border-warmGold hover:border-mintGreen px-3 rounded-2xl"
              >
                Live Version
              </Link>
            )}
            {project.githubLink && (
              <Link
                to={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmGold hover:text-mintGreen border-2 border-warmGold hover:border-mintGreen px-3 rounded-2xl"
              >
                GitHub Repository
              </Link>
            )}
          </div>
        </span>
      </span>
    </div>
  );
};

export default ProjectDetails;
