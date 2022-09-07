const project2Image = require("./assets/pegs.png");
const weatherDashboard = require("./assets/weather-dashboard.gif");
const reactApp = require("./assets/reactApp.gif");

import ProjectTemplate from "./components/ProjectComponent";
import DescriptionTemplate from "./components/ProjectDescriptions";

const Projects = () => {
  return (
    <div className="flex justify-center pt-3">
      <div id="container" className="flex flex-row justify-evenly ">
        <div id="left-column">
          <DescriptionTemplate
            title="Jegs and Pokers:"
            description="Jegs and Pokers is an online game that requires authentication to
            create and join a game"
          />
          <DescriptionTemplate
            title="Weather Dashboard:"
            description="The Weather Dashboard displays the current weather and any other descriptors related to the weather in any city"
          />
          <DescriptionTemplate
            title="Full Stack React E-commerce application:"
            description="This project uses the MERN stack and utilized MVC for its file structure. It is a website for selling items that has a login, cart, and multiple pages to access"
          />
        </div>
        <div
          id="right-column"
          className="flex flex-col max-w-2xl bg-slate-400 border-4 h-fit p-4"
        >
          <ProjectTemplate
            image={project2Image}
            description="Jegs and Pokers is an online game that requires authentication to create and join a game"
            link="https://jegs-and-pokers.herokuapp.com/"
          />
          <ProjectTemplate
            image={weatherDashboard}
            description="Weather App"
            link="https://mark-ustby.github.io/Modern_Weather_Application/"
          />
          <ProjectTemplate
            image={reactApp}
            description="Full stack e-commerce website"
            link="https://github.com/Mark-U20/Dapper_Gents_Bizour"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
