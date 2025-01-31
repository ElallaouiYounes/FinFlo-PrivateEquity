import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    switch: false,
};

const switchSlice = createSlice({
    name: "switch",
    initialState,
    reducers: {

        toggleSwitch: (state) => {
            state.switch = !state.switch;
        },
    },
});

export const { toggleSwitch } = switchSlice.actions;

export default switchSlice.reducer;