import React, { useState } from "react";
import { FlipCard } from "../components/FlipCard";
import { projects } from "../assets/json/pages";

export const Projects = () => {
  const pages = projects;
  return (
    <div class="grid grid-cols-4 gap-8 justify-items-center">
      {pages.map((project, index) => (
        <FlipCard
          key={index}
          title={project.title}
          img={project.img}
          description={project.description}
          link={project.link}
          languages={project.languages}
        />
      ))}
    </div>
  );
};
