import React from "react";
import "./Contact.css";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

import ContactForm from "../../ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-icons">
        <div className="icon-container">
          <Link to="//github.com/Tashy009" target="_blank">
            <SiGithub className="icon " />
            <p>Github</p>
          </Link>
        </div>
        <div className="icon-container">
          <Link
            to="//linkedin.com/in/taofeek-shittu-567564188/"
            target="_blank"
          >
            <SiLinkedin className="icon " />
            <p>LinkedIn</p>
          </Link>
        </div>
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <p className="copyrights">&#169; Shittu Taofeek 2021</p>
    </div>
  );
};

export default Contact;
