import React from "react";
import { RiShipLine } from "react-icons/ri";
import "./ReportCard.css";
import { data } from "./data";

export default function ReportCards() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 p-6">
        {data?.map((item) => {
          return (
            <div className="shadow-md rounded-md p-4">
              <div className="linear"> </div>
              <div className="flex justify-between pb-5 ">
                {console.log(item.title)}
                <div className="icon w-12 h-12 rounded-full items-center text-center align-center bg-[#2C64E4]">
                  <RiShipLine
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      borderRadius: "50%",
                      marginTop: "25%",
                      marginLeft: "25%",
                    }}
                  />
                </div>
                <span className="font-bold text-[32px]">{item?.count}</span>
              </div>
              <div>
                <span className="text-bold text-[#131927d5]">{item?.des}</span>
                <h4 className="text-black font-bold text-[16px]">
                  {item?.title}
                </h4>
              </div>
            </div>
           
          );
        })}
      </div>
    </div>
  );
}
