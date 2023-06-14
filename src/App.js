import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import AboutPage from "./components/body/about";
import ProjectsPage from "./components/body/projects";
import Practicum from "./components/body/practicum";
import Flow from "./components/outside/flow";

import useAnimatedText from "./components/useAnimatedText";

function App() {
  const animatedText = useAnimatedText();

  const [page, setPage] = useState(0);
  const [name, setName] = useState("A.G. MATTHEW R.");
  const [desc, setDesc] = useState("Software Developer");
  const [sideBarVisible, setSidebarV] = useState("true");

  return (
    <div>
      <div className="mainContainer">
        <main>
            <div className="row">
              <Sidebar
                page={page}
                setPage={setPage}
                name={name}
                desc={desc}
                sideBarVisible={sideBarVisible}
              />
              {page === 0 && <AboutPage />}
              {page === 1 && (
                <ProjectsPage
                  setName={setName}
                  setDesc={setDesc}
                  setSidebarV={setSidebarV}
                />
              )}
              {page === 2 && <Practicum />}
            </div>
        </main>
      </div>
      <div className="outsideDecor">
        <Flow/>
      </div>
    </div>
  );
}

export default App;
