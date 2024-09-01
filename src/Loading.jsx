import { useEffect, useContext } from "react";
import { TabContext } from "./TabContext.jsx";
const Loading = () => {
  const { tab, setTab } = useContext(TabContext);

  useEffect(() => {
    setTab(5);
  });

  return (
    <>
      <p className="mb-10 text-4xl">Loading content...</p>
    </>
  );
};

export default Loading;
