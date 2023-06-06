import React, { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './components/body/about';
import ProjectsPage from './components/body/projects';
import Practicum from './components/practicum';
import Flow from './components/outside/flow';

import useAnimatedText from './components/useAnimatedText';

function App() {
  const animatedText = useAnimatedText();

  const [page, setPage] = useState(0)
  const [name, setName] = useState("A.G. MATTHEW R.")
  const [desc, setDesc] = useState("Software Developer")

  return (
    <div>
      <div className="mainContainer">
        <main>
          <Header name={name} description={desc}/>
          <div className="row">
            <Sidebar page={page} setPage={setPage}/>
            {page === 0 && <AboutPage />}
            {page === 1 && <ProjectsPage setName={setName} setDesc={setDesc}/>}
            {page === 2 && <Practicum/>}
          </div>
        </main>
      </div>
      <div className="overlap outsideDecor">
        {/* <Flow/> */}
      </div>
    </div>
  );
}

export default App;