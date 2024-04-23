import './ForBusiness.css';
import fansBackground from '../Assets/attendee-image.webp'; // Adjust with actual path

function AudienceComponent() {
    return (
        <div className="Audience-Container">
            <div className="Audience-Content">
                <h1>For Fans</h1>
                <p className="Audience-Title">Lorem ipsum dolor sit amet</p>
                <p className="Audience-Text">Lorem ipsum dolor sit amet, ad mortem inimicus, mars me adjiuat, pugna non perfecta est!</p>
            </div>
            <button className="Audience-Button">
                Learn More
            </button>
            <img src={fansBackground} alt="Event" className="Audience-Image" />
        </div>
    );
};

export default AudienceComponent;
