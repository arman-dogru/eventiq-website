import React from "react";
import "../components/StoryInfo.css";
const StoryInfo = () => {
  return (
    <div className="Story-Info-Container">
      {/* <h1>Who are we?</h1>
      <h1>What are we building?</h1>
      <h1>Why are we building it?</h1> */}
      <div className="Story-Info">
        <h3 className="Story-Info-Sub">FOUNDED IN</h3>
        <h3 className="Story-Info-SubPara">2024</h3>
      </div>
      <div className="Story-Info">
        <h3 className="Story-Info-Sub">MICROHUBS</h3>
        <h3 className="Story-Info-SubPara">
          Ottawa, Toronto, ON <br />
          Montreal, QC <br />
          San Francisco, CA
        </h3>
      </div>
      <div className="Story-Info">
        <h3 className="Story-Info-Subnote">Eventiq is crafted for</h3>
        <h3 className="Story-Info-SubDesc">
          The next generation of event-goers and creators. Our platform empowers
          community builders and event professionals to connect with audiences
          through immersive video-based experiences. We blend the excitement of
          live interactions with the reach of digital technology, creating a
          space where every encounter becomes memorable. Our mission: To
          seamlessly merge the tangible with the digital, fostering a vibrant
          community that thrives on connection and shared experiences.
        </h3>
      </div>
    </div>
  );
};

export default StoryInfo;
