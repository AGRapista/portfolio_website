import React, { useState, useEffect } from 'react';
import './styles.css';

import project1img from './images/fitness_instructor.png';
import project2img from './images/emppred.PNG';
import project3img from './images/musings.PNG';
import project4img from './images/datawiz.PNG';
import project5img from './images/wizflix.png';

const ProjectsPage = ({setName, setDesc, setSidebarV}) => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [translatePos, setTranslatePos] = useState(0);
  const [mouseDelta, setMouseDelta] = useState(0);
  const [maxDelta, setMaxDelta] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImageSrc, setFullscreenImageSrc] = useState('');

  const [canExpand, setCanExpand] = useState(true);

  const projectImages = [project1img, project2img, project3img, project4img, project5img];

  const handleMouseDown = (e) => {
    console.log("mouse down")
    setCanExpand(false);
    setMouseDownAt(e.clientX);
  };

  const handleMouseUp = (e) => {
    setMouseDownAt(0);
    setCanExpand(true);
    console.log("mouse up", canExpand)
    setPrevPercentage(nextPercentage);
  };

  const handleMouseMove = (e) => {
    console.log("moving", mouseDownAt)
    if (mouseDownAt === 0) return;

    setMouseDelta(parseFloat(mouseDownAt) - e.clientX);
    setMaxDelta(window.innerWidth / 2);
    setPercentage((mouseDelta / maxDelta) * -100);
    setNextPercentage(Math.max(Math.min(parseFloat(prevPercentage) + percentage, 0), -100));
    setTranslatePos(nextPercentage);
    // console.log(mouseDelta, maxDelta, percentage, translatePos, nextPercentage);
    console.log("finished moving")
  };

  const openFullscreen = (imageSrc, name, desc) => {
    console.log("opening", canExpand);
    if (canExpand) {
      setTimeout(() => {
        if (canExpand) {
          setIsFullscreen(true);
          setFullscreenImageSrc(imageSrc);
          changeHeader(name, desc);
          hideImageTrack();
          setSidebarV(false);
        }
      }, 5);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImageSrc('');
    changeHeader("A.G. MATTHEW R.", "Software Developer")
    showImageTrack()
    setSidebarV(true);
  };

  const changeHeader = (name, desc) => {
      setName(name)
      setDesc(desc)
      console.log("changing header to ", name, desc)
  }

  const hideImageTrack = () => {
    const imageTrack = document.getElementById("image-track")

    imageTrack.style.display = "none"
  }

  const showImageTrack = () => {
    const imageTrack = document.getElementById("image-track")

    imageTrack.style.display = "flex"
  }

  useEffect(() => {
    const imageElements = document.getElementsByClassName("image");
    for (let i = 0; i < imageElements.length; i++) {
        const imageElement = imageElements[i];
        imageElement.animate({ objectPosition: `${nextPercentage + 100}% 50%` }, { duration: 1200, fill: "forwards" });
    }
  }, [nextPercentage]);

  const names = ["Fitness Instructor", "EmpPred", "Musings", "DataWiz", "WizFlix"]
  const descs = [
      "(mobile application, computer vision) — a virtual workout assistant utilizing computer vision pose estimation models (tensorflow) built using the flutter framework.",
      "(web application, data mining application) — Job prediction web application utilizing supervised and unsupervised learning algorithms. Built using Python Flask",
      "(website) — General note taking app built using ReactJS",
      "(website, e-commerce) — An e-commerce website exemplifying online marketplace functionalities such as buying, selling, trading, review, etc.. Built using ASP.NET",
      "(website, media) — An online cinema reservation system that facilitates customer (select and reserve movie seat) and administrator (create and manage movie and cinema) use cases. Built using ASP.NET"
  ]

  return (
    <div className="col-8 project-page">
      {isFullscreen && (
        <div className="fullscreen-overlay no-select" onClick={closeFullscreen}>
          <img className="fullscreen-image no-select" draggable="false" src={fullscreenImageSrc} alt="Fullscreen" draggable="false" />
        </div>
      )}
      <div
        id="image-track"
        data-mouse-down-at={mouseDownAt}
        data-prev-percentage={prevPercentage}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        style={{ transform: `translate(${translatePos}%, -50%)` }}
      > 
        <div className="no-select" draggable="false" ><h2>What I've developed so far</h2></div>
        <div className="arrowContainer"><div className="leftArrow left"></div></div>
        { projectImages.map((projectImg, i) => {   
          return <img className="image no-select" src={projectImg} alt={`Project ${i}`} draggable="false" onClick={() => openFullscreen(projectImg, names[i], descs[i])} /> 
        })
        }
        {/* <img className="image no-select" src={project1img} alt="Project 1" draggable="false" onClick={() => openFullscreen(project1img, names[0], descs[0])} />
        <img className="image no-select" src={project2img} alt="Project 2" draggable="false" onClick={() => openFullscreen(project2img, names[1], descs[1])} />
        <img className="image no-select" src={project3img} alt="Project 3" draggable="false" onClick={() => openFullscreen(project3img, names[2], descs[2])} />
        <img className="image no-select" src={project4img} alt="Project 4" draggable="false" onClick={() => openFullscreen(project4img, names[3], descs[3])} />
        <img className="image no-select" src={project5img} alt="Project 5" draggable="false" onClick={() => openFullscreen(project5img, names[4], descs[4])} /> */}
      </div>
    </div>
  );
};

export default ProjectsPage;
