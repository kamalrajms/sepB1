import React from "react";
import { Pass } from "../App";
import { useContext } from "react";

export default function ContextBtn() {
  const { theme, setTheme } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setTheme(theme == "light" ? "black" : "light")}>
        theme-{theme}
      </button>
    </div>
  );
}

