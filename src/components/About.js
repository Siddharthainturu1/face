// src/components/About.js
import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
    return (
        <div className="about-container">
            <h2>About Models Used</h2>
            <p>
                In this project, we have utilized two primary models for face recognition:
            </p>
            <div className="model">
                <h3>1. FaceNet Model</h3>
                <img 
                    src="https://www.researchgate.net/publication/345983861/figure/fig3/AS:984303404060675@1611687627396/Block-diagram-of-FaceNet-architecture.png" 
                    alt="FaceNet Model" 
                    className="model-image" 
                />
                <p>
                    FaceNet is a deep learning model that maps faces to a Euclidean space where distances correspond to a measure of face similarity. 
                    It allows for high accuracy in face recognition tasks.
                </p>
            </div>
            <div className="model">
                <h3>2. Mobile FaceNet Model</h3>
                <img 
                    src="https://miro.medium.com/v2/resize:fit:1400/0*XK7QU_eaFJU9oxSS.png" 
                    alt="Mobile FaceNet Model" 
                    className="model-image" 
                />
                <p>
                    The Mobile FaceNet model is an optimized version of the FaceNet model designed for mobile devices. 
                    It ensures that the application remains efficient while performing real-time face recognition.
                </p>
            </div>
        </div>
    );
}

export default About;
