import React, { useContext, useReducer } from "react";
import { ADD_TODO } from "./reducer/todo";
import { SiteContext } from "./context/SiteContext";
import Todos from "./Todos";

function AddTodo() {
  const {
    todos: { state, dispatch },
  } = useContext(SiteContext);

  console.log("state" + state);

  console.log("dispatch" + dispatch);

  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements[0].value;
    dispatch({ type: ADD_TODO, payload: inputValue });
    event.target.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo bilgisini giriniz" />
        <button type="submit">Ekle</button>
      </form>
      <Todos />
    </>
  );
}

export default AddTodo;
