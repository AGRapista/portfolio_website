import React, { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './components/body/about';
import ProjectsPage from './components/body/projects';
import Practicum from './components/practicum';

import useAnimatedText from './components/useAnimatedText';

function App() {
  const animatedText = useAnimatedText();

  const [page, setPage] = useState(0)
  const [name, setName] = useState("A.G. MATTHEW R.")
  const [desc, setDesc] = useState("Software Developer")

  return (
    <div className="row mainContainer">
      <main>
        <Header name={name} description={desc}/>
        <div className="row">
          <Sidebar page={page} setPage={setPage}/>
          {page === 0 && <AboutPage />}
          {page === 1 && <ProjectsPage setName={setName} setDesc={setDesc}/>}
          {page === 3 && <Practicum/>}
        </div>
      </main>
    </div>
  );
}

export default App;