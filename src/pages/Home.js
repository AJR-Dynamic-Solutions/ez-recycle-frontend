import React from "react";
import HomeImage from "../Assets/HomeImage.jpeg";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HomeImage})` }}
        className="home-background"
      >
        <div className="welcome-box">
          <h1>EXPLORE OUR LISTINGS</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
