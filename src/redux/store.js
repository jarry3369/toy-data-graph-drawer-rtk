import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/usersSlice'
import searchsReducer from '../features/users/serchSlice'

const store = configureStore({
    reducer : {
        users : usersReducer,
        searches : searchsReducer,
    }
})

export default store;