import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

    
const initialState = {
  loading: false,
  subscribed: null,
  error: false,
};

export const subscribeEmail = createAsyncThunk(
  "subscribeSlice/subscribeEmail",
  async (email, { rejectWithValue }) => {
    try {
      const req = await fetch(`${base_url}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const res = await req.json();
      if(req.status!==200) {
        return rejectWithValue(res.message);
      }
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const subscribeSlice = createSlice({
  name: "subscribeSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(subscribeEmail.pending, (state) => {
        state.loading = true;
        state.subscribed = false;
        state.error = false;
      })
      .addCase(subscribeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribed = true;
        state.error = false;
      })
      .addCase(subscribeEmail.rejected, (state, action) => {
        state.loading = false;
        state.subscribed = false;
        state.error = action.payload || true;
      });
  },
});

export default subscribeSlice.reducer;
