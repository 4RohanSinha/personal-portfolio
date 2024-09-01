import { useEffect, useContext } from "react";
import { TabContext } from "./TabContext.jsx";
const NotFound = () => {
  const { tab, setTab } = useContext(TabContext);

  useEffect(() => {
    setTab(5);
  });

  return (
    <>
      <p className="mb-10 text-4xl">404 Not Found</p>
      <p className="mb-10" style={{ paddingLeft: "25%", paddingRight: "25%" }}>
        The page you were looking for could not be found.
      </p>
    </>
  );
};

export default NotFound;
