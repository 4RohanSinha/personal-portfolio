import React, { useEffect, useState, useContext } from "react";
import ProjectWidget from "./Project.jsx";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase_config.js";
import { ProjectsContext, TabContext } from "./TabContext.jsx";

const ProjectView = (props) => {
  const { projInfo, setProjInfo } = useContext(ProjectsContext);
  const { tab, setTab } = useContext(TabContext);

  const upper_bound = props.max ? props.max : projInfo.length;

  useEffect(() => {
    setTab(1);
    const querySnapshot = query(collection(db, "projects"));

    const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
      setProjInfo(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });

    return () => unsubscribe();
  }, [setProjInfo]);

  return (
    <>
      {upper_bound == projInfo.length ? (
        <>
          <p className="mb-10 text-4xl">Project Portfolio</p>
          <h2 className="mb-10">
            Below is an extended list of projects I have been working on!
          </h2>
        </>
      ) : (
        <></>
      )}
      {projInfo.length == 0 ? (
        <p className="text-semibold text-2xl">Loading...</p>
      ) : (
        <p></p>
      )}
      <div className="w-full max-w-md">
        {projInfo.slice(0, upper_bound).map((project, i) => (
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
      </div>
    </>
  );
};

export default ProjectView;
