import './HomeBanner.css'
import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import BannerVid from "../Assets/heading-vid.mp4";
import SignupFormModal from "./SignupFormModal";
import GlowButton from './GlowButton';
// import scrollanimation from '../Assets/scroll-animation.gif'

const HomeBanner = () => {
  const [showSignup, setShowSignup] = useState(false);
    return (
      <div className="Homebanner-container">
        <video className="homebanner-video" autoPlay muted loop>
          <source src={BannerVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="Homebanner-text">
          <h1>Unifying passions.</h1>
          <h1>Amplifying experiences. </h1>
          <Link to="#" style={{ textDecoration: 'none' }}>
              {" "}
              <GlowButton buttonText="Register" onClick={() => setShowSignup(!showSignup)}/>
            </Link>
          {/* <img className='homebanner-scroll' src={scrollanimation} alt='banner'/> */}
        </div>
         {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
      </div>
    );
}

export default HomeBanner;
