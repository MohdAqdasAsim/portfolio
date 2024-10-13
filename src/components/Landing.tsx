import { Link } from "react-router-dom";
import { ProfileDetails, ProjectsList } from "../data/main-data";

const Landing = () => {
  return (
    <div className="w-full min-h-12 flex-1 flex flex-col sm:flex-col md:flex-row">
      <Profile />
      <About />
      <RecentProject />
    </div>
  );
};

export default Landing;

const Profile = () => {
  return (
    <div className="w-full sm:w-full md:w-1/3  min-h-12 flex-1 flex items-center justify-center">
      <div className="w-[90%] h-[90%] flex flex-col shadow-2xl shadow-black border-2 border-warmGold bg-charcoalGray">
        <span className="w-full h-1/2 flex items-center justify-center mt-2 sm:mt-2 md:mt-0">
          <img
            src={ProfileDetails.image}
            alt="profile-image"
            className="w-1/2 rounded-full filter grayscale-0 hover:grayscale transition duration-300 ease-in-out"
            style={{
              border: "2px solid #e0e0e0", // Border color for the mirror frame effect
              borderRadius: "50%", // Ensures the border follows the circular shape
              boxShadow:
                "0 0 10px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.3)", // Shadow for mirror effect
            }}
          />
        </span>
        <span className="w-full h-1/2 flex-1 flex flex-col gap-4 justify-start items-center p-2">
          <p className="text-4xl text-softWhite">{ProfileDetails.name}</p>
          <p className="text-center text-sm text-softWhite opacity-60">
            {ProfileDetails.briefDesc}
          </p>

          <span className="w-full flex items-center justify-center">
            <span className="flex items-center gap-2 p-1">
              <Link
                to={ProfileDetails.socials.instagram}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="instagram"
                  className="w-6"
                />
              </Link>
              <Link
                to={ProfileDetails.socials.linkedin}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  className="w-6"
                />
              </Link>
              <Link
                to={ProfileDetails.socials.github}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-warmGold hover:bg-mintGreen"
              >
                <img src="/icons/github.svg" alt="github" className="w-6" />
              </Link>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full sm:w-full md:w-1/3 min-h-12 flex-1 flex-col-reverse sm:flex-col-reverse md:flex-col p-6">
      <div className="w-full h-1/2 flex-1 p-3 flex">
        <span className="w-full h-full shadow-lg shadow-black rounded-2xl flex items-center justify-end p-4">
          <p className="text-5xl text-softWhite text-end">{ProfileDetails.quote}</p>
        </span>
      </div>
      <div className="w-full h-1/2 flex-1 p-3 flex">
        <span className="w-full h-full flex flex-col justify-center items-center shadow-lg shadow-black rounded-2xl p-2">
          <p className="text-softWhite text-xl">About</p>
          <p className="text-center opacity-75 text-softWhite">
            {ProfileDetails.detailedDesc}
          </p>
        </span>
      </div>
    </div>
  );
};

const RecentProject = () => {
  const LatestProject = ProjectsList[0];
  return (
    <div className="w-full sm:w-full md:w-1/3 min-h-12 flex-1 p-6">
      <div className="w-full h-full flex-1 p-3 flex">
        <span className="w-full h-full flex flex-col shadow-lg shadow-black rounded-2xl overflow-hidden p-3">
          <p className="text-2xl text-softWhite mb-2">Recent Projects</p>
          <Link to={`/projects/${LatestProject.slug}`} className="flex flex-col items-center gap-1">
            <span className="w-full h-1/2 flex rounded-2xl overflow-hidden shadow-sm shadow-black">
              <img
                src={LatestProject.image}
                alt="project"
                className="w-full h-full object-cover"
              />
            </span>
            <p className="text-softWhite text-xl text-center hover:underline">{LatestProject.name}</p>
            <p className="line-clamp-5 text-softWhite text-xl text-center opacity-70">
              {LatestProject.briefDesc}
            </p>
          </Link>
          <Link to="/projects" className="w-full h-12 flex items-center justify-center rounded-2xl bg-deepBlue hover:bg-softWhite text-softWhite hover:text-deepBlue">
            <p>View All Projects</p>
          </Link>
        </span>
      </div>
    </div>
  );
};
