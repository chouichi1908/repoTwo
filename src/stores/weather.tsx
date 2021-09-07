import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

const initialState = {
  data: null,
  status: "",
  type: "",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (
    args: { type: string; city: string | undefined },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const config: AxiosRequestConfig = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/${args.type}`,
        params: {
          q: args.city,
          appid: process.env.REACT_APP_WEATHER_API_KEY,
        },
      };
      // const response = await axios.get("/fun").then((res) => res.data);
      const response = await axios(config).then((res) => res.data);
      return response;
    } catch (err: any) {
      console.error("エラーが発生しました。");
      return rejectWithValue(err.response.data);
    }
  }
);

const slice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    reSet: () => {
      return { data: null, status: "", type: "" };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = "complete";
      state.data = action.payload;
      state.type = action.meta.arg.type;
      // console.log("payload:" + JSON.stringify(action.payload, null, 2));
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.status = "error";
      state.data = null;
      console.log("status:" + JSON.stringify(action.payload, null, 2));
    });
  },
});

export default slice.reducer;
export const { reSet } = slice.actions;
