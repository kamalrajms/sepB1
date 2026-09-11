import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initialState = { count: 0 };

  function countFunction(state, action) {
    switch (action.type) {
      case "incerement":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };

      case "reset":
        return { count: 0 };

      default:
        return state;
    }
  }
  //   action={type: "incerement" }

  const [state, dispatch] = useReducer(countFunction, initialState);
  return (
    <div>
      <h2>count={state.count}</h2>
      <button onClick={() => dispatch({ type: "incerement" })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
