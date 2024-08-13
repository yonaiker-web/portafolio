import React, { useState } from "react";
import { FlipCard } from "../components/FlipCard";
import { projects } from "../assets/json/pages";
import { Layout } from "../components/Layout";

export const Projects = () => {
  const pages = projects;
  return (
    <Layout>
      <div class="grid grid-cols-4 gap-8 justify-items-center pt-24 px-8">
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
    </Layout>
  );
};
