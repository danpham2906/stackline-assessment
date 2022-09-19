import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../actions/actions';

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getData();
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: {},
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, { payload }) => {
      state.value = payload[0];
    },
  },
})

export default dataSlice.reducer