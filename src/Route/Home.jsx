import React from "react";
import APIfetch from "../Component/APIfetch";
import useCount from "../Component/useCount";

export default function Home() {
  const { count, increment, decrement, reset } = useCount(5);
  return (
    <div>
      <h2>Home component</h2>
      <h3>count:{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <APIfetch />
    </div>
  );
}
