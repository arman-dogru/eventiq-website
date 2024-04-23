import React from "react";
import "./ContactOptions.css";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactOptions = () => {
  return (
    <div className="Contact-options">
      <div>
        <h2 className="ContactOpt-header">
          <CiLocationOn />
          Address
        </h2>
        <iframe
          className="Location"
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.311159147775!2d-75.68934432245015!3d45.423228571073366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05071ad36a51%3A0x67afbd9897dba9de!2s50%20Laurier%20Ave%20E%2C%20Ottawa%2C%20ON%20K1N%201H7%2C%20Canada!5e0!3m2!1sen!2sin!4v1713060247916!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div>
        <h2 className="ContactOpt-header">
          <CiPhone />
          Phone
        </h2>
        <p className="ContactOpt-para">+1 (613) 413-0777</p>
        <p className="ContactOpt-para">+1 (647) 835-9139</p>
        <h2 className="ContactOpt-header">
          <MdOutlineMailOutline />
          Email Address
        </h2>
        <p className="ContactOpt-para">info@proptimize.co</p>
      </div>
    </div>
  );
};

export default ContactOptions;
