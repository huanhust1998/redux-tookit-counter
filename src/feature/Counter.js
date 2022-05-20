import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsyncTodo,
  selectCount,
} from "./counterSlice";

function Counter(props) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsyncTodo(10))}>
        Increment 10
      </button>
      {count}
    </div>
  );
}

export default Counter;
