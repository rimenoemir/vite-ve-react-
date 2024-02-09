import { useReducer, useState, useContext } from "react";
import About from "./About";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  countReducer,
  initialCountState,
} from "./reducer/counter";
import { SiteContext } from "./context/SiteContext";
import ContextAboutPage from "./ContextAboutPage";
import AddTodo from "./AddTodo";

function App() {
  // const [count, dispatch] = useReducer(countReducer, initialCountState);

  const {
    counter: { state, dispatch },
  } = useContext(SiteContext);
  console.log(state);

  return (
    <>
      <AddTodo />
      <hr />
      <hr />
      <h2>sayaç ::: {state} </h2>
      <button onClick={() => dispatch(INCREMENT)}>arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>azalt</button>
      <button onClick={() => dispatch(RESET)}>sıfırla</button>
      <hr />
      <hr />
      <ContextAboutPage />
      <hr />
      <hr />
      <About />
    </>
  );
}

export default App;
