import {createSlice} from '@reduxjs/toolkit';

let date = new Date()

const initialState = {
    value: date,
    status: 'idle',
};

export const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        newDate: (state) => {
            state.value = new Date();
        },
    },
});

export const {newDate} = clockSlice.actions;

export const selectDate = (state) => state.clock.value;

export default clockSlice.reducer;
