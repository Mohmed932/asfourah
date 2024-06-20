import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

    
const initialState = {
  loading: false,
  result: [],
  error: false,
};

export const SearchResult = createAsyncThunk(
  "SearchResult/searchNews",
  async (search, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${base_url}/news/search?query=${search}`
      );
      const res = await req.json();
      return res
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchNewsData = createSlice({
  name: "searchNews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SearchResult.pending, (state) => {
        state.loading = true;
        state.result = [];
        state.error = false;
      })
      .addCase(SearchResult.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
        state.error = false;
      })
      .addCase(SearchResult.rejected, (state, action) => {
        state.loading = false;
        state.result = [];
        state.error = action.payload || true;
      });
  },
});

export default searchNewsData.reducer;
