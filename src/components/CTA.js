import React from 'react';
import './CTA.css'; // Assuming this contains your specific styling for the CTA component
import backgroundImage from '../Assets/cta-image.jpg'; // Adjust the path to your image if necessary

const CTA = () => {
    return (
        <div className="CTA-Container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="CTA-Overlay">
                <div className="CTA-Content">
                    <section><h1>Unifying passions.</h1></section>
                    <section className="Text2"><h2>Amplifying experiences.</h2></section>
                    <section className="Text3">
                        <button className="merged-button">Register!</button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CTA;
