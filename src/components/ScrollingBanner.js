import {React,useState} from 'react';
import './ScrollingBanner.css';
import SignupFormModal from "./SignupFormModal";

const ScrollingBanner = () => {
    const [showSignup, setShowSignup] = useState(false)
    const text = "Join our beta · ";
    const repeatedText = text.repeat(100); // Repeat it a number of times to ensure continuous scrolling

    return (
        <div className="scrolling-banner-container" onClick={() => setShowSignup(!showSignup)}>
            <div className="scrolling-banner-text" >
                {repeatedText}
            </div>
            {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
        </div>
    );
};

export default ScrollingBanner;
