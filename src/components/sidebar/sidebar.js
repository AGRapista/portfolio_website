import React from 'react';
import './styles.css';

const Chain = () => {
  return (
    <div className="chain">
      <div className="outerChain"></div>
      <div className="innerChain"></div>
      <div className="chainIndicator"></div>
    </div>
  )
}

const ChainLink = () =>{
  return (
    <div className="chainLink"></div>
  )
}

const Sidebar = () => {
  return (
    <div className="col-4 sidebar">
      <div className="row">
        <div className="col-2 chainParent">
          <ChainLink/>
          <div className="chains">
            <div className="chainContainer"><Chain/></div>
            <div className="chainContainer"><Chain/></div>
            <div className="chainContainer"><Chain/></div>
          </div>
        </div>
        <div className="col-10">
          <p className="animatedText" data-value="About me">About me</p>
          <p className="animatedText" data-value="Projects">Projects</p>
          <p className="animatedText" data-value="Info">Info</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;