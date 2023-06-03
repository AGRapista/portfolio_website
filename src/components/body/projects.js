import React, { useState, useEffect } from 'react';
import './styles.css';

import project1img from './images/fitness_instructor.png';
import project2img from './images/emppred.PNG';
import project3img from './images/musings.PNG';
import project4img from './images/datawiz.PNG';
import project5img from './images/wizflix.png';

const ProjectsPage = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [translatePos, setTranslatePos] = useState(0);
  const [mouseDelta, setMouseDelta] = useState(0);
  const [maxDelta, setMaxDelta] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
    console.log("boom");
  };

  const handleMouseUp = (e) => {
    setMouseDownAt(0);
    setPrevPercentage(nextPercentage);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    setMouseDelta(parseFloat(mouseDownAt) - e.clientX);
    setMaxDelta(window.innerWidth / 2);
    setPercentage((mouseDelta / maxDelta) * -100);
    setNextPercentage(Math.max(Math.min(parseFloat(prevPercentage) + percentage, 0), -100));
    setTranslatePos(nextPercentage);
    console.log(nextPercentage);
  };

  useEffect(() => {
    const imageElements = document.getElementsByClassName("image");
    for (let i = 0; i < imageElements.length; i++) {
      const imageElement = imageElements[i];
      imageElement.animate({
        objectPosition : `${nextPercentage + 100}% 50%`
      }, {duration: 1200, fill: "forwards"})
    }
  }, [nextPercentage]);

  return (
    <div className="col-8 project-page">
      <div
        id="image-track"
        data-mouse-down-at={mouseDownAt}
        data-prev-percentage={prevPercentage}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ transform: `translate(${translatePos}%, -50%)` }}
      >
        <img className="image no-select" src={project1img} alt="Project 1" draggable="false" />
        <img className="image no-select" src={project2img} alt="Project 2" draggable="false" />
        <img className="image no-select" src={project3img} alt="Project 3" draggable="false" />
        <img className="image no-select" src={project4img} alt="Project 4" draggable="false" />
        <img className="image no-select" src={project5img} alt="Project 5" draggable="false" />
      </div>
    </div>
  );
};

export default ProjectsPage;
