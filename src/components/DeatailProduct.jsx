import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import img from "../assets/p1.jpg";
import "./Deatails.css";
import SliderProduct from "./SliderProduct";

export default function DeatailProduct() {
  return (
    <div>
      <div class="card flex p-4 shadow-lg">
        <div class="left">
          <div class="">
            <img src={img} className="slide" />
          </div>
        </div>
        <div class="right ">
          <h3>Beats Studio3 Wireless Headphone</h3>
          <div className="flex gap-4">
            <span>*****</span>
            <small>(200+ reviews)</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <h4 className="text-[#07FFD2] text-bold"> $ 999.99 </h4>
          <div className="flex justify-center gap-3">
            <h5>Color: </h5>
            <div class="color flex1">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="add flex1">
              <span>-</span>
              <label>1</label>
              <span>+</span>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="border p-3">
              <AiTwotoneHome />
            </span>
            <button className="border p-3">Add to Card</button>{" "}
            <button className="border p-3 bg-[#07FFD2]">Buy Now</button>
          </div>
        </div>
      </div>

      <SliderProduct />
    </div>
  );
}
