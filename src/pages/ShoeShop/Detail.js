import React from "react";
import { useSelector } from "react-redux";

export default function Detail() {
  let data = useSelector((state) => {
    return state.shoeSlice.detail;
  });
  return (
    <div className="text-center pt-5 col-12">
      <h1>{data.name}</h1>
      <h1>{data.price} $</h1>
    </div>
  );
}
