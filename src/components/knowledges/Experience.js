import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Consultant Web/Mobile - FreeLance</h4>
                <h4>2021 jusqu'à présent</h4>
                <p>
                    Création de l'interface utilisateur d'un site web ou d'une application web avec HTML5/CSS3 et ReactJS.
                    Gestion backend avec mongoDB, Express, NodeJS et PHP
                </p>
            </div>
            <div className="exp-2">
                <h4>Consultant Webmarketing - FreeLance</h4>
                <h4>2017 jusqu'à présent</h4>
                <p>
                    Création et refonte de sites Internet WordPress,
                    Mission SEO (Audit, recommandations et solutions SEO), Traffic management.
                    Publicité en ligne (création et gestion des comptes Google Ads, Facebook Ads et Bing Ads)
                    Gestion des réseaux sociaux
                </p>
            </div>
        </div>
    );
};

export default Experience;