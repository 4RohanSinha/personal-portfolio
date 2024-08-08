import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectWidget from "./Project.jsx";

const projects = [{
    title: "Chip 8 Emulator",
    description: "An interpreter of Chip-8 programs, written in C using SDL2.",
    link:"https://github.com/4rohansinha/chip-8-emulator",
    imageSrc: ""
}, {
  title: "SDL2 Game Engine",
  description: "A game engine written in C++ using SDL2.",
  imageSrc: "",
  link: "https://github.com/4RohanSinha/CppND-Capstone-Project"
},
{
  title: "UCLAX",
  description: "A web-based app connecting UCLA students commuting to LAX and back: a MERN stack project.",
  imageSrc: "",
  link: "https://github.com/ps-innovator/35L-Project"
}];

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-10">Hey there!</h1>
      <h2 className="mb-10">I'm Rohan, a Computer Science/Engineering and Applied Math student at UCLA. This website is still under construction with more content to be posted, but here a few things I've worked on!</h2>
      <div className="w-full max-w-md">
      {projects.map((project, i) => <ProjectWidget key={i} imageSrc={project.imageSrc} title={project.title} description={project.description} link={project.link} />)};
      </div>
    </div>
  );
}

export default App;
