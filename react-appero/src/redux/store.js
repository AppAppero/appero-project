import { configureStore } from "@reduxjs/toolkit"
import reducerExample from "./reducerExample";


const store = configureStore({
    reducer: reducerExample
})

export default store;