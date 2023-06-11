import React, { useEffect } from "react";
import "./styles.css";

import { FaPython, FaReact, FaEthereum, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiSolidity,
  SiDart,
  SiCplusplus,
  SiCsharp,
  SiFlutter,
  SiFlask,
} from "react-icons/si";
import {HiOutlineMail} from "react-icons/hi";
import {ImProfile} from "react-icons/im";

const AboutPage = () => {
  useEffect(() => {
    const elements = document.getElementsByClassName("fade-in-text");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-in-animation");
    }
  }, []);

  return (
    <div className="col-8 col-md-8 about-page">
      <div className="row">
        <div className="col-12" style={{ marginTop: "15%" }}></div>
        <div className="col-12" id="greetingsContainer">
          <h3 className="fade-in-text" style={{ color: "rgb(171, 255, 251)" }}>
            Greetings!
          </h3>
          <h3 className="fade-in-text fade-in-text-second">
            I am A.G. Matthew A. Rapista, an aspiring software developer. I
            create software solutions ranging from web applications, mobile
            apps, and smart contracts.
          </h3>
        </div>

        <div className="col-12 col-md-6">
          <h3
            className="fade-in-text"
            style={{
              color: "rgb(171, 255, 251)",
              "animation-fill-mode": "forwards",
              "animation-delay": "2s",
              opacity: 0,
            }}
          >
            Programming languages{" "}
          </h3>
          {[
            [<FaPython />, "Python"],
            [<DiJavascript />, "Javascript"],
            [<SiSolidity />, "Solidity"],
            [<SiDart />, "Dart"],
            [<SiCplusplus />, "C++"],
            [<SiCsharp />, "C#"],
          ].map((item, i) => (
            <div
              className="skillBubble fade-in-skill"
              style={{ "animation-delay": `${3 + i / 3}s` }}
            >
              {item[0]}
              {item[1]}
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6">
          <h3
            className="fade-in-text"
            style={{
              color: "rgb(171, 255, 251)",
              "animation-fill-mode": "forwards",
              "animation-delay": "2s",
              opacity: 0,
            }}
          >
            Technologies{" "}
          </h3>
          {[
            [<SiFlutter />, "Flutter"],
            [<FaReact />, "ReactJS"],
            [<SiFlask />, "Flask"],
            [<FaEthereum />, "Ethereum"],
          ].map((item, i) => (
            <div
              className="skillBubble fade-in-skill"
              style={{ "animation-delay": `${3 + i / 3}s` }}
            >
              {item[0]}
              {item[1]}
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6">
          <h3
            className="fade-in-text"
            style={{
              color: "rgb(171, 255, 251)",
              "animation-fill-mode": "forwards",
              "animation-delay": "4s",
              opacity: 0,
              marginTop: "40px",
            }}
          >
            Get to know me better{" "}
          </h3>

          <a
            href="https://www.linkedin.com/in/a-g-rapista-584683232/"
            target="_blank"
          >
            <button
              className="fade-in-skill"
              style={{
                width: "45px",
                height: "40px",
                margin: "5px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "rgb(40, 193, 248)",
                animationDelay: "5s",
              }}
            >
              <FaLinkedin/>
            </button>
          </a>

          <a href="mailto:amrapista@live.mcl.edu.ph">
            <button
              className="fade-in-skill"
              style={{
                width: "45px",
                height: "40px",
                margin: "5px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "rgb(122, 247, 94)",
                animationDelay: "5s",
              }}
            >
              <HiOutlineMail/>
            </button>
          </a>

          <a
            href="https://docs.google.com/document/d/1xrkpQuVCz3JoIDmfAOXWdG0YDzDLv2kDRqMs_q6ObQE/edit?usp=sharing"
            target="_blank"
          >
            <button
              className="fade-in-skill"
              style={{
                width: "45px",
                height: "40px",
                margin: "5px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "rgb(66, 133, 244)",
                animationDelay: "5s",
              }}
            >
              <ImProfile/>
            </button>
          </a>
          <a href="https://github.com/AGRapista" target="_blank">
            <button
              className="fade-in-skill"
              style={{
                width: "45px",
                height: "40px",
                margin: "5px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "rgb(255, 255, 255)",
                animationDelay: "5s",
              }}
            >
              <FaGithub/>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
