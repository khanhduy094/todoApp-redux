// // // export const addTodoAction = (data) => ({
// // //     type: "todoList/addTodo",
// // //     payload: data
// // // })
// // // export const searchFilter = (search) => ({
// // //     type: "filters/search",
// // //     payload: search
// // // })

// // export const addTodoAction = (data) => {
// //     return {
// //         type: "todoList/addTodo",
// //         payload: data
// //     }
// // }

// // export const searchFilterAction = (text) => {
// //     return {
// //         type: "filters/searchFilter",
// //         payload: text
// //     }
// // }

// // export const statusFilterAction = (status) => {
// //     return {
// //         type: "filters/statusFilter",
// //         payload: status
// //     }
// // }

// // export const prioritiesFilterAction = (priorities) => {
// //     return {
// //         type: "filters/prioritiesFilter",
// //         payload: priorities
// //     }
// // }

// export const addTodoAction = (todo) => {
//     return {
//         type: "todoList/addTodo",
//         payload: todo
//     }
// }

// export const searchFilterAction = (text) => {
//     return {
//         type: "filters/searchFilter",
//         payload: text
//     }
// }
// export const statusFilterAction = (status) => {
//     return {
//         type: "filters/statusFilter",
//         payload: status
//     }
// }
// export const prioritiesFilterAction = (priorities) => {
//     return {
//         type: "filters/prioritiesFilter",
//         payload: priorities
//     }
// }

// export const checkTodoAction = (id) => {
//     return {
//         type: "todoList/checkTodo",
//         payload: id
//     }
// }

export const addTodoAction = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const searchFilter = (search) => ({
  type: "filters/seachFilter",
  payload: search,
});

export const statusFilter = (status) => ({
  type: "filters/statusFilter",
  payload: status,
});

export const prioritiesFilterAction = (priorities) => {
  return {
    type: "filters/prioritiesFilter",
    payload: priorities,
  };
};

export const checkTodoAction = (id) => {
  return {
    type: "todoList/checkTodo",
    payload: id,
  };
};
