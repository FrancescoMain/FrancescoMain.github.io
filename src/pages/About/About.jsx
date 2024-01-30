import React from "react";
import logo from "../../assets/logo-full.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>About Tattoo AI</h1>
      <p>
        Tattoo AI is an innovative app that combines the art of tattoos with
        artificial intelligence. Our app uses advanced algorithms to generate
        unique tattoo designs based on user preferences and input. Whether
        you're looking for inspiration or want a custom design, Tattoo AI has
        got you covered.
      </p>
      <p>
        Our team of talented artists and AI experts work together to create
        stunning and personalized tattoo designs. With Tattoo AI, you can
        explore a wide range of styles, from traditional to modern, and find the
        perfect tattoo for you.
      </p>
      <p>
        Join our community of tattoo enthusiasts and let Tattoo AI help you
        bring your tattoo ideas to life. Download the app today and start your
        tattoo journey!
      </p>
    </div>
  );
};

export default About;
