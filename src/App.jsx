import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectWidget from "./Project.jsx";
import HomeView from "./HomeView.jsx";
import ProjectView from "./ProjectView.jsx";
import Navbar from "./NavBar.jsx";
import NotFound from "./NotFound.jsx";
import { Blog } from "./Blog.jsx";
import {
  TabContext,
  ProjectsContext,
  BlogsContext,
  BlogViewContext,
} from "./TabContext.jsx";
import { BlogListView } from "./BlogView.jsx";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase_config.js";

const tabs = ["Home", "Projects"];

function App() {
  const [tab, setTab] = useState(0);
  const [projInfo, setProjInfo] = useState([]);
  const [blogInfo, setBlogInfo] = useState([]);
  const [blogsText, setBlogsText] = useState({});
  const [curBlog, setCurBlog] = useState(null);

  useEffect(() => {
    let querySnapshot = query(collection(db, "posts-dev"));
    
    if (import.meta.env.MODE === "production") {
      querySnapshot = query(collection(db, "posts-prod"));
    }


    const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
      setBlogInfo(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });

    return () => unsubscribe();
  }, [setBlogInfo]);

  return (
    <Router>
      <BlogViewContext.Provider
        value={{
          blogsText: blogsText,
          setBlogsText: setBlogsText,
          curBlog: curBlog,
          setCurBlog: setCurBlog,
        }}
      >
        <BlogsContext.Provider
          value={{ blogInfo: blogInfo, setBlogInfo: setBlogInfo }}
        >
          <ProjectsContext.Provider
            value={{ projInfo: projInfo, setProjInfo: setProjInfo }}
          >
            <TabContext.Provider value={{ tab: tab, setTab: setTab }}>
              <div>
                <Navbar />
                <div>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <div
                          className="flex flex-col items-center justify-center min-h-screen"
                          style={{ paddingTop: "10%" }}
                        >
                          <HomeView />
                        </div>
                      }
                    ></Route>
                    <Route
                      path="/projects"
                      element={
                        <div className="flex flex-col">
                          <div
                            className="flex flex-col items-center justify-center min-h-screen"
                            style={{ paddingTop: "10%" }}
                          >
                            <ProjectView />
                          </div>
                        </div>
                      }
                    ></Route>

                    <Route
                      path="/blog"
                      element={
                        <div className="flex flex-col items-center justify-center min-h-screen">
                          <BlogListView />
                        </div>
                      }
                    ></Route>
                    <Route path="/blog/:blogId" element={<Blog />}></Route>

                    <Route
                      path="*"
                      element={
                        <div
                          className="flex flex-col items-center justify-center min-h-screen"
                          style={{ paddingTop: "10%" }}
                        >
                          <NotFound />
                        </div>
                      }
                    ></Route>
                  </Routes>
                </div>
              </div>
            </TabContext.Provider>
          </ProjectsContext.Provider>
        </BlogsContext.Provider>
      </BlogViewContext.Provider>
    </Router>
  );
}

/*
{blogInfo ? (
                      blogInfo.map((blog, i) => {
                        console.log(blog);
                        return (
                          <Route
                            path={"/blog/" + blog.id}
                            element={
                              <div
                                className="mt-5 text-left align-top flex items-start absolute top-5"
                                style={{ paddingTop: "10%" }}
                              >
                                <Blog blog={blog} />
                              </div>
                            }
                            key={i}
                          />
                        );
                      })
                    ) : (
                      <Route />
                    )}

*/

export default App;
/*
<div
                  className={
                    tab < 3
                      ? "flex flex-col items-center justify-center min-h-screen"
                      : "mt-5 text-left align-top flex items-start absolute top-5"
                  }
                  style={{ paddingTop: "10%" }}
                >
                  {(tab == 0 && <HomeView />) ||
                    (tab == 1 && <ProjectView />) ||
                    (tab == 2 && <BlogListView />) ||
                    (tab == 3 && <Blog />)}
                </div>
*/
