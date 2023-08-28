import { createSlice } from "@reduxjs/toolkit";

const serchSlice = createSlice({
    name: 'serchSlice',
    initialState: {
        request_body: {
            startDate: "",
            endDate: "",
            timeUnit: "",
            keyword: '',
            category: '',
            device: "",
            ages: [],
            gender: "",
        },
        status: null,
    },
    reducers: {
        setSerchTerms: (state, action) => {
            state.status = 'success';
            state.request_body = action.payload;
        },
    }
})
export const { setSerchTerms } = serchSlice.actions;
export default serchSlice.reducer