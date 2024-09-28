// src/components/References.js

import React from 'react';
import './References.css'; // Import CSS for styling

const References = () => {
    return (
        <div className="references-container">
            <h1>References</h1>
            <ol className="references-list"> {/* Ordered list for numbering */}
                <li>
                    <strong>1.</strong> Hazra, R., and Y. Byun. "Face Detection for the Visually Impaired Using Google Glass: A User Study." *IEEE International Conference on Consumer Electronics (ICCE)*, 2018.
                </li>
                <li>
                    <strong>2.</strong> Khalil, R., and S. Khan. "Real-Time Face Recognition for Visually Impaired Individuals on Mobile Devices." *IEEE Access*, 2019.
                </li>
                <li>
                    <strong>3.</strong> Park, M., and T. Yoo. "Assistive Face Recognition Technology for the Blind." *Journal of Assistive Technologies*, 2020.
                </li>
                <li>
                    <strong>4.</strong> Liu, X., and D. Zhang. "Deep Learning-Based Face Recognition for Mobile Devices: A Review." *Journal of Computer Vision and Applications*, 2021.
                </li>
                <li>
                    <strong>5.</strong> Zhao, L., and P. Song. "Improving Mobile Face Recognition for Visually Impaired Users: Techniques and Challenges." *IEEE Transactions on Mobile Computing*, 2022.
                </li>
            </ol>
        </div>
    );
};

export default References;
