import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
      ...state, //prvious data
      [action.field]: action.value, // updated data
    };
  }
  //   action={
  //       field: "name",
  //       value: state.name,
  //     }

  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Reducer Form</h2>
      <input
        type="text"
        value={state.name}
        name="name"
        onChange={handleChange}
        placeholder="enter a name"
      />
      <input
        type="email"
        value={state.email}
        name="email"
        onChange={handleChange}
        placeholder="enter a email"
      />
      <input
        type="password"
        value={state.password}
        name="password"
        onChange={handleChange}
        placeholder="enter a password"
      />
    </div>
  );
}
