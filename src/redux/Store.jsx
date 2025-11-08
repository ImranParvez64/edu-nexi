import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '@/redux/slice/categoriesSlice'
import coursesReducer from '@/redux/slice/coursesSlice'
import successReducer from "./slice/storiesSlice";
import mentorsReducer from "./slice/mentorSlice";
export const store = configureStore({
  reducer: {
    categories:categoriesReducer,
    courses: coursesReducer,
    success:successReducer,
    mentors:mentorsReducer
  },
})
