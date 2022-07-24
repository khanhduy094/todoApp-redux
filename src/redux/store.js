// import { rootReducer } from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const { createStore } = require("redux");

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

// const composeEnhancer = composeWithDevTools() 


// const store = createStore(rootReducer, composeEnhancer)

// export default store;
const composeEnhancer = composeWithDevTools() 

const store = createStore(rootReducer, composeEnhancer);

export default store;