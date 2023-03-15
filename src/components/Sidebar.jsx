import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import "./Sidebar.css";

export default function Sidebar() {
  const ShipNames = [
    {
      name: "Anjuman Hoque",
      pic: "/images/ship1.png",
      data: [
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
      ],
    },
    {
      name: "Anjuman Hoque",
      pic: "/images/ship1.png",
      data: [
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
      ],
    },
    {
      name: "Anjuman Hoque",
      pic: "/images/ship1.png",
      data: [{ sibling: "jahan Brothers 2", media: "straming" }],
    },
    {
      name: "Anjuman Hoque",
      pic: "/images/ship1.png",
      data: [
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
        { sibling: "jahan Brothers 2", media: "straming" },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <span className="logo text-white">SMK LTD.</span>
      <span className="flex gap-2 items-center my-3 global">
        {" "}
        <AiOutlineGlobal /> Global
      </span>
      <span className="mt-2 text-sm text-[#C0D1FC]">Individual Ship</span>
      <div className="flex">
        <ul className="pt-4">
          {ShipNames.map((item, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
              ${item.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <span className="flex gap-3 text-white">{item.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
