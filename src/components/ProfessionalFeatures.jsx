import React, { useState } from "react";
import "./ProfessionalFeatures.css";
import featurefirsticon from "../Assets/features-first.png";
import image1 from "../Assets/Professionalfeature1.jpg";
import image2 from "../Assets/Professionalfeature2.jpg";
import image3 from "../Assets/Professionalfeature3.jpg";
import image4 from "../Assets/Professionalfeature4.jpg";
import image5 from "../Assets/Professionalfeature5.jpg";
import image6 from "../Assets/Professionalfeature6.jpg";
import image7 from "../Assets/Professionalfeature7.jpg";
import image8 from "../Assets/Professionalfeature8.jpg";
import SignupFormModal from "./SignupFormModal";
import { useNavigate } from "react-router-dom";

const ProfessionalFeatures = () => {
  const [showSignup, setShowSignup] = useState(false);
  const Navigate = useNavigate()

  const ProfessionalFeatures = [
    {
      title: " Event & Community Creation",
      para: (
        <>
          <ul>
            <li>Architect and curate your events and communities with ease.</li>
            <li>
              Host physical, virtual, or VR events and communities with just a
              link.
            </li>
            <li>Start ticket sales and welcome new members quickly.</li>
            <li>
              Ensure a seamless attendee experience from beginning to end.
            </li>
          </ul>
        </>
      ),
      image: image1,
    },
    {
      title: " Selling Tickets and Managing Payouts",
      para: (
        <>
          <ul>
            <li>
              Flexible ticketing solutions from subscriptions to reserved
              seating.
            </li>
            <li>Real-time ticket adjustments and color-coded tracking.</li>
            <li>
              Sell add-ons like merchandise and refreshments alongside tickets.
            </li>
            <li>
              Personalize invites and optimize sales strategies dynamically.
            </li>
          </ul>
        </>
      ),
      image: image2,
    },
    {
      title: "Streamlined Management, Smart Logistics",
      para: (
        <>
          <ul>
            <li>
              Instant digital ticket delivery and real-time attendee updates.
            </li>
            <li>Efficient handling of returns, refunds, and inventory.</li>
            <li>Utilize AI for quick adjustments and information retrieval.</li>
            <li>
              Make event logistics smooth and focus on creating memorable
              experiences.
            </li>
          </ul>
        </>
      ),
      image: image3,
    },
    {
      title: "Effortless Promotion and Enhanced Connections",
      para: (
        <>
          <ul>
            <li>
              Use powerful tools to boost event visibility through engaging
              content.
            </li>
            <li>Collaborate with artists and venues for wider reach.</li>
            <li>
              Link seamlessly to any ticketing service or social platform.
            </li>
            <li>
              Engage directly with attendees via real-time messaging and
              exclusive updates.
            </li>
          </ul>
        </>
      ),
      image: image4,
    },
    {
      title: "Advanced IT and Tailored Security",
      para: (
        <>
          <ul>
            <li>
              Customizable QR scanners and API integrations for seamless
              operations.
            </li>
            <li>
              Advanced affiliate link tracking and performance monitoring.
            </li>
            <li>
              Ensure high security and customization to meet unique event needs.
            </li>
          </ul>
        </>
      ),
      image: image5,
    },
    {
      title: "Financial Management",
      para: (
        <>
          <ul>
            <li>
              Simplify financial oversight with connected accounts and precise
              refund capabilities.
            </li>
            <li>
              Dynamic pricing for optimized profit margins and strategic
              financial reporting.
            </li>
            <li>Quick and directed payouts to chosen accounts.</li>
          </ul>
        </>
      ),
      image: image6,
    },
    {
      title: "Make Informed Decisions",
      para: (
        <>
          <ul>
            <li>
              Deep dive into analytics for strategic insights into demographics
              and purchasing behaviors.
            </li>
            <li>
              Monitor sales trends and financial metrics to prepare for future
              events.
            </li>
            <li>
              Utilize custom reports to enhance event planning and execution.
            </li>
          </ul>
        </>
      ),
      image: image7,
    },
    {
      title: "Other Advanced Capabilities",
      para: (
        <>
          <ul>
            <li>
              Implement virtual queues to enhance entry logistics and safety.
            </li>
            <li>
              Manage smooth financial transactions and sponsor engagements
              effectively.
            </li>
          </ul>
        </>
      ),
      image: image8,
    },
  ];
  return (
    <div className="Professional-features-container">
      <div className="Professional-features-header">
        <p>
          {" "}
          Design exceptional experiences and cultivate your own thriving
          community, equipped with all the tools and insights needed for
          success.
        </p>
        <h1>How it works?</h1>
        <div>
          <div id="first-line"></div>
          <img id="iconimg" src={featurefirsticon} alt="" />
        </div>
      </div>
      {ProfessionalFeatures.map((feature, index) => (
        <div key={index} className="Professional-features">
          <div className="Professional-features-text">
            <h1>{feature.title}</h1>
            <p>{feature.para}</p>
          </div>

          <div className="Professional-features-img">
            <img src={feature.image} alt="" />
          </div>
          <div className="Professional-features-arrow">
            <div className="Professional-features-line"></div>
            <img src={featurefirsticon} alt="" />
          </div>
          {ProfessionalFeatures.length === index + 1 && (
            <button
              className="register-button"
              onClick={() => setShowSignup(!showSignup)}
            >
              Register
            </button>
          )}
        </div>
      ))}
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
      <div className="Professional-features-faq">
        <h1 className="Professional-FAQ-Heading">
          Questions? We're glad you asked.
        </h1>
        <button className="Faq-btn" onClick={() => Navigate("/faq")}>
          FAQ's
        </button>
      </div>
    </div>
  );
};

export default ProfessionalFeatures;
