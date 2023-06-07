import React from 'react';
import useAnimatedText from '../useAnimatedText';

import metacraftersImg1 from './images/metacrafters1.PNG';
import metacraftersImg2 from './images/metacrafters2.PNG';
import metacraftersImg3 from './images/metacrafters3.PNG';
import metacraftersImg4 from './images/metacrafters4_whole.png';
import metacraftersImg5 from './images/metacrafters5.PNG';
import metacraftersImg6 from './images/metacrafters6.PNG';
import mernProject1 from './images/mern.PNG';

const Practicum = () => {
    const animatedText = useAnimatedText();
    const docs_url = "https://docs.google.com/document/d/1m2G4qZfyfuGhbhVnM7woTDWhkazuKVMlre5NXKd7csE/preview"

    return (
        <div className="col-8 about-page">
            {/* <iframe src={docs_url} width="100%" height="800px"></iframe> */}
            <div className="row" style={{marginTop: "15%"}}>
                <div className="col-12">
                    <h2 className="animatedText" data-value="Overview of the Practicum Engagement" style={{ color: "rgb(171, 255, 251)" }}>
                        Overview of the Practicum Engagement
                    </h2>
                    <p style={{fontSize: "25px", color: "white", textAlign: "justify", textJustify: "inter-word"}}>
                        &nbsp;&nbsp;&nbsp;The approved learning path consisted of two modules: a mandatory module covering Design thinking, Project Management, and Workplace Management, and a specialization module offering diverse subjects such as Machine Learning and full stack web development. LinkedIn Learning and Metacrafters online courses were chosen as platforms for accessing these courses, providing valuable resources for acquiring new skills and knowledge. The engagement required a total of 329 hours to complete, enhancing understanding of emerging technologies and expanding expertise.
                    </p>
                </div>

                <div className="col-12">
                    <h2 className="animatedText" data-value="What I've developed during the practicum" style={{ color: "rgb(171, 255, 251)", marginTop: "40px", marginBottom: "40px"}}>
                        What I've developed during the practicum
                    </h2>
                </div>

                <div className="practicumProjects">

                    <div className="col-12 projectContainer">
                        <div className="row">

                            <div className="col-7">
                                <img className="projectImage" src={metacraftersImg1}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>Javascript project</h2>
                                <p>This project was made in accordance to METACRAFTERS' online course requirements. This simple Solidity smart contract exemplifies basic functions involving:
                                    Setting up state variables,
                                    Reading state variables,
                                    Deploying smart contract, and
                                    Interacting with smart contract
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 projectContainer">
                        <div className="row">
                            
                            <div className="col-7">
                                <img className="projectImage" src={metacraftersImg2}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>Basic solidity smart contract</h2>
                                <p>This simple Solidity smart contract exemplifies basic functions involving:
                                    Setting up state variables,
                                    Reading state variables,
                                    Deploying smart contract, and
                                    Interacting with smart contract
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 projectContainer">
                        <div className="row">
                            
                            <div className="col-7">
                                <img className="projectImage" src={metacraftersImg3}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>Basic solidity smart contract</h2>
                                <p>The output consisted of writing a smart contract that would define a new token, allow the minting and burning of this token, and rudimentary interaction with the smart contract.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 projectContainer">
                        <div className="row">
                            
                            <div className="col-7">
                                <img className="projectImage" src={metacraftersImg4}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>Smart contract with Front-end interaction</h2>
                                <p>This simple project exemplifies simple smart contract interaction between locally deployed ethereum node, a wallet, a front-end, and a deployed smart contract. Functionalities include:
Updating Storage Transaction,
Deleting last Transaction,
Retrieving Smart Contract transaction history,
Initializing connection between smart contract and wallet account, and
Initialization of local ethereum network

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 projectContainer">
                        <div className="row">
                            
                            <div className="col-7">
                                <img className="projectImage" src={metacraftersImg5}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>Solidity Smart contract deployment and Front-end</h2>
                                <p>This project exemplifies:
Creation of new Token ARGENTUM using the ERC20 standard in a local hardhat network,
Minting of ARGENTUM token in provided address,
Transfer of ARGENTUM token to provided address, and
Burning of ARGENTUM token
The project makes use of the ERC20 standard, utilizing the following:
balanceOf(),
totalSupply),
_mint(),
_burn(), and
increaseAllowance()

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 projectContainer" style={{marginBottom: "50px"}}>
                        <div className="row">
                            
                            <div className="col-7">
                                <img className="projectImage" src={metacraftersImg6}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>Degen Token</h2>
                                <p>This project is created in compliance with the Metacrafters Building on AVAX course final assessment requirements. The project demonstrates the following elements:
Creation and compilation of Smart Contract,
Deployment of said Smart Contract to the Fuji test network,
Verification of Smart Contract in Snowtrace,
Minting, Transfer, Burning of a custom token using the ERC20 standard, and
Basic smart contract state data manipulation

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 projectContainer" style={{marginBottom: "50px"}}>
                        <div className="row">
                            
                            <div className="col-7">
                                <img className="projectImage" src={mernProject1}></img>
                            </div>
                            
                            <div className="col-5 projectDesc">
                                <h2>TODO web app</h2>
                                <p>
                                    This project was made to practice and implement lessons learned from my MERN specialization modules. In this
                                    project I learned how to setup server routes, middleware, develop front-end, setup API, setup BSON schema and setup a MongoDB
                                    server
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Practicum