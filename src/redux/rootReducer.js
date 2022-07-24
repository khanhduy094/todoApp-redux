// import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoSlice";

import { combineReducers } from "redux";

// export const rootReducer = combineReducers({
//     todoList: todoListReducer,
//     filters: filtersReducer
// })

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  filters: filtersReducer,
});
