import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../components/TodoEntry";

interface TodoState extends Array<Todo> {};

const initialState: TodoState = [
  {
    id: 1,
    text: "Commit initial setup",
    done: true,
  }
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.unshift(action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      let target = state.find(todo => todo.id === action.payload);
      if (target) {
        target.done = !target.done;
      }
    },
    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    }
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

interface ConfigState {
  showForm: boolean,
}

const initialConfigState: ConfigState = {
  showForm: false,
}

const configSlice = createSlice({
  name: 'config',
  initialState: initialConfigState,
  reducers: {
    toggleTodoForm(state) {
      state.showForm = !state.showForm;
    }
  }
})

export const { toggleTodoForm } = configSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    config: configSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
