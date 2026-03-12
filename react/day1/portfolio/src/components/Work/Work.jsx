import React, { Component } from "react";
import "./Work.css";

const projects = [
  { id: 1, label: "WEB DESIGN", dark: true },
  { id: 2, label: "MOBILE DESIGN", dark: false },
  { id: 3, label: "LOGO DESIGN", dark: true },
  { id: 4, label: "WEB APPLICATION DEVELOPMENT", dark: false },
  { id: 5, label: "MOBILE APPLICATION DEVELOPMENT", dark: true },
  { id: 6, label: "PWA DEVELOPMENT", dark: false },
];

export class ProjectCard extends Component {
  render() {
    const { label, dark } = this.props.project;
    return (
      <div
        className={`portfolio__card ${dark ? "portfolio__card__dark" : "portfolio__card__light"}`}
      >
        <span className="portfolio__card__label">{label}</span>
        <span className="portfolio__card__line" />
      </div>
    );
  }
}

export class Work extends Component {
  render() {
    return (
      <section className="portfolio">
        <h2 className="portfolio__heading">Portfolio</h2>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default Work;
