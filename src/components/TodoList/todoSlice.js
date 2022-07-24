// // // const initialState = [
// // //   { id: 1, name: "Learn React", completed: false, priority: "Medium" },
// // //   { id: 2, name: "Learn JS", completed: true, priority: "High" },
// // //   { id: 3, name: "Learn HTML", completed: false, priority: "Low" },
// // // ];

// // // const todoListReducer = (state = initialState, action) => {
// // //   switch (action.type) {
// // //     case "todoList/addTodo":
// // //       return [...state, action.payload];
// // //     default:
// // //       return state;
// // //   }
// // // };

// // // export default todoListReducer;

// // const initialState = [
// //   { id: 1, name: "Learn React", completed: false, priority: "Medium" },
// //   { id: 2, name: "Learn JS", completed: true, priority: "High" },
// //   { id: 3, name: "Learn HTML", completed: false, priority: "Low" },
// // ];

// // const todoListReducer = (state = initialState, action) => {
// //   switch(action.type){
// //     case "todoList/addTodo":
// //       return [
// //         ...state,
// //         action.payload
// //       ]
// //     default:
// //       return state;
// //   }
// // }

// // export default todoListReducer;

const initialState = [
  { id: 1, name: "Learn React", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
  { id: 3, name: "Learn HTML", completed: false, priority: "Low" },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/checkTodo":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
