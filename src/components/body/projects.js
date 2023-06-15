import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import "./styles.css";

import project1img from "./images/fitness_instructor.png";
import project2img from "./images/emppred.PNG";
import project3img from "./images/musings.PNG";
import project4img from "./images/datawiz.PNG";
import project5img from "./images/wizflix.png";

import {
  FaPython,
  FaReact,
  FaEthereum,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiSolidity,
  SiDart,
  SiCplusplus,
  SiCsharp,
  SiFlutter,
  SiFlask,
} from "react-icons/si";

const ProjectsPage = ({ setName, setDesc, setSidebarV }) => {
  const projectImages = [
    project1img,
    project2img,
    project3img,
    project4img,
    project5img,
  ];

  const projectNames = [
    "ReactFitness",
    "EmpPred",
    "Musings",
    "DataWiz",
    "WizFlix",
  ];

  const projectTechs = [
    [<SiFlutter />, <SiDart />],
    [<SiFlask />, <FaPython />, <DiJavascript />],
    [<FaReact />],
    [<SiCsharp />],
    [<SiCsharp />],
  ];

  return (
    <div className="col-12 col-md-8">
      <div className="row">
        <div className="col-12 projectPageHeader">
          <p>What I've worked on...</p>
        </div>

        <div className="col-12 projectsContainer">
          <div className="row">
            {projectImages.map((projectImg, i) => {
              return (
                <Tilt
                  className="tiltContainer col-5 col-md-3"
                  glareEnable={true}
                  glareColor={"rgb(171, 255, 251)"}
                  tiltReverse={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                >
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="projectImage no-select"
                        src={projectImg}
                        alt={`Project ${i}`}
                        draggable="false"
                        // onClick={() =>
                        //   openFullscreen(projectImg, names[i], descs[i])
                        // }
                      />
                    </div>
                    <div className="col-12 projectDesc">
                      {projectTechs[i].map((item, index) => {
                        console.log(i, index);
                        return (
                          <div className="skillBubble2 fade-in-skill">
                              {item}
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-12">
                  <p className="projectName">{projectNames[i]}</p></div>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
