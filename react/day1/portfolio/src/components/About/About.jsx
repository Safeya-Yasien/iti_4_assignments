import React, { Component } from "react";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <section className="about">
        <h2 className="about__heading">About me</h2>
        <div className="about__right">
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo.
          </p>
          <button className="about__download">Download Resume</button>
        </div>
      </section>
    );
  }
}

export default About;
