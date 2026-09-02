import React from "react";
import Style from "./Condition.module.css";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div className={Style.condition}>
      <h2>Conditional rendering</h2>
      <h3>ternary</h3>
      {user ? <h4>welcom back....!</h4> : <h4>please login...</h4>}
      <h3>logical</h3>
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sequi sapiente laudantium iusto molestiae explicabo repudiandae quasi,
          ducimus numquam ab possimus necessitatibus, iure magni facere ipsum
          officiis similique? Doloribus, eaque.
        </p>
      )}
    </div>
  );
}
