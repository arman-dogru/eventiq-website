import React from "react";
import "./MemoriesComponent.css";
import eventImage from "../Assets/about-image.jpg"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

const MemoriesComponent = () => {
  return (
    <div className="Memories-Container">
      <div className="Memories-Content">
        <h1> Crafting tales.</h1>
        <p className="Memories-Title">Uniting trails.</p>
      </div>
      <div className="Memories-Second">
        <section className="Impromtu-Text">
          <div className="Memories-Image">
            <img src={eventImage} alt="Event" className="Memories-Image-img" />
          </div>
          <div className="Memories-Text">
            <p>
              Envtiq is a video-based events and community discovery platform
              where event creators and community creators find their space to
              thrive by attracting fans and members. We help in crafting
              compelling experiences at events and power communities. Seamlessly
              tap into events or communities based on interest. Our mission is to
              bridge the gap between the physical and virtual while cultivating
              unforgettable encounters.
            </p>
            <Link to="/team">
              {" "}
              <button className="glow-on-hover" type="button">Learn More</button>
            </Link>
          </div>
        </section>

      </div>{" "}

    </div>
  );
};

export default MemoriesComponent;
