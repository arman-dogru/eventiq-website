import React from 'react';
import Typewriter from 'typewriter-effect';
import './CommunitiesComponent.css';

const CommunitiesComponent = () => {
    const eventiqFor = [
        'Fans',
        'Content Creators',
        'Influencers',
        'Event Promoters',
        'Events',
        'Event Organizers',
        'Venues',
        'Artists',
        'Affiliates',
        'Business Owners',
        'Communities',
        'Community Creators',
        'Event Managers'
        // Add more items as needed
    ];

    return (
        <div className="Communities-Container">
            <div className="Communities-Text">
                <span id='Communities-Heading'>Eventiq is for:</span><br />
                <span id='Communities-Writer'>
                    <Typewriter
                        options={{
                            strings: eventiqFor,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default CommunitiesComponent;
