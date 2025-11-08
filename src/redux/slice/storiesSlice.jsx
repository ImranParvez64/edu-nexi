import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSuccess = createAsyncThunk("success/fetchSuccess", async () => {
  const res = await fetch("/sucess.json");
  const data = await res.json();
  return data;
});

const successSlice = createSlice({
  name: "success",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuccess.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSuccess.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSuccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default successSlice.reducer;
