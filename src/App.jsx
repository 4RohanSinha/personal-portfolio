import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectWidget from "./Project.jsx";

const projects = [{
	title: "BookLib",
	description: "A multimodal iOS mobile app that can scan books, reading notes, sort them, provide efficient search tools, and review content quickly.",
	link: "https://github.com/4rohansinha/BookLib",
	imageSrc: ""
}, {
	title: "CudaX: Cuda Graph Theory Library [in progress]",
	description: "A subset of graph theory functionality that runs on Cuda. Still underway. Link to repo to be added soon!",
	link: "#"
}, {
	title: "Lisp Compiler for Chip 8 [in progress]",
	description: "A mini version of Lisp to create programs that run on Chip-8 faster. Still underway.",
	link: "https://github.com/4rohansinha/lisp-chip-8",
	imageSrc: ""
}, {
    title: "Chip 8 Emulator",
    description: "An interpreter of Chip-8 programs, written in C using SDL2. Comes with a disassembler to convert ROM files into human-readable Assembly instructions.",
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
      <h2 className="mb-10">I'm Rohan, a Computer Science/Engineering and Applied Math student at UCLA. This website is still under construction with more content to be posted, but here a few things I've worked on/are in progress!</h2>
      <div className="w-full max-w-md">
      {projects.map((project, i) => <ProjectWidget key={i} imageSrc={project.imageSrc} title={project.title} description={project.description} link={project.link} />)};
      </div>
    </div>
  );
}

export default App;
