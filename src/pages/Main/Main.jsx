import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="h-screen  flex-1 p-7">
        <div className="flex justify-between"></div>

        <div class="flex flex-row">
          <div class="basis-3/4">
            <h1>hey</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
