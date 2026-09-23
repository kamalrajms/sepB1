import React from "react";
import APIfetch from "../Component/APIfetch";
import useCount from "../Component/useCount";
import CustomerAdd from "../CustomerAdd";
import CustomerView from "../CustomerView";

export default function Home() {
  const { count, increment, decrement, reset } = useCount(5);
  return (
    <div>
      <CustomerAdd />
      <CustomerView />
      <h2>Home component</h2>
      <h3>count:{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <APIfetch />
    </div>
  );
}
