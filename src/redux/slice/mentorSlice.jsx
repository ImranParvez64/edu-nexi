import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Async thunk — courses fetch করার জন্য
export const fetchMentors = createAsyncThunk("courses/fetchMentors", async () => {
  const response = await fetch("/mentor.json");
  const data = await response.json();
  return data;
});

const mentorsSlice = createSlice({
  name: "mentors",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMentors.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMentors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mentorsSlice.reducer;

