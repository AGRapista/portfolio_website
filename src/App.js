import React, { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './components/body/about';
import ProjectsPage from './components/body/projects';

import useAnimatedText from './components/useAnimatedText';

function App() {
  const animatedText = useAnimatedText();

  const [page, setPage] = useState(0)

  return (
    <div className="row mainContainer">
      <main>
        <Header/>
        <div className="row">
          <Sidebar page={page} setPage={setPage}/>
          {page === 0 && <AboutPage />}
          {page === 1 && <ProjectsPage />}
        </div>
      </main>
    </div>
  );
}

export default App;