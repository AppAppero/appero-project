import { configureStore } from "@reduxjs/toolkit";
import reducerFlight from "./reducerFlight";


const store = configureStore({
    reducer: {reducerFlight}
})

export default store;


/** Nel caso servisse :
const rootReducer = combineReducers({
    some: someReducer,
    // Altri riduttori
  });
*/