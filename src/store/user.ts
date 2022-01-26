import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface StateProps {
token: string;
};  

const initialState: StateProps = {
    token: "",
};

const userSlice = createSlice({
name: "user",
initialState,
reducers: {}
});

export default userSlice.reducer;