import React from "react";
import Greeting from "./Greeting";
import Hello from "./Hello";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./Component/ConditionalRendering";

export default function App() {
  const name = "kumar";
  const age = 55;
  const city = "salem";

  const name2 = "bala";
  const age2 = 55255;
  const city2 = "namakkal";

  const name3 = "linin";
  const age3 = 8515;
  const city3 = "chennai";
  return (
    <>
      <ConditionalRendering />
      <h1>hello world!!!!--{name}</h1>
      <Greeting firstName={name} age={age} />
      <Hello />
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />
    </>
  );
}
