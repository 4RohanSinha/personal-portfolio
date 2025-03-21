import { useEffect, useContext } from "react";
import ProjectView from "./ProjectView.jsx";
import { TabContext } from "./TabContext.jsx";
const HomeView = () => {
  const { tab, setTab } = useContext(TabContext);

  useEffect(() => {
    setTab(0);
  });

  return (
    <>
      <p className="mb-10 text-4xl font-bold">Hey there!</p>
      <p className="mb-10" style={{ paddingLeft: "25%", paddingRight: "25%" }}>
        I'm Rohan, a Computer Science/Engineering and Applied Math student at
        UCLA.
      </p>
      <ProjectView max={2} />
    </>
  );
};

export default HomeView;
