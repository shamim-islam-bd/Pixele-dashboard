import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiShipLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const Menus = [
    { title: "Dashboard", src: "/", icon: <RiShipLine /> },
    { title: "Cargo Gear", src: "/Cargo", icon: <RiShipLine /> },
    { title: "Breakdown", src: "/Breakdown", icon: <RiShipLine /> },
    { title: "Daily Reports ", src: "/Daily", icon: <RiShipLine /> },
    { title: "Cargo Operation", src: "/Operation", icon: <RiShipLine /> },
    { title: "Bunker", src: "/Bunker", icon: <RiShipLine /> },
    { title: "Time Loss", src: "TimeLoss", icon: <RiShipLine /> },
    { title: "Port Turn Out ", src: "/PortTurnOut", icon: <RiShipLine /> },
    { title: "Ballast Tank ", src: "/BallastTank", icon: <RiShipLine /> },
    {
      title: "Demarrage & Despatch ",
      src: "/DemarrageDespatch",
      icon: <RiShipLine />,
    },
    { title: "Voyage Summary", src: "/Voyage Summary", icon: <RiShipLine /> },
  ];

  const [show, setshow] = useState();

  const Action = () => {
    setshow(!show);
  };

  return (
    <div>
      <nav className="navbar py-[32px] px-5 text-sm hidden md:block lg:block">
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
      <nav className={`navbar py-[32px] px-5  block md:hidden lg:hidden`}>
        <div className="flex justify-between">
          <span></span>
          <AiOutlineMenuUnfold
            onClick={Action}
            style={{
              fontSize: "24px",
              color: "#FFF",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
        </div>
        {Menus.map((Menu, index) => (
          <NavLink
            key={index}
            className={`${show && "hidden"} p-2 text-white font-sm block`}
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
