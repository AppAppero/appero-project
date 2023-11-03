import { createSlice } from "@reduxjs/toolkit";


const example = createSlice({
    name: "exampleReducer",
    initialState: {
        test: ""
    },
    reducers: {

    }
})


const { reducer } = example;

export default reducer;