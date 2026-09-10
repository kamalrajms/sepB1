import React from "react";
import Second from "./Second";

export default function First() {
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      <h2>First component</h2>
      <Second />
    </div>
  );
}
