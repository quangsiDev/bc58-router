import React, { useEffect, useState } from "react";

export default function UseEffect() {
  // life cycle
  const [number, setNumber] = useState(10);
  /**
   * useEffect( param1 , param2)
   * param1 : arrow function
   * param2 : array ( có thể là array rỗng hoặc có giá trị
   * ) ~ DependencyList ~ quyết định useEffect sẽ chạy 1 lần hay nhiều lần
   */
  useEffect(() => {
    console.log("didMount - useEffect");
  });

  console.log("render");
  return (
    <div className="text-center">
      <h2>UseEffect</h2>

      <button
        onClick={() => {
          setNumber(number - 1);
        }}
        className="btn btn-dark"
      >
        -
      </button>
      <strong className="mx-5">{number}</strong>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-danger"
      >
        +
      </button>
    </div>
  );
}
