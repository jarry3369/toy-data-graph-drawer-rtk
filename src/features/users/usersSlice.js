import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (dispatch) => {
    return await fetch(
      "https://cors-meow-uyu.koyeb.app/https://openapi.naver.com/v1/datalab/shopping/category/keyword/age",
      {
        method: "POST",
        body: JSON.stringify(dispatch),
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENTID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENTSECRET,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.results;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;
