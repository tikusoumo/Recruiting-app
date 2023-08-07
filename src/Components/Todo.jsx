/* eslint-disable react/prop-types */

import { ACTIONS } from "./test";
export default function Todo({ todo, dispatch }) {
  return (
    <>
      <span style={{ color: todo.complete ? "#aaa" : "#1b1b1b" }}>
        {todo.name}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button type="button">Delete</button>
    </>
  );
}
