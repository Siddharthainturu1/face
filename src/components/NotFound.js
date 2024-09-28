// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>Welcome to the App!</h1>
            <p>Explore the options in the header to navigate the site:</p>
            <ul className="header-options">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About the Project</Link>
                </li>
                <li>
                    <Link to="/references">References</Link>
                </li>
                <li>
                    <Link to="/conclusion">Conclusion</Link>
                </li>
                <li>
                    <Link to="/quiz">Take a Quiz</Link>
                </li>
            </ul>
        </div>
    );
};

export default NotFound;
