import React from 'react';
import './ForBusiness.css';
import businessBackground from '../Assets/Business.jpeg'; // Adjust with actual path

function AudienceComponent() {
    return (
        <div className="Audience-Container">
            <img src={businessBackground} alt="Event" className="Audience-Image" />
            <button className="Audience-Button">
                Learn More
            </button>
            <div className="Audience-Content">
                <h1>For Business</h1>
                <p className="Audience-Title">Lorem ipsum dolor sit amet</p>
                <p className="Audience-Text">Lorem ipsum dolor sit amet, ad mortem inimicus, mars me adjiuat, pugna non perfecta est!</p>
            </div>
        </div>
    );
};

export default AudienceComponent;
