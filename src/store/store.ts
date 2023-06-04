import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../components/TodoEntry";

interface TodoState {
  list: Todo[],
}

const initialState: TodoState = {
  list: [
    {
      id: 1,
      text: "Commit initial setup",
      done: false,
    }
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.list.push(action.payload)
    },
  },
})

export const { addTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
