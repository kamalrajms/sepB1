import React from "react";
import Greeting from "./Greeting";
import Hello from "./Hello";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRender from "./Component/ListRender";
import ObjectStyle from "./Component/ObjectStyle";
import UseStateHook from "./Component/UseStateHook";
import DarkMode from "./Component/DarkMode";
import Field from "./Component/Field";
import RegFrom from "./Component/RegFrom";
import ConditionalFrom from "./Component/ConditionalFrom";
import UseEffectHook from "./Component/UseEffectHook";
import Seconds from "./Component/Seconds";
import StopWatch from "./Component/StopWatch";
import UseEffectHookAPI from "./Component/UseEffectHookAPI";
import UseRefHook from "./Component/UseRefHook";

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

  const ternary = false;
  return (
    <>
      <UseRefHook />
      <UseEffectHookAPI />
      <StopWatch />
      <Seconds />
      <UseEffectHook />
      <ConditionalFrom />
      <RegFrom />
      <Field />
      <DarkMode />
      <UseStateHook />
      <ObjectStyle />
      {ternary ? <ListRender /> : <ConditionalRendering />}
      <h1 style={{ padding: "20px", color: "red" }}>hello world!!!!--{name}</h1>
      <Greeting firstName={name} age={age} />
      <Hello />
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />
    </>
  );
}
