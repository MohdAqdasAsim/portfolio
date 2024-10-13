import { Link } from "react-router-dom";
import { Journey, ProfileDetails, SkillsTechnologies } from "../data/main-data";

const About = () => {
  return (
    <div className="w-full h-full flex-1 p-6">
      <h1 className="text-4xl text-softWhite">About</h1>
      {/* Personal Introduction */}
      <p className="mt-4 text-softWhite">
        Hey there! I'm a junior at Aligarh Muslim University, currently majoring
        in Mathematics and diving deep into the world of programming. My passion
        for coding sparked alongside my studies, and I've been building creative
        web and mobile applications ever since. With a strong foundation in
        problem-solving, I love exploring how technology can solve real-world
        challenges.
      </p>
      <p className="mt-4 text-softWhite">
        Whether it's designing interactive apps or crafting unique digital
        experiences, I’m always excited to learn new tools and collaborate on
        projects that push the boundaries of what's possible. My journey is just
        beginning, and I can't wait to see where it takes me!
      </p>

      {/* Skills Section */}
      <div className="mt-6">
        <h2 className="text-3xl text-softWhite">Skills & Technologies</h2>
        <ul className="flex flex-wrap gap-4 mt-4">
          {SkillsTechnologies.map((element,index) => {
            return (
              <li className="p-2 bg-warmGold text-softWhite rounded-md" key={index}>
                {element}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Timeline Section */}
      <div className="timeline mt-8">
        <h2 className="text-3xl text-softWhite">My Journey</h2>
        <ul className="timeline-list mt-4">
          {Journey.map((element,index) => {
            return (
              <li key={index} className="pl-2 mb-3 flex items-center gap-4">
                <span className="w-3 h-3 bg-warmGold rounded-full"></span>
                <span>
                  <h3 className="text-xl text-mintGreen">{element.main}</h3>
                  <p className="text-softWhite">{element.sub}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="call-to-action mt-8">
        <h2 className="text-3xl text-softWhite">Let’s Collaborate!</h2>
        <p className="text-softWhite mt-2">
          I’m always excited to work on new projects and solve interesting
          problems. Feel free to check out my&nbsp;
          <Link
            to={ProfileDetails.socials.github}
            className="text-mintGreen hover:text-warmGold"
          >
            GitHub
          </Link>
          &nbsp; or reach out through the&nbsp;
          <Link to="/contact" className="text-mintGreen hover:text-warmGold">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
