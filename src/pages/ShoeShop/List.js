import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "./shoeSlice";

export default function List() {
  // lấy data về => useSelector
  // đẩy data lên redux => useDispatch
  let dispatch = useDispatch();
  let handleViewDetail = (shoe) => {
    dispatch(setDetail(shoe));
  };
  let shoeList = useSelector((state) => state.shoeSlice.shoeArr);
  let renderShoeList = () => {
    return shoeList.map((shoe, index) => {
      return (
        <div className="col-2" key={index}>
          <img
            onMouseOver={() => {
              handleViewDetail(shoe);
            }}
            className="w-100"
            src={shoe.image}
            alt=""
          />
        </div>
      );
    });
  };
  return <div className="row ">{renderShoeList()}</div>;
}
