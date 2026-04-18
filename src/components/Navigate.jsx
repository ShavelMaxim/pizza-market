import React from "react";

export default function Navigate({ left, right }) {
  return (
    <div className="nav">
      <div className="nav__left">{left}</div>
      <div className="nav__right">{right}</div>
    </div>
  );
}
