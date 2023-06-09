import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import useAnimatedText from "../useAnimatedText";

import metacraftersImg1 from "./images/metacrafters1.PNG";
import metacraftersImg2 from "./images/metacrafters2.PNG";
import metacraftersImg3 from "./images/metacrafters3.PNG";
import metacraftersImg4 from "./images/metacrafters4_whole.png";
import metacraftersImg5 from "./images/metacrafters5.PNG";
import metacraftersImg6 from "./images/metacrafters6.PNG";
import mernProject1 from "./images/mern.PNG";

import cert1 from "./certifications/cert1.jpg";
import cert2 from "./certifications/cert2.jpg";
import cert3 from "./certifications/cert3.jpg";
import cert4 from "./certifications/cert4.jpg";
import cert5 from "./certifications/cert5.jpg";
import cert6 from "./certifications/cert6.jpg";
import cert7 from "./certifications/cert7.jpg";
import cert8 from "./certifications/cert8.jpg";
import cert9 from "./certifications/cert9.jpg";
import cert10 from "./certifications/cert10.jpg";
import cert11 from "./certifications/cert11.jpg";
import cert12 from "./certifications/cert12.jpg";
import cert13 from "./certifications/cert13.jpg";
import cert14 from "./certifications/cert14.jpg";

const Practicum = () => {
  const animatedText = useAnimatedText();
  const docs_url =
    "https://docs.google.com/document/d/1m2G4qZfyfuGhbhVnM7woTDWhkazuKVMlre5NXKd7csE/preview";

  const certs = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
    cert10,
    cert11,
    cert12,
    cert13,
    cert14,
  ];

  return (
    <div className="col-8 about-page">
      <div className="row" style={{ marginTop: "15%" }}>
        <div className="col-12">
          <h2
            className="animatedText"
            data-value="Overview of the Practicum Engagement"
            style={{ color: "rgb(171, 255, 251)" }}
          >
            Overview of the Practicum Engagement
          </h2>
          <p
            style={{
              fontSize: "25px",
              color: "white",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            &nbsp;&nbsp;&nbsp;The approved learning path consisted of two
            modules: a mandatory module covering Design thinking, Project
            Management, and Workplace Management, and a specialization module
            offering diverse subjects such as Machine Learning and full stack
            web development. LinkedIn Learning and Metacrafters online courses
            were chosen as platforms for accessing these courses, providing
            valuable resources for acquiring new skills and knowledge. The
            engagement required a total of 329 hours to complete, enhancing
            understanding of emerging technologies and expanding expertise.
          </p>
        </div>

        <div className="col-12">
          <h2
            className="animatedText"
            data-value="What I've developed during the practicum"
            style={{
              color: "rgb(171, 255, 251)",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
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
                <p>
                  This project was made in accordance to METACRAFTERS' online
                  course requirements. This simple Solidity smart contract
                  exemplifies basic functions involving: Setting up state
                  variables, Reading state variables, Deploying smart contract,
                  and Interacting with smart contract
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
                <p>
                  This simple Solidity smart contract exemplifies basic
                  functions involving: Setting up state variables, Reading state
                  variables, Deploying smart contract, and Interacting with
                  smart contract
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
                <p>
                  The output consisted of writing a smart contract that would
                  define a new token, allow the minting and burning of this
                  token, and rudimentary interaction with the smart contract.
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
                <p>
                  This simple project exemplifies simple smart contract
                  interaction between locally deployed ethereum node, a wallet,
                  a front-end, and a deployed smart contract. Functionalities
                  include: Updating Storage Transaction, Deleting last
                  Transaction, Retrieving Smart Contract transaction history,
                  Initializing connection between smart contract and wallet
                  account, and Initialization of local ethereum network
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
                <p>
                  This project exemplifies: Creation of new Token ARGENTUM using
                  the ERC20 standard in a local hardhat network, Minting of
                  ARGENTUM token in provided address, Transfer of ARGENTUM token
                  to provided address, and Burning of ARGENTUM token The project
                  makes use of the ERC20 standard, utilizing the following:
                  balanceOf(), totalSupply), _mint(), _burn(), and
                  increaseAllowance()
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 projectContainer"
            style={{ marginBottom: "50px" }}
          >
            <div className="row">
              <div className="col-7">
                <img className="projectImage" src={metacraftersImg6}></img>
              </div>

              <div className="col-5 projectDesc">
                <h2>Degen Token</h2>
                <p>
                  This project is created in compliance with the Metacrafters
                  Building on AVAX course final assessment requirements. The
                  project demonstrates the following elements: Creation and
                  compilation of Smart Contract, Deployment of said Smart
                  Contract to the Fuji test network, Verification of Smart
                  Contract in Snowtrace, Minting, Transfer, Burning of a custom
                  token using the ERC20 standard, and Basic smart contract state
                  data manipulation
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 projectContainer"
            style={{ marginBottom: "50px" }}
          >
            <div className="row">
              <div className="col-7">
                <img className="projectImage" src={mernProject1}></img>
              </div>

              <div className="col-5 projectDesc">
                <h2>TODO web app</h2>
                <p>
                  This project was made to practice and implement lessons
                  learned from my MERN specialization modules. In this project I
                  learned how to setup server routes, middleware, develop
                  front-end, setup API, setup BSON schema and setup a MongoDB
                  server
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <h2
            className="animatedText"
            data-value="Certifications"
            style={{
              color: "rgb(171, 255, 251)",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            Certifications
          </h2>
          <div className="certsContainer">
            <Slide>
              {certs.map((image) => {
                return (
                  <div className="each-slide-effect">
                    <div>
                      <img src={image}></img>
                    </div>
                  </div>
                );
              })}
            </Slide>
            <div style={{ height: "20px" }}></div>
          </div>
        </div>

        <div className="col-12 mt-5">
          <h2
            className="animatedText"
            data-value="Synthesis of the Practicum Engagement"
            style={{ color: "rgb(171, 255, 251)" }}
          >
            Synthesis of the Practicum Engagement
          </h2>
          <p
            style={{
              fontSize: "25px",
              color: "white",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            &nbsp;&nbsp;&nbsp;My learning path engagement consisted of a diverse
            range of courses covering a wide spectrum of topics. These courses
            spanned from Machine Learning, which delves into the study of
            algorithms and models that enable computers to learn and make
            predictions, to Web development, which focuses on designing and
            building interactive websites and web applications. Additionally, I
            also explored courses related to the Decentralized web, also known
            as Web 3, which encompasses technologies and concepts that aim to
            decentralize control and resources. In the sections below, I will
            detail the strongest and most notable lessons I have acquired during
            this engagement.
          </p>
        </div>

        <div className="col-12 mt-5">
          <h2
            className="animatedText"
            data-value="Web 3 and Smart Contracts"
            style={{ color: "rgb(171, 255, 251)" }}
          >
            Web 3 and Smart Contracts
          </h2>
          <p
            style={{
              fontSize: "25px",
              color: "white",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            &nbsp;&nbsp;&nbsp;I learned a great deal about smart contracts and
            the decentralized web in my Metacrafters online courses,
            specifically about the Ethereum and Avalanche blockchain. Ethereum
            is a decentralized network of connected nodes that validate and
            record transactions using smart contracts. It enables the creation
            and execution of decentralized applications (DApps) and has gained
            significant popularity in the blockchain space. Avalanche, on the
            other hand, is a newer blockchain platform that aims to provide
            scalability, speed, and efficiency for decentralized applications
            and financial systems. It utilizes a consensus protocol called
            Avalanche consensus, which allows for quick finality and low
            transaction fees. In my Metacrafters online courses, I gained
            insights into the fundamental concepts underlying smart contracts
            and how they operate within blockchain networks. I learned about the
            Ethereum Virtual Machine (EVM), which executes smart contracts on
            the Ethereum blockchain, and the Solidity programming language
            commonly used to write smart contracts. Naturally, dealing with
            these decentralized networks / blockchain, I would also learn about
            crypto wallets. These are applications that would contain unique
            addresses and allow the secure storage of cryptocurrencies, such as
            Ethereum (ETH) and other digital assets. Crypto wallets play a
            crucial role in the decentralized ecosystem by providing a secure
            and user-friendly interface for managing and interacting with
            blockchain-based assets.
          </p>
        </div>

        <div className="col-12 mt-5">
          <h2
            className="animatedText"
            data-value="Neural Networks"
            style={{ color: "rgb(171, 255, 251)" }}
          >
            Neural Networks
          </h2>
          <p
            style={{
              fontSize: "25px",
              color: "white",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            &nbsp;&nbsp;&nbsp;In my learnings, I have found that to facilitate
            neural networks at the most basic level is by employing nodes, also
            called as perceptrons. These nodes are the fundamental building
            blocks of a neural network and are inspired by the biological
            neurons found in the human brain. <br />
            <br />
            &nbsp;&nbsp;&nbsp; From what I’ve learned, there are three types of
            layers in an artificial neural network, the input layer, the output
            layer, and the hidden layers in between. The input layer that serves
            as the representation of the object to be analyzed by the neural
            network depending on the use case. The output layer, which contains
            all the nodes that determine the output of the neural network, in a
            classification type use case, these would represent all the
            different possible values that a neural network could classify the
            input as. Finally, the hidden layers, which gives the neural network
            the ability to learn. <br />
            <br />
            &nbsp;&nbsp;&nbsp; Each node, or perceptron, receives input signals
            from the previous layer or directly from the input data. These input
            signals are multiplied by weights, along a given bias. The weighted
            inputs are then summed together, however, to normalize this sum
            between zero and one. This is accomplished by the activation
            function which would constrain the output of values. The nodes
            between the layers are linked by a connection, every connection has
            an internal weight which is adjusted for each iteration in the
            training process. This enables the learning part of the neural
            network. <br />
            <br />
            &nbsp;&nbsp;&nbsp; The neural network is trained by comparing its
            outputs in the training process with actual data values from the
            training sets. It learns by adjusting the weights of its connections
            depending on the error value returned by its cost function. The cost
            function of a neural network is a measure of how well the network's
            predictions align with the true values in the training data. It
            quantifies the overall error or discrepancy between the predicted
            outputs and the actual outputs. The goal of training the neural
            network is to minimize this cost function. During the training
            process, the neural network iteratively updates the weights of its
            connections using optimization algorithms such as gradient descent.
            The gradients of the cost function with respect to the network's
            weights are computed, indicating the direction in which the weights
            should be adjusted to reduce the cost. By repeatedly feeding the
            training data through the network, comparing the predicted outputs
            with the actual outputs, and updating the weights based on the
            gradients, the network gradually improves its performance and
            reduces the error. This process is known as backpropagation, as the
            gradients are computed in a backward pass through the network.
          </p>
        </div>

        <div className="col-12 mt-5">
          <h2
            className="animatedText"
            data-value="The MERN Stack"
            style={{ color: "rgb(171, 255, 251)" }}
          >
            The MERN Stack
          </h2>
          <p
            style={{
              fontSize: "25px",
              color: "white",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            &nbsp;&nbsp;&nbsp;My learnings also include a dive into the MERN
            stack, which is a popular web development technology stack used for
            building full-stack web applications. MERN stands for MongoDB,
            Express.js, React.js, and Node.js, which are the core technologies
            used in this stack. <br /> <br />
            &nbsp;&nbsp;&nbsp;React is a front-end Javascript library that
            allows the development of user interfaces. In React, the Virtual DOM
            (Document Object Model) is a virtual representation of the actual
            DOM. It is a concept and technique used by React to optimize the
            rendering process and improve performance. When there are updates to
            the state or props of a component, React compares the new Virtual
            DOM with the previous one. It identifies the differences and
            calculates the minimum number of changes needed to update the real
            DOM efficiently. <br /> <br />
            &nbsp;&nbsp;&nbsp; Node.js, and Express.js built on top of it,
            provides the server side functionalities that a web application
            needs for its operations. These include handling HTTP requests and
            responses, routing, data storage and retrieval, and other
            server-side operations. <br /> <br />
            &nbsp;&nbsp;&nbsp; Finally, MongoDB, which is a document database
            used to build highly available and scalable internet applications.
            Unlike relational databases, MongoDB stores data in flexible,
            JSON-like documents called BSON (Binary JSON), which allows for
            dynamic and schema-less data modeling. This flexibility enables
            developers to easily adapt the database structure as their
            application evolves.
          </p>
        </div>

        <div className="col-12">
          <h2
            className="animatedText"
            data-value="Final Report Document"
            style={{
              color: "rgb(171, 255, 251)",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            Final Report Document
          </h2>
          <iframe
            className="finalReport"
            src={docs_url}
            width="100%"
            height="800px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Practicum;
