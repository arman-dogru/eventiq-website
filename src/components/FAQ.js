import React, { useState } from 'react';
import "./FAQ.css"
import SignupFormModal from './SignupFormModal';
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showSignup, setShowSignup] = useState(false)

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqsData = [
        {
            question: "When are you releasing?",
            answer: `Sign up for updates, and we'll notify you as soon as our platform is ready for beta testing. Stay tuned to be among the first to experience our innovative features. `,
        },
        {
            question: "What if I need only self-service features?",
            answer: "No problem! Once we go live, you'll have the flexibility to select the service tier that best fits your needs. Our self-service option will provide essential tools and information to create a great experience effortlessly. For larger events and venues, our detailed solutions tier offers extensive functionalities to meet all your demands. ",
        },
        {
            question: "Who is Evntiq for?",
            answer: `We are designed for anyone and everyone who wants to create a memorable event event or a meaningful community. From clubs, venues, artists, and restaurants to individual creators like yoga instructors and Pilates teachers—if you're looking to build a community or host an event, we are the go-to platform. `,
        },
        {
            question: "What is a community creator?",
            answer: 'A community creator on our platform is anyone who forms and nurtures a group based on shared interests or goals. Whether it’s a fan club, a local event circle, or a virtual workshop series, community creators provide the structure and ongoing engagement that bring people together. A creator can post content, monetize their fanbase and have an stay engaged with their fans.',
        },
        {
            question: "Why choose Evntiq? ",
            answer: "Choose us for our comprehensive, user-friendly platform that simplifies event and community engagement. Our robust features support everything from ticketing and promotions to insights and personal engagements, all designed to enhance your event's success and expand your community's reach.",
        },
        {
            question: "What's in it for the fans?",
            answer: `Fans can look forward to a dynamic and engaging experience with exclusive content, seamless ticket purchases, and the opportunity to connect with their favorite communities. For more details on fan benefits, [click here] to visit our fans page. `,
        },
        {
            question: "What do we currently offer?",
            answer: "We offer free promotion for your events or communities across our social media channels, a comprehensive guide to hosting successful events, and insights into creating and growing vibrant communities. Why do we do this? To help you succeed! Additionally, we provide ongoing resources and market updates—all for free. Want to be featured or simply get started with a free guide? Contact us at (email address) or sign up today!"
        }
        // Add more FAQs as needed
    ];

    return (
        <div className='FAQ-Container' id="faq-section">
            <h1 className='FAQ-Heading'>Questions? We're glad you asked.</h1>
            {faqsData.map((faq, index) => (
                <div className='FAQ-Full' key={index}>
                    <div
                        className="faq-question"
                        onClick={() => handleToggle(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span>{index + 1}. </span>
                        <span>{faq.question}</span>
                        <span id='DropDown-Arrow' className={`arrow ${activeIndex === index ? 'active' : ''}`}>&#9660;</span>
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">{faq.answer}</div>
                    )}
                    {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
                </div>
            ))}
        </div>
    );
};

export default FAQ;


// import React from 'react'
// import Faq from "react-faq-component";
// import "./FAQ.css"
// const FAQ = () => {
//     const data = {
//         title: "FAQ (How it works)",
//         rows: [
//             {
//                 question: "When are you releasing?",
//                 answer: `Sign up for updates (add link for sign up), and we'll notify you as soon as our 
//                 platform is ready for beta testing. Stay tuned to be among the first to 
//                 experience our innovative features. `,
//             },
//             {
//                 question: "What if I need only self-service features?",
//                 answer:"No problem! Once we go live, you'll have the flexibility to select the service tier that best fits your needs. Our self-service option will provide essential tools and information to create a great experience effortlessly. For larger events and venues, our detailed solutions tier offers extensive functionalities to meet all your demands. ",
//             },
//             {
//                 question: "Who is Evntiq for?",
//                answer: `We are designed for anyone and everyone who wants to create a memorable event event or a meaningful community. From clubs, venues, artists, and restaurants to individual creators like yoga instructors and Pilates teachers—if you're looking to build a community or host an event, we are the go-to platform. `,
//             },
//             {
//                  question: "What is a community creator?",
//                 answer: 'A community creator on our platform is anyone who forms and nurtures a group based on shared interests or goals. Whether it’s a fan club, a local event circle, or a virtual workshop series, community creators provide the structure and ongoing engagement that bring people together. A creator can post content, monetize their fanbase and have an stay engaged with their fans.',
//             },
//             {
//                  question: "Why choose Evntiq? ",
//                answert: `Choose us for our comprehensive, user-friendly platform that simplifies event and community engagement. Our robust features support everything from ticketing and promotions to insights and personal engagements, all designed to enhance your event's success and expand your community's reach.`,
//             },
//             {
//                  question: "What's in it for the fans?",
//                 answer: `Fans can look forward to a dynamic and engaging experience with exclusive content, seamless ticket purchases, and the opportunity to connect with their favorite communities. For more details on fan benefits, [click here](#) to visit our fans page. `,
//             },
//             {
//                  question: "What do we currently offer?",
//                 answer: "We offer free promotion for your events or communities across our social media channels, a comprehensive guide to hosting successful events, and insights into creating and growing vibrant communities. Why do we do this? To help you succeed! Additionally, we provide ongoing resources and market updates—all for free. Want to be featured or simply get started with a free guide? Contact us at (email address) or sign up today!"
//             }
//         ],
//     };

//     const styles = {
//         bgColor: 'black',
//         titleTextColor: "white",
//         rowTitleColor: "white",
//         rowContentColor: 'white',
//         arrowColor: "white",
//     };

//     const config = {
//         // animate: true,
//         // arrowIcon: "V",
//         // tabFocus: true
//     };
//     return (
//         <div>
//             <div className='Faq-Section'>
//                 <Faq
//                     data={data}
//                     styles={styles}
//                     config={config}

//                 />
//             </div>
//         </div>
//     );
// }

// export default FAQ