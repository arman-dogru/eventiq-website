import React from "react";
import GlowButton from "./GlowButton"; // Adjust the path to where your GlowButton component is located
import "./ClassicsBusiness.css";
import Test from "../Assets/test123.jpg"; // Adjust the path to your image if necessary
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
const ClassicsBusiness = () => {
  const eventiqFor = [
    "Design Experiences.",
    "Shape Moments.",
    "Craft the Unforgettable.",
    "Stay Connected.",
    // Add more items as needed
  ];
  return (
    <div className="Classic-Business-Container">
      <div className="Classics-Content">
        <section className="Bus-Img-Section">
          <img src={Test} id="Bus-Img" alt="Business" />
          <h1>For business</h1>
        </section>
        <section className="Bus-Text-Section">
          <h2>
            <Typewriter
              options={{
                strings: eventiqFor,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Give form to your immagination. Orchestrate events that captivate,
            communities that resonate, and experiences that elevate. From local
            pilate classes to Coachella, we have got you covered! :)
          </p>
          <Link to="/professional" style={{ textDecoration: 'none' }}>
            <GlowButton buttonText="Explore" />
          </Link>
          {/* Use the GlowButton component here */}
        </section>
      </div>
    </div>
  );
};

export default ClassicsBusiness;
