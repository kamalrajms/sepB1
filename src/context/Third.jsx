import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const passName = useContext(Pass);
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      <h2>third component {passName}</h2>
    </div>
  );
}
