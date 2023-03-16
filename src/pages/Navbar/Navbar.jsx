import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const Menus = [
    { title: "Dashboard", src: "/" },
    { title: "Cargo Gear", src: "/Cargo" },
    { title: "Breakdown", src: "/Breakdown" },
    { title: "Daily Reports ", src: "/Daily" },
    { title: "Cargo Operation", src: "/Operation" },
    { title: "Bunker", src: "/Bunker" },
    { title: "Time Loss", src: "TimeLoss" },
    { title: "Port Turn Out ", src: "/PortTurnOut" },
    { title: "Ballast Tank ", src: "/BallastTank" },
    { title: "Demarrage & Despatch ", src: "/DemarrageDespatch" },
    { title: "Voyage Summary", src: "/Voyage Summary" },
  ];

  return (
    <div>
      <nav className="navbar py-[32px] px-5 text-sm">
        {Menus.map((Menu, index) => (
          <NavLink
            key={index}
            className="m-2 text-white font-sm"
            to={Menu.src}
            activeClassName="active"
          >
            {Menu.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
