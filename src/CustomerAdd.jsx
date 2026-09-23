import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "./slice/customerSlice";

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addCoustomer() {
    if (input) {
      dispatch(addCustomer(input));
      setInput("")
    }
  }

  return (
    <div>
      <h3>Add new customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addCoustomer}>add</button>
    </div>
  );
}
