import React, { useContext } from "react";
import ContxtField from "./ContxtField";
import { Pass } from "../App";

export default function Contxtform() {
  const { theme } = useContext(Pass);
  return (
    <div className={theme}>
      <h2>Context Form</h2>
      <ContxtField />
    </div>
  );
}
