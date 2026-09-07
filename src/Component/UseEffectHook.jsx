import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(7);

  useEffect(() => {
    console.log(`count change to : ${count} - ${num}`);
  }, [count, num]);
  useEffect(() => {
    console.log("component Mounted");
  }, [count]);
  return (
    <div>
      <h2>useEffect Hook</h2>
      <h2>
        count:{count}-{num}
      </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
}
