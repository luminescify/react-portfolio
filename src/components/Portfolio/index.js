import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'reel-cinema',
      description: 'Reel Cinema',
      link: "https://intense-lake-77911.herokuapp.com/",
      repo: "https://github.com/AWSMProdigy/Theater-website"
    },
    {
      name: 'harry-potter-quiz-challenge',
      description: 'Harry Potter Quiz Challenge',
      link: "https://luminescify.github.io/code-quiz/",
      repo: "https://github.com/luminescify/code-quiz"
    },
    {
      name: 'take-a-hike',
      description: 'Take A Hike',
      link: "https://faithelizagreen.github.io/take-a-hike/index.html",
      repo: "https://github.com/faithelizagreen/take-a-hike"
    },
    {
      name: 'day-planner',
      description: 'Day Planner',
      link: "https://luminescify.github.io/day-planner/",
      repo: "https://github.com/luminescify/day-planner"
    },
    {
      name: 'weather-dashboard',
      description: 'Weather Dashboard',
      link: "https://luminescify.github.io/weather-dashboard/",
      repo: "https://github.com/luminescify/weather-dashboard"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
