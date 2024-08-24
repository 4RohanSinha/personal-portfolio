import ProjectView from "./ProjectView.jsx";

const HomeView = () => {
  return (
    <>
      <p className="mb-10 text-4xl">Hey there!</p>
      <p className="mb-10" style={{ paddingLeft: "25%", paddingRight: "25%" }}>
        I'm Rohan, a Computer Science/Engineering and Applied Math student at
        UCLA. This website is still under construction with more content to be
        posted, but here a few things I've been up to!
      </p>
      <ProjectView max={2} />
    </>
  );
};

export default HomeView;
