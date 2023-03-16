import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Main from "./pages/Main/Main";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState();

  const Action = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex">
      <div
        className={`${
          showSidebar && "hidden"
        } sidebar origin-left duration-200`}
      >
        <Sidebar />
      </div>
      <div className={`${showSidebar && "block"} w-[1400px]`}>
        <Main Action={Action} />
      </div>
    </div>
  );
}
