import React, { useContext } from "react";
import ContextBtn from "./ContextBtn";
import { Pass } from "../App";
export default function ContxtField() {
  const { data } = useContext(Pass);
  return (
    <div>
      <nav>
        <label htmlFor="">name</label>
        <input type="text"  />
      </nav>
      <ContextBtn />
    </div>
  );
}
