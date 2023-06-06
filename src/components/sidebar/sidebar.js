import React from 'react';
import './styles.css';

const Chain = ({page, num}) => {
  return (
    <div className="chain">
      {/* <div className="outerChain">
      <div className="innerChain"></div></div> */}
      <div className={`${page === num ? 'chainIndicator' : ''}`}></div>
    </div>
  )
}

const ChainLink = () =>{
  return (
    <div className="chainLink"></div>
  )
}

const Sidebar = ({ page, setPage }) => {

  const nextPage = (num) => {
    setPage(num);
  };

  return (
    <div className="col-4 sidebar">
      <div className="row">
        <div className="col-2 chainParent">
          <ChainLink/>
          <div className="chains">
            <div className="chainContainer"><Chain page = {page} num = {0}/></div>
            <div className="chainContainer"><Chain page = {page} num = {1}/></div>
            <div className="chainContainer"><Chain page = {page} num = {2}/></div>
          </div>
        </div>
        <div className="col-10">
          <p className={`animatedText no-select ${page === 0 ? 'active' : ''}`} data-value="About me" onClick={() => nextPage(0)}>About me</p>
          <p className={`animatedText no-select  ${page === 1 ? 'active' : ''}`} data-value="Projects" onClick={() => nextPage(1)}>Projects</p>
          <p className={`animatedText no-select  ${page === 2 ? 'active' : ''}`} data-value="Practicum" onClick={() => nextPage(2)}>Practicum</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;