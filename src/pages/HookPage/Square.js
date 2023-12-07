import React from "react";

export default function Square({ isActive, handleSetActive }) {
  return (
    <div
      style={{
        border: "2px solid black",
        width: 200,
        height: 200,
        background: isActive ? "red" : "black",
      }}
      onClick={() => {
        handleSetActive(!isActive);
      }}
    >
      Square
    </div>
  );
}
// rfc
