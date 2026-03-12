import { Component } from "react";
import "./Hero.css";

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <div className="hero__inner_content">
            <h1 className="hero__name">Katie Reed</h1>
            <p className="hero__title">Web Developer &amp; Designer</p>
            <button className="hero__btn">Contact Me</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
