import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main/Main";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-[248px]">
        <Sidebar />
      </div>
      <div className="w-[1192px] ">
        <Main />
      </div>
    </div>
  );
}
