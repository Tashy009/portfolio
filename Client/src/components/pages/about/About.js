import React from "react";
import "./About.css";
import * as techIcons from "../../Icons";
import { FaQuoteRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="about-quotes-container">
        <div className="img-container">
          <img src={""} alt={""} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
      </div>
      <div className="about-content-container">
        <p className="about-content">
          Shittu Taofeek is a Software Developer - a creative problem-solver -
          with a firm grasp of full stack web developments concepts, data
          structures, and algorithm analysis and design.
          <br />
        </p>
        <p className="about-content-extra">FULL STACK WEB Engineer.</p>
      </div>
      <div className="tech-container">
        <header className="tech-header">Tech Stack</header>
        <div className="tech-icons">
          {Object.values(techIcons).map((icon) => icon.apply())}
        </div>
      </div>
    </div>
  );
};

export default About;
