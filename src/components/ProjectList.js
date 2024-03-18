import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const proArr = projects.map((pro) => {
    return <ProjectItem name={pro.name} about={pro.about} key={pro.id} technologies={pro.technologies}/>;
  });
  console.log(proArr);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {proArr}
      </div>
    </div>
  );
}

export default ProjectList;
