import React, { useState } from "react";

export default function Field() {
  const [name, setname] = useState("");
  console.log(name);
  const [check, setCheck] = useState(false);

  return (
    <div>
      <h2>Controlled input text</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <h3>{name}</h3>
      <h2>rep of checkbox state</h2>
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <label htmlFor="">checkbox</label>
    </div>
  );
}
