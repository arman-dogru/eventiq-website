import React from "react";
import "./LineSteps.css";

const LineSteps = () => {
  const professionalFeatures = [
    {
      title: "Crafting a Compelling Professional Profile: Showcasing Your Brand's Mission and Offerings",
      para: "Set up a professional profile to showcase your brand or entity, helping potential attendees and partners understand your mission and offerings.",
    },
    {
      title: "Creating a Community Hub: Engage, Update, and Cultivate Loyalty",
      para: "Build a dedicated space for your followers and supporters where you can engage directly, share updates, and foster a loyal community around your events.",
    },
    {
      title: "Effortless Event Management: Intuitive Tools for Seamless Ticketing and Sales",
      para: "Use intuitive tools to create events, set up ticketing, and manage sales, providing a seamless experience for both you and your attendees.",
    },
    {
      title: "Streamline Event Management: Maximizing Efficiency with Comprehensive Organization Tools",
      para: "Keep track of event logistics, attendee information, and day-to-day management tasks with comprehensive event organization features.",
    },
    {
      title: "Promote Your Events / Find Affiliates",
      para: "Market your events effectively through integrated promotional tools and connect with affiliates to extend your reach and boost ticket sales.",
    },

    {
      title: "Maximizing Event Marketing",
      para: "Develop valuable relationships with partners and sponsors to enhance your event's profile, financial stability, and market presence.",
    },
    {
      title: "Maximizing Event Financial Management",
      para: "Control your event's financial health with detailed tracking of revenue, expenditures, and financial reporting to make informed decisions.",
    },
    {
      title: "Unlocking Event Success",
      para: "Access advanced analytics to understand attendee behavior, event performance, and market trends, helping you tailor future events for success.",
    },
    {
      title: "Empowering Connectivity",
      para: "Strengthen relationships with your audience and collaborators through interactive tools, ensuring ongoing engagement and building a robust network.",
    },
    {
      title: "Harnessing Data and Community Input for Sustainable Growth",
      para: "Leverage data-driven insights and community feedback to refine your offerings, fostering an environment of continuous improvement and sustainable growth.",
    },
  ];
  return (
    <div>
      <ul className="timeline">
        <li className="start">
          <h3>{professionalFeatures[0].title}</h3>
          <p>{professionalFeatures[0].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Establish Your Community</div>
          <h3>{professionalFeatures[1].title}</h3>
          <p>{professionalFeatures[1].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Organize and Sell Tickets for Events</div>
          <h3>{professionalFeatures[2].title}</h3>
          <p>{professionalFeatures[2].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="time">Manage Your Events</div>
          <h3>{professionalFeatures[3].title}</h3>
          <p>{professionalFeatures[3].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Promote Your Events / Find Affiliates</div>
          <h3>{professionalFeatures[4].title}</h3>
          <p>{professionalFeatures[4].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Forge Partnerships and Sponsorships</div>
          <h3>{professionalFeatures[5].title}</h3>
          <p>{professionalFeatures[5].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Oversee Finances</div>
          <h3>{professionalFeatures[6].title}</h3>
          <p>{professionalFeatures[6].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Gain Insights with Analytics</div>
          <h3>{professionalFeatures[7].title}</h3>
          <p>{professionalFeatures[7].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">Enhance Engagement and Connectivity</div>
          <h3>{professionalFeatures[8].title}</h3>
          <p>{professionalFeatures[8].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
        </li>
        <li className="center">
          <div className="time">Continual Improvement and Growth</div>
          <h3>{professionalFeatures[9].title}</h3>
          <p>{professionalFeatures[9].para}</p>
        </li>
      </ul>
    </div>
  );
};

export default LineSteps;
