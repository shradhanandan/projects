import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import movieReducer from "../features/movies/moviesSlice";
import userSlice from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
