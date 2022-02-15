import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-music"></i>
                    <span>Musique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Dessin</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Voyage</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;