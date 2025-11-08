import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Async thunk — courses fetch করার জন্য
export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const response = await fetch("/courses.json"); // public/data/courses.json
  const data = await response.json();
  return data;
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;

