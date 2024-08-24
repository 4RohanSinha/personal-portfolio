import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectWidget from "./Project.jsx";
import HomeView from "./HomeView.jsx";
import ProjectView from "./ProjectView.jsx";
import Navbar from "./NavBar.jsx";
import { TabContext } from "./TabContext.jsx";


const tabs = ["Home", "Projects"];

function App() {
  const [tab, setTab] = useState(0);

  return (
    <TabContext.Provider value={{tab: tab, setTab: setTab}}>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen" style={{paddingTop: "10%"}}>
        {tab == 0 && <HomeView /> || tab == 1 && <ProjectView />}
        </div>
      </div>
    </TabContext.Provider>
  );
}

export default App;
