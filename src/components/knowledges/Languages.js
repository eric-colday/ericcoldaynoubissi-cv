import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 0.8},
            {id: 2, value: "Html", xp: 1.7},
            {id: 3, value: "Css", xp: 1.7},
            {id: 4, value: "Php", xp: 0.3},
        ],
        frameworks: [
            {id: 1, value: "React", xp: 0.6},
            {id: 2, value: "Sass", xp: 0.9},
            {id: 3, value: "Tailwind CSS", xp: 0.2},
            {id: 4, value: "Material UI", xp: 0.4},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks & Bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;