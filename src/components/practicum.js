import React from 'react';
import useAnimatedText from './useAnimatedText';

const Practicum = () => {
    const animatedText = useAnimatedText();
    const docs_url = "https://docs.google.com/document/d/1m2G4qZfyfuGhbhVnM7woTDWhkazuKVMlre5NXKd7csE/preview"

    return (
        <div className="col-8 about-page">
            {/* <iframe src={docs_url} width="100%" height="800px"></iframe> */}
            <div className="row">
                <div className="col-12">
                    <h2 className="animatedText" data-value="Overview of the Practicum Engagement" style={{ color: "rgb(171, 255, 251)" }}>
                        Overview of the Practicum Engagement
                    </h2>
                    <p style={{fontSize: "25px", color: "white", textAlign: "justify", textJustify: "inter-word"}}>
                        &nbsp;&nbsp;&nbsp;The approved learning path consisted of two modules: a mandatory module covering Design thinking, Project Management, and Workplace Management, and a specialization module offering diverse subjects such as Machine Learning and full stack web development. LinkedIn Learning and Metacrafters online courses were chosen as platforms for accessing these courses, providing valuable resources for acquiring new skills and knowledge. The engagement required a total of 329 hours to complete, enhancing understanding of emerging technologies and expanding expertise.
                    </p>
                </div>

                <div className="col-12">
                    <h2 className="animatedText" data-value="What I've developed during the practicum" style={{ color: "rgb(171, 255, 251)", marginTop: "40px"}}>
                        What I've developed during the practicum
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Practicum