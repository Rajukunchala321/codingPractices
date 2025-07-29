import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ComponentA() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
        <h1>Component A {count}</h1>
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default ComponentA;
