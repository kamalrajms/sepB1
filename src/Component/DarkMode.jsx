import React, { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      {/* darkMode 0==false
        {/* darkMode 1==true
        darkMode 2 == fales
        darkMode 3 ==true*/}
      <button onClick={() => setDarkMode(!darkMode)}>
        switch to {darkMode ? "light" : "dark"} mode
      </button>
      <h3>you are in {darkMode ? "Dark" : "light"} mode</h3>
    </div>
  );
}

// !true==false
// !false==true
