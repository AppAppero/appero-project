import { configureStore } from "@reduxjs/toolkit";
import reducerFlight from "./reducerFlight";
import reducerItinerary from "./reducerItinerary";
import reducerHotel from "./reducerHotel";


const store = configureStore({
  reducer: {
    reducerFlight,
    reducerItinerary,
    reducerHotel
  }
})

export default store;


/** Nel caso servisse :
const rootReducer = combineReducers({
    some: someReducer,
    // Altri riduttori
  });
*/