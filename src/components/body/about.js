import React, { useEffect } from "react";
import "./styles.css";

import logo from "./images/github_logo.png";
import cv from "./images/cv.png";
import email_png from "./images/email.png";

const AboutPage = () => {

  useEffect(() => {
    const elements = document.getElementsByClassName('fade-in-text');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('fade-in-animation');
    }
  }, []);

  return (
    <div className="col-8 about-page">
      <div className="row">

        <div className="col-12" style={{ marginBottom: "40px" }}>
          <h2 className="fade-in-text" style={{ color: "rgb(171, 255, 251)" }}>
            Greetings!
          </h2>
          <h2 className="fade-in-text fade-in-text-second">
            I am A.G. Matthew A. Rapista, an aspiring software developer. I create software
            solutions ranging from web applications, mobile apps, and smart
            contracts.
          </h2>
        </div>

        <div className="col-6">
          <h3 className="fade-in-text" 
              style={{ color: "rgb(171, 255, 251)", "animation-fill-mode": "forwards",
                      "animation-delay": "2s", opacity: 0}}>
              Programming languages </h3>
          {["Python", "Javascript", "Solidity", "Dart", "C++", "C#"].map((item, i) => (
            <div className="skillBubble fade-in-skill" style={{"animation-delay": `${3+(i/3)}s`}}>{item}</div>
          ))}
        </div>    

        <div className="col-6">
          <h3 className="fade-in-text" 
              style={{ color: "rgb(171, 255, 251)", "animation-fill-mode": "forwards",
                      "animation-delay": "2s", opacity: 0}}>
              Technologies </h3>
          {["Flutter", "ReactJS", "Flask", "Ethereum", "Avalanche"].map((item, i) => (
            <div className="skillBubble fade-in-skill" style={{"animation-delay": `${3+(i/3)}s`}}>{item}</div>
          ))}
        </div>

        <div className="col-6">
          <h3 className="fade-in-text" 
              style={{ color: "rgb(171, 255, 251)", "animation-fill-mode": "forwards",
                      "animation-delay": "4s", opacity: 0, marginTop: "40px"}}>
              Get to know me better </h3>
              <a href="mailto:amrapista@live.mcl.edu.ph">
                <button className="fade-in-skill" style={{margin: "5px", borderRadius:"10px", border: "none", backgroundColor: "rgb(40, 193, 248)", animationDelay: "5s"}}>
                  <img src={email_png} alt="Button Image" style={{width: "40px", height: "40px"}} />
                </button>
              </a>

              <a href="https://docs.google.com/document/d/1xrkpQuVCz3JoIDmfAOXWdG0YDzDLv2kDRqMs_q6ObQE/edit?usp=sharing" target="_blank">
                <button className="fade-in-skill" style={{ margin: "5px", borderRadius:"10px", border: "none", backgroundColor: "rgb(66, 133, 244)", animationDelay: "5s"}}>
                    <img src={cv} alt="Button Image" style={{width: "40px", height: "40px"}} />
                  </button>
              </a>
              <a href="https://github.com/AGRapista" target="_blank">
                <button className="fade-in-skill" style={{ margin: "5px", borderRadius:"10px", border: "none", animationDelay: "5.5s"}}>
                  <img src={logo} alt="Button Image" style={{width: "40px", height: "40px"}} />
                </button>
              </a>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;