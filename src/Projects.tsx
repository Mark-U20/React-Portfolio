const project2Image = require("./assets/pegs.png");
import ProjectTemplate from "./components/ProjectComponent";

const Projects = () => {
  return (
    <div className="flex justify-center pt-3">
      <div id="container" className="flex flex-row justify-evenly ">
        <div id="left-column">
          <p>Jegs and Pokers</p>
          <p>
            Jegs and Pokers is an online game that requires authentication to
            create and join a game
          </p>
        </div>
        <div
          id="right-column"
          className="max-w-2xl bg-green-400 border-4 h-fit p-4"
        >
          <ProjectTemplate
            image={project2Image}
            description="Jegs and Pokers is an online game that requires authentication to create and join a game"
            link="https://github.com/LSton40/APIstemological_revelation"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
