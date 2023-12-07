import React, { useState } from "react";
import Square from "./Square";

export default function HookPage() {
  // ko dùng this , khi tạo 1 biến, function thì phải dùng let hoặc const
  let [isActive, setActive] = useState(false);
  let [number, setNumber] = useState(100);

  /**
  *  state:{
    isActive:fasle,
    number:100
  }
  */
  let handleGiam = () => {
    // this.setState({number:this.state.number+1})
    setNumber(number - 1);
  };
  let handleTang = () => {
    setNumber(number + 1);
  };
  return (
    <div className="text-center pt-5">
      <button onClick={handleGiam} className="btn btn-dark">
        -
      </button>
      <strong>{number}</strong>
      <button onClick={handleTang} className="btn btn-danger">
        +
      </button>
      <Square handleSetActive={setActive} isActive={isActive} />
    </div>
  );
}
