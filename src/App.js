// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import References from './components/References'; // Import the References component
import Conclusion from './components/Conclusion'; // Import the Conclusion component
import Quiz from './components/Quiz'; // Import the Quiz component
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/references">References</Link> {/* Updated link for References */}
                        </li>
                        <li>
                            <Link to="/conclusion">Conclusion</Link> {/* Link to the Conclusion page */}
                        </li>
                        <li>
                            <Link to="/quiz">Quiz</Link> {/* Link to the Quiz page */}
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/references" element={<References />} /> {/* Add References route */}
                    <Route path="/conclusion" element={<Conclusion />} /> {/* Add Conclusion route */}
                    <Route path="/quiz" element={<Quiz />} /> {/* Add Quiz route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>

            <footer>
                <p>&copy; {new Date().getFullYear()} Siddhartha Inturu . All Rights Reserved.</p>
            </footer>
        </Router>
    );
};

export default App;
