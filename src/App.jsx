import React, { useContext, createContext, useState } from "react";
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
import First from "./context/First";
import Contxtform from "./context/Contxtform";
import UseReducerHook from "./Component/UseReducerHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Route/Home";
import About from "./Route/About";
import Service from "./Route/Service";
import Contact from "./Route/Contact";
import WebApp from "./Route/WebApp";
import AppApp from "./Route/AppApp";

export const Pass = createContext();

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

  const [theme, setTheme] = useState("light");
  const data = { name: "react jx context" };
  return (
    <>
      {ternary && (
        <div>
          <UseReducerHook />
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <Pass.Provider value={{ theme, setTheme, data }}>
              <Contxtform />
            </Pass.Provider>
          </div>
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <h1>App component {name}</h1>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
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
          <h1 style={{ padding: "20px", color: "red" }}>
            hello world!!!!--{name}
          </h1>
          <Greeting firstName={name} age={age} />
          <Hello />
          <DestructuringProps name={name} age={age} city={city} />
          <DestructuringProps name={name2} age={age2} city={city2} />
          <DestructuringProps name={name3} age={age3} city={city3} />
        </div>
      )}

      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />}>
            <Route path="webapp" element={<WebApp />} />
            <Route path="" element={<AppApp />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
