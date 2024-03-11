import React from "react";
import "./AboutUs.css";

import joshuaImage from "../images/joshua.png";
import rodImage from "../images/rod.png";
import andrewImage from "../images/andrew.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <p>
          Welcome to our application! We are EZ-Recycle, your one-stop solution
          for sustainable living! We are revolutionizing the way you recycle
          unwanted items. Our platform connects users with a seamless online
          marketplace where they can easily recycle items for free or earn extra
          cash. With EZ-Recycle, you can declutter your space while contributing
          to a greener planet.
        </p>
        <p>
          Say goodbye to the hassle of finding recycling centers or dealing with
          complicated processes. Join us in making recycling effortless and
          rewarding for everyone! With EZ-Recycle, you not only simplify your
          life but also become an active part of the sustainability movement.
          Let's work together to create a cleaner, greener future for all.
        </p>
      </div>
      <h2>Our Team</h2>
      <div className="team-member">
        <img src={joshuaImage} alt="Joshua" className="team-member-image" />
        <p>
          <strong>Joshua</strong> - Tech Lead/Anchor
        </p>
      </div>
      <div className="team-member">
        <img src={rodImage} alt="Rod" className="team-member-image" />
        <p>
          <strong>Rod</strong> - Design Lead
        </p>
      </div>
      <div className="team-member">
        <img src={andrewImage} alt="Andrew" className="team-member-image" />
        <p>
          <strong>Andrew</strong> - Product/Project Manager
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
