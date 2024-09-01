import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase_config.js";
import { useState, useEffect, useContext } from "react";
import { BlogsContext, TabContext } from "./TabContext.jsx";
import { BlogPreview } from "./BlogPreview.jsx";

export const BlogListView = (props) => {
  const { blogInfo, setBlogInfo } = useContext(BlogsContext);
  const upper_bound = props.max ? props.max : blogInfo.length;
  const { tab, setTab } = useContext(TabContext);

  useState(() => {
    setTab(2);
  });

  //w-full max-w-md
  return (
    <>
      <div style={{ marginLeft: "25%", marginRight: "25%" }}>
        {blogInfo.slice(0, upper_bound).map((blog, i) => (
          <BlogPreview blog={blog} />
        ))}
      </div>
    </>
  );
};
