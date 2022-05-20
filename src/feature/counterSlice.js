import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAsync: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementAsync } = counterSlice.actions;

export const incrementAsyncTodo = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementAsync(amount));
  }, 1000);
};
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
