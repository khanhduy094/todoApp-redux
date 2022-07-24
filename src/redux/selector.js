import { createSelector } from "reselect";

import { useSelector } from "react-redux";

// // export const todoListSelector = (state) => {
// //   return state.todoList;
// // };
// // export const searchSelector = (state) => {
// //   return state.filters.search;
// // };
// // export const statusSelector = (state) => {
// //   return state.filters.status;
// // };
// // export const priotitiesSelector = (state) => {
// //   return state.filters.priorities;
// // };

// // export const todoRemainingSelector = createSelector(
// //   todoListSelector,
// //   searchSelector,
// //   statusSelector,
// //   priotitiesSelector,
// //   (todoList, search, status, priorities) => {
// //     if (status === "All") {
// //       return todoList.filter((todo) => {
// //         return  priorities.length > 0 ? (todo.name.includes(search) && priorities.includes(todo.priority)) : todo.name.includes(search)
// //       });
// //     }

// //     return todoList.filter((todo) => {
// //       return  todo.name.includes(search) && (status === "Completed" ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
// //     });
// //   }
// // );

// import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//   return state.todoList;
// };

// export const searchFilterSelector = (state) => {
//   return state.filters.search;
// };
// export const statusFilterSelector = (state) => {
//   return state.filters.status;
// };
// export const prioritiesFilterSelector = (state) => {
//   return state.filters.priorities;
// };

// export const todoRemainingSelector = createSelector(
//   todoListSelector,
//   searchFilterSelector,
//   statusFilterSelector,
//   prioritiesFilterSelector,
//   (todoList, search, status, priorities) => {
//       return todoList.filter(todo => {
//           if(status === "All") {
//             return   priorities.length > 0 ? (priorities.includes(todo.priority) && todo.name.includes(search)) : todo.name.includes(search)
//           }
//           return todo.name.includes(search) && (status === "Completed" ? todo.completed : !todo.completed) && (priorities.length > 0 ? priorities.includes(todo.priority) : true)

//       })
//   }
// );



export const todoListSelector = (state) => {
  return state.todoList;
};

export const searchSelector = (state) => {
  return state.filters.search;
};
export const statusSelector = (state) => {
  return state.filters.status;
};
export const prioritiesFilterSelector = (state) => {
  return state.filters.priorities;
};
export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchSelector,
  statusSelector,
  prioritiesFilterSelector,
  (todoList, search, status, priorities) => {
    if (status === "All") {
      return todoList.filter((todo) => {
        return priorities.length ? todo.name.includes(search) && (priorities.includes(todo.priority)) : todo.name.includes(search);
      });
    }
    return todoList.filter((todo) => {
        return todo.name.includes(search) && (status === "Completed" ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
    });
  }
);



