import React from "react";
import Avatar1 from "../Assets/Avatar1.jpg";
import Avatar2 from "../Assets/Avatar2.jpg";
import Avatar3 from "../Assets/Avatar3.jpg";
import "../components/TheTeam.css";

const TheTeam = () => {
  return (
    <div className="TeamContainer">
      <h1 className="Team-Head">Meet Our Leadership Team</h1>
      <div className="leadership-team-container">
        <div className="leadership-member">
          <div className="leadership-member-image-card">
            <img
              className="leadership-member-image-card-img"
              src={Avatar1}
              alt="Can Say"
            />
          </div>
          <h3 className="leadership-member-name">Can Say</h3>
          <p className="leadership-member-title">Co-Founder & COO</p>
          <p className="leadership-member-experience">
            Hey there! I'm Can, studying business technology management at
            University of Ottawa.As a global citizen and a DJ, I bring a
            colorful personality and multilingual skills to Eventiq, shaped by
            my experiences living in four different countries and speaking five
            languages. My academic background in Business Technology Management
            sparked a deep fascination with how communities form and evolve. At
            Eventiq, I am committed to developing robust ERP solutions for event
            organizers and fostering unique communities that cater to our users'
            diverse interests.
          </p>
          <a
            className="leadership-member-linkedin"
            href="https://linkedin.com/in/can-say-58869b168"
          >
            LinkedIn
          </a>
        </div>
        <div className="leadership-member">
          <div className="leadership-member-image-card">
            <img
              className="leadership-member-image-card-img"
              src={Avatar2}
              alt="Kanwar Sidhu"
            />
          </div>
          <h3 className="leadership-member-name">Kanwar Sidhu</h3>
          <p className="leadership-member-title">Co-founder & CEO</p>
          <p className="leadership-member-experience">
            Hello! I'm Kanwar, an international B.Com Accounting student at the
            University of Ottawa. I have always been intrigued by the concept of
            communities and the power of connectivity, especially among the
            younger generation. My team and I aim to enhance these connections,
            helping us build forward together with innovation and inclusivity at
            the forefront to bridge the gaps found in traditional methods. Our
            product is designed to empower creators with tools that facilitates
            their creativity, innovation and ability. Fans and members not only
            cultivate an elevated experience but also consume interests that
            truly matters.
          </p>
          <a
            className="leadership-member-linkedin"
            href="https://linkedin.com/in/kanwar-pal-singh-sidhu-4380b31b4"
          >
            LinkedIn
          </a>
        </div>
        <div className="leadership-member">
          <div className="leadership-member-image-card">
            <img
              className="leadership-member-image-card-img"
              src={Avatar3}
              alt="Arman Doğru"
            />
          </div>
          <h3 className="leadership-member-name">Arman Doğru</h3>
          <p className="leadership-member-title">Co-Founder & CTO</p>
          <p className="leadership-member-experience">
            Hello world! I'm Arman, currently an AI development graduate at
            University of Ottawa.As an international student and an Actor, I
            value precision and consistency. Growing up in a multicultural
            environment, having studied in multiple countries throughout my
            life, expanded my horizons. I believe in the power of making
            informed decisions and utilizing modern tools. At Eventiq, I will be
            focusing on the development of the server-side algorithms and AI
            models for allowing our users to have a personalized and seamless
            experience.
          </p>
          <a
            className="leadership-member-linkedin"
            href="https://www.linkedin.com/in/arman-dogru/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      {/* 
      <div className='Team-Content'>
        <div className='Member-Details'>
          <section className='Member-Avatar'>
            <img id='avatar-settings' src={AvatarTesting} alt='avatar' />
          </section>
          <section className='Member-Links'>
            <h1>Name,</h1>
            <h1>Twitter, LinkedIn</h1>
          </section>

        </div>
        <div className='Member-Details'>
          <section className='Member-Avatar'>
            <img id='avatar-settings' src={AvatarTesting} alt='avatar' />
          </section>
          <section className='Member-Links'>
            <h1>Name,</h1>
            <h1>Intro,</h1>
            <h1>Twitter, LinkedIn</h1>
          </section>
        </div>
        <div className='Member-Details'>
          <section className='Member-Avatar'>
            <img id='avatar-settings' src={AvatarTesting} alt='avatar' />
          </section>
          <section className='Member-Links'>
            <h1>Name,</h1>
            <h1>Intro,</h1>
            <h1>Twitter, LinkedIn</h1>
          </section>
        </div>
      </div> */}
    </div>
  );
};

export default TheTeam;
