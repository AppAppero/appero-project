import { configureStore } from "@reduxjs/toolkit";
import reducerFlight from "./reducerFlight";
import reducerItinerary from "./reducerItinerary";


const store = configureStore({
  reducer: {
    reducerFlight,
    reducerItinerary
  }
})

export default store;


/** Nel caso servisse :
const rootReducer = combineReducers({
    some: someReducer,
    // Altri riduttori
  });
*/