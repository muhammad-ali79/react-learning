import { createSlice, nanoid } from "@reduxjs/toolkit";

// inital value of a store
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

// slices
export const todoSlice = createSlice({
  // name of a slice
  name: "todo",

  //   every slice has some inital state
  // the syntax should be like this
  // initialState:initialState

  initialState,

  // reducers are some functionalites it contains properties and funcions
  reducers: {
    // here state is current state mean live state
    // actions are some values(data) that we will pass
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // here payload is a object
      };

      //   here we are updating the state
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      // here we are updating the state to only the todos that will we not want to delete at the time
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// here we are only exporting the functionalites of reducers for componets to update state
export const { addTodo, removeTodo } = todoSlice.actions;

// here we are only exporting reducers to give these to the store because store will only update state from a reducer if we add it in the store
export default todoSlice.reducer;
