import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../assets/p1.jpg";

export default function SliderProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.hiring.masterkey.tech/api/v1/product/get`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(product);

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {product?.map((item) => {
        <div className="w-60 p-3 mt-10 border shadow-md" key={item._id}>
          {console.log(item)}
          <img className="w-40 mx-auto" src={img} alt="" srcset="" />
          <div>
            <h3 className="text-red-300">{item.name}</h3>
            <span className="text-muted">Price d443</span>
            <div className="flex justify-between">
              <span>*</span>
              <span>+</span>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
}
