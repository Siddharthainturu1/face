// src/components/Home.js

import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
    return (
        <div className="home-container">
            <h1>Mobile: Face Recognition - Empowering the Visually Impaired</h1>

            <section>
                <h2>Introduction</h2>
                <img src="https://t3.ftcdn.net/jpg/03/21/14/36/360_F_321143677_YZ70heoL8WPzryoT7rp55qGvELenaymy.jpg" alt="Facial Recognition" className="section-image" />
                <p>
                    I’m currently working on a project designed to empower the visually impaired with real-time facial recognition capabilities through mobile technology. This project, titled Mobile: Face Recognition - Blind Can Know Who Is Approaching, harnesses the power of AI and computer vision to identify individuals and notify the user through auditory feedback. By doing this, I aim to improve both the safety and social interactions of visually impaired individuals, providing them with greater independence.
                </p>
            </section>

            <section>
                <h2>Problem & Solution</h2>
                <img src="https://assileye.com/blog/wp-content/uploads/2021/04/techfortheblind-lg.jpg" alt="Visually Impaired User" className="section-image" />
                <p>
                    In a world designed primarily for the sighted, visually impaired individuals often face challenges identifying who is around them. The idea of this project was born from the need for a mobile solution that can provide real-time facial recognition and identification using just a smartphone. The mobile application will:
                </p>
                <ul>
                    <li>Capture images using the phone's camera.</li>
                    <li>Compare the image to a pre-registered database of faces.</li>
                    <li>Deliver auditory feedback to notify the user of who is approaching.</li>
                </ul>
            </section>

            <section>
                <h2>Image Handling in Android</h2>
                <p>
                    Discover essential techniques for handling images in Android, including:
                </p>
                <ul>
                    <li>Choosing Images from Gallery in Android</li>
                    <li>Capturing Images using Camera in Android</li>
                </ul>
                <p>
                    These skills are crucial for passing images to face recognition models within your Android application.
                </p>
                <h3>Utilize Two Distinct Models for Face Recognition in Android:</h3>
                <ul>
                    <li>FaceNet Model</li>
                    <li>Mobile FaceNet Model</li>
                </ul>
            </section>

            <section>
                <h2>Real-time Face Recognition</h2>
                <p>
                    Advance to real-time face recognition Android applications, registering and recognizing faces using live camera footage frames. Learn to:
                </p>
                <ul>
                    <li>Display live camera footage in Android (Java/Kotlin)</li>
                    <li>Process frames one by one with face recognition models in Android (Java/Kotlin)</li>
                    <li>Achieve real-time recognition and registration in Android (Java/Kotlin)</li>
                </ul>
            </section>

            <section>
                <h2>TensorFlow Lite Integration</h2>
                <p>
                    Master the integration of face recognition models in Android (Java/Kotlin) using TensorFlow Lite. Explore why TensorFlow Lite is the ideal format for implementing machine learning models in mobile applications.
                </p>
            </section>

            <section>
                <h2>Face Detection</h2>
                <p>
                    In face recognition applications, before recognizing faces, we need to detect faces from images or frames of live camera footage. For detecting those faces, we are going to use the face detection model of the ML Kit library in Android (Java/Kotlin). In this course, you will also learn to perform face detection in Android (Java/Kotlin) with both images and live camera footage.
                </p>
            </section>

            <section>
                <h2>Core Components</h2>
                <img src="https://fastchart.com/wp-content/uploads/2020/07/Fast-Chart_Mobile-Technology-in-Healthcare-1024x536.jpeg" alt="Mobile Technology" className="section-image" />
                <p>
                    <strong>Face Registration:</strong> Users can register faces either through image scans or live camera footage, storing them in a secure, private database.<br />
                    <strong>Face Recognition:</strong> The app identifies registered faces in real time using the camera, providing instant feedback with a spoken name of the recognized individual.
                </p>
                <p>
                    By employing deep learning models like FaceNet and integrating TensorFlow Lite for mobile devices, the application is optimized for real-time processing and high accuracy.
                </p>
            </section>

            <section>
                <h2>The Tech Journey</h2>
                <p>
                    This project has been an exploration of cutting-edge facial recognition systems, mobile sensors, and the challenges of real-time processing on mobile platforms. Along the way, I’ve delved deep into:
                </p>
                <ul>
                    <li><strong>Image Processing:</strong> Leveraging Android’s camera and gallery systems for image capture.</li>
                    <li><strong>Sensors:</strong> Exploring options like depth and infrared sensors to improve face detection accuracy.</li>
                    <li><strong>Machine Learning:</strong> Training models with convolutional neural networks (CNNs) to improve recognition accuracy, even under varying lighting conditions.</li>
                </ul>
            </section>

            <section>
                <h2>Challenges Along the Way</h2>
                <p>
                    Building a facial recognition app for mobile devices is no easy feat. The road has been littered with challenges like:
                </p>
                <ul>
                    <li>Varying lighting conditions and complex backgrounds.</li>
                    <li>Ensuring real-time processing without draining the mobile device’s resources.</li>
                    <li>Integrating auditory feedback in environments with high noise levels.</li>
                </ul>
                <p>
                    But like any good project, these challenges have led to improvements and innovations.
                </p>
            </section>

            <section>
                <h2>A Glimpse into the Future</h2>
                <p>
                    While the current iteration focuses on facial recognition, future enhancements could involve:
                </p>
                <ul>
                    <li>Expanding recognition capabilities to multiple faces.</li>
                    <li>Improving processing speed and model accuracy.</li>
                    <li>Integrating with wearable devices for a more immersive experience.</li>
                </ul>
            </section>

            <section>
                <h2>What Drives Me</h2>
                <p>
                    This project is more than just an engineering feat. It’s about creating impact—about making everyday life just a bit easier for those who face challenges most of us rarely consider. It’s the pursuit of innovation with a purpose.
                </p>
            </section>
        </div>
    );
}

export default Home;
