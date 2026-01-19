import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPost } from "./postsApi";


/**
 * 🔹 POST API Request
 * payload = যেটা তুমি dispatch থেকে পাঠাবে
 */
export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async () => {
     const post = await getPost();
     return post;
  }
);



const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    post: null,
    error: null,
    success: false,
  },
  reducers: {
    resetPostState: (state) => {
      state.loading = false;
      state.post = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔵 Pending
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      // 🟢 Fulfilled
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.success = true;
      })

      // 🔴 Rejected
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetPostState } = postSlice.actions;

export default postSlice.reducer;
