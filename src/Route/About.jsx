import React, { useState, useEffect } from "react";
import UseParamHook from "../Component/UseParamHook";
import UseIdHook from "../Component/UseIdHook";
import { useNavigate } from "react-router-dom";
import UseSearchParamHook from "../Component/UseSearchParamHook";

export default function About() {
  const [count, setCount] = useState(0);
  const page = useNavigate();
  useEffect(() => {
    if (count === 10) {
      page("/Contact");
    }
  }, [count]);

  return (
    <div>
      <UseSearchParamHook/>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button
        onClick={() => {
          page("/Contact");
        }}
      >
        move to contact
      </button>
      <h2>About component</h2>
      <UseIdHook />
      <UseIdHook />
      <UseParamHook />
    </div>
  );
}
