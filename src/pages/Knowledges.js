import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import OthersSkills from '../components/knowledges/OthersSkills';
import Hobbies from '../components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OthersSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;