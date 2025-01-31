import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./Slices/SwitchSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        switch: switchReducer
    }
});

export default store;