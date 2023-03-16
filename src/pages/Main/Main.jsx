import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import ReportCards from "../../components/ReportCards";
import Navbar from "../Navbar/Navbar";

export default function Main({ Action }) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between p-6">
        <h1 className="font-bold text-xl">Global Ship Report</h1>
        <span onClick={Action}>
          {" "}
          <HiMenuAlt1
            style={{
              fontSize: "24px",
              color: "#2668FF",
              borderRadius: "50%",
              marginTop: "25%",
              marginLeft: "25%",
            }}
          />
        </span>
      </div>
      <ReportCards />
    </div>
  );
}
