import React from "react";
import "./styles.css";

import Header from "../header/header";

const Chain = ({ page, num }) => {
  return (
    <div className="chain">
      {/* <div className="outerChain">
      <div className="innerChain"></div></div> */}
      <div className={`${page === num ? "chainIndicator" : ""}`}></div>
    </div>
  );
};

const ChainLink = () => {
  return <div className="chainLink"></div>;
};

const Sidebar = ({ page, setPage, name, desc, sideBarVisible }) => {
  const nextPage = (num) => {
    setPage(num);
  };

  return (
    <div className="col-10 col-md-4 sidebar">
      <div className="row" id="headerContainer">
        <Header name={name} description={desc} />
      </div>
      <div
        className="row"
        style={{ display: sideBarVisible ? "block" : "none" }}
      >
        
        <div
          className="col-12"
          id="sidebarSelectionsContainer"
          style={{ display: sideBarVisible ? "block" : "none"}}
        >
          <div className="row">
            {/* <p className="col-1 d-block d-md-none"></p> */}
            <div className="col-md-12 col-3">
              <div className="row">
                <div className="col-md-2 chainContainer">
                  <Chain page={page} num={0} />
                </div>
                <p
                  className={`col-md-6 sidebarSelection animatedText no-select ${
                    page === 0 ? "active" : ""
                  }`}
                  data-value="About me"
                  onClick={() => nextPage(0)}
                >
                  About me  
                </p>
              </div>
            </div>

            <div className="col-md-12 col-3">
              <div className="row">
                <div className="col-md-2 chainContainer">
                  <Chain page={page} num={1} />
                </div>
                <p
                  className={`col-md-6 sidebarSelection animatedText no-select ${
                    page === 1 ? "active" : ""
                  }`}
                  data-value="Projects"
                  onClick={() => nextPage(1)}
                >
                  Projects
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
