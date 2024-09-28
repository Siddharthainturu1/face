// src/components/Quiz.js

import React, { useState } from 'react';
import './Quiz.css'; // Import CSS for styling

const Quiz = () => {
    const questions = [
        {
            question: "What is the main purpose of the Mobile: Face Recognition project?",
            options: ["To entertain users", "To empower visually impaired individuals", "To track people's movements", "To recognize pets"],
            answer: "To empower visually impaired individuals"
        },
        {
            question: "Which models are utilized for face recognition in the project?",
            options: ["MobileNet", "FaceNet and Mobile FaceNet", "VGG16", "ResNet"],
            answer: "FaceNet and Mobile FaceNet"
        },
        {
            question: "What technology is used for real-time face recognition?",
            options: ["TensorFlow Lite", "OpenCV", "Keras", "PyTorch"],
            answer: "TensorFlow Lite"
        },
        {
            question: "How does the application provide feedback to users?",
            options: ["Vibrations", "Text notifications", "Auditory feedback", "Visual signals"],
            answer: "Auditory feedback"
        },
        {
            question: "What additional capabilities are planned for future enhancements?",
            options: ["Voice recognition", "Multiple face recognition", "Image editing", "Game development"],
            answer: "Multiple face recognition"
        }
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setSubmitted(true);
        }
    };

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            {submitted ? (
                <div className="result">
                    <h2>Your Score: {score}/{questions.length}</h2>
                </div>
            ) : (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswer(option)} className="option">
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;
