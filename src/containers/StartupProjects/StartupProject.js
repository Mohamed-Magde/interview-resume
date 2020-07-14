import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="startup-projects-main">
            <div className="startup-project-text">

            </div>
            <div className="starup-project-image">
              {bigProjects.projects.map(project => {
                return (

                  <figure className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                    <figcaption>
                      <p className="saaya-health-div">
                        {project.text}
                      </p>
                    </figcaption>
                    <img alt="Saad Working" src={project.image}></img>

                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
