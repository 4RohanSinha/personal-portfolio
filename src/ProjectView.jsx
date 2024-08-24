import ProjectWidget from "./Project.jsx";
import engine_img from './assets/engine_application.png';
import uclax_img from './assets/uclax_application.png';
import notetake_img from './assets/note_take.png';
import reading_list_img from './assets/reading_list.png';

const projects = [
  {
    title: "BookLib",
    description:
      "A multimodal iOS mobile app that can scan books, reading notes, sort them, provide efficient search tools, and review content quickly.",
    link: "https://github.com/4rohansinha/BookLib",
    imageSrc: notetake_img,
    imageSrc2: reading_list_img
  },
  {
    title: "Lisp Compiler for Chip 8",
    description:
      "A compiler for a variant of Lisp to enable creation of programs that run on Chip-8. Comes with an assembler.",
    link: "https://github.com/4rohansinha/lisp-chip-8",
    imageSrc: "https://blog.sigplan.org/wp-content/uploads/2020/03/shutterstock_430200430-1080x675.jpg"
  },
  {
    title: "Chip 8 Emulator",
    description:
      "An interpreter of Chip-8 programs, written in C using SDL2. Comes with a disassembler to convert ROM files into human-readable Assembly instructions.",
    link: "https://github.com/4rohansinha/chip-8-emulator",
    imageSrc: "https://th-thumbnailer.cdn-si-edu.com/AoIYul57EQipNaqcmTHcjlBIVqo=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/7f/4c/7f4c2d11-089f-4d86-8052-5cf95295be7e/file-20180531-69508-1oenzpj.png",
  },
  {
    title: "SDL2 Game Engine",
    description: "A game engine written in C++ using SDL2.",
    imageSrc: engine_img,
    link: "https://github.com/4RohanSinha/CppND-Capstone-Project",
  },
  {
    title: "UCLAX",
    description:
      "A web-based app connecting UCLA students commuting to LAX and back: a MERN stack project.",
    imageSrc: uclax_img,
    link: "#", //"https://github.com/ps-innovator/35L-Project"
  },
  {
    title: "CudaX: Cuda Graph Theory Library [in progress]",
    description:
      "A subset of graph theory functionality that runs on Cuda. Still underway. Link to repo to be added soon!",
    link: "#",
  }
];

const ProjectView = (props) => {
  const upper_bound = props.max ? props.max : projects.length;
  return (
    <>
    
      { upper_bound == projects.length ? <><p className="mb-10 text-4xl">Project Portfolio</p><h2 className="mb-10">
        Below is an extended list of projects I have been working on!
      </h2></> : <></> }
      <div className="w-full max-w-md">
        {projects.slice(0, upper_bound).map((project, i) => (
          <ProjectWidget
            key={i}
            imageSrc={project.imageSrc}
            imageSrc2={project.imageSrc2}
            title={project.title}
            description={project.description}
            link={project.link}
            hideLink={project.link == "#"}
          />
        ))}
        ;
      </div>
    </>
  );
};

export default ProjectView;
