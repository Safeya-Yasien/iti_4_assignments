import React, { Component } from "react";
import "./Skills.css";

const focusAreas = [
  "MY FOCUS",
  "UI/UX Design",
  "Responsive Design",
  "Web Design",
  "Mobile App Design",
];

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 82 },
  { name: "React", level: 78 },
  { name: "Photoshop", level: 70 },
  { name: "Adobe XD", level: 65 },
  { name: "Node.js", level: 60 },
  { name: "WordPress", level: 55 },
];

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <span className="skill-bar__name">{name}</span>
      <div className="skill-bar__track">
        <div className="skill-bar__fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export class Skills extends Component {
  render() {
    return (
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="skills__heading text-center mb-3">Skills</h2>
          <p className="skills__desc text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            duo dolores duo dolores et ea rebum.
          </p>
          <div className="skills__container">
            <div className="skills__layout">
              <div className="skills__focus-col">
                <ul className="skills__focus-list">
                  {focusAreas.map((f) => (
                    <li
                      key={f}
                      className={
                        f === "MY FOCUS"
                          ? "skills__focus-label"
                          : "skills__focus-item"
                      }
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="skills__bars-col">
                {skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
