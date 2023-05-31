import React from 'react';
import './App.css';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import useAnimatedText from './components/useAnimatedText';

function App() {
  const animatedText = useAnimatedText();

  return (
    <div className="row mainContainer">
      <main>
        <Header/>
        <Sidebar/>
      </main>
    </div>
  );
}

export default App;