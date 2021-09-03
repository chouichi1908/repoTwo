import { createSlice } from "@reduxjs/toolkit";
import Axios, { AxiosRequestConfig } from "axios";


const initialState = {
  data: null,
  errorMessage: "",
  status: "",
};

const slice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    axiosStart: (state) => {
      Object.assign({}, state, { status: "loading" });
    },

    axiosSuccess: (state, action) => {
      return {data:action.payload,status:'success',errorMessage:''};
    },

    axiosFailed: (state, action) => {
      Object.assign({}, state, {
        errorMessage: action.payload,
        status: "error",
      });
    },

    reSet: () => {
      return { data:null, errorMessage: "", status: "" };
    },
  },
});

export const fetchWeatherData = (type:string,city?:string) => {
  return async (dispatch: any) => {
    dispatch(slice.actions.axiosStart());
    console.log('key:'+process.env.REACT_APP_WEATHER_API_KEY)
    try {
      const config: AxiosRequestConfig = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/${type}`,
        params: {
          q:city ,
          appid: process.env.REACT_APP_WEATHER_API_KEY,
        },
        // headers:{
        //   'Access-Control-Allow-Origin':'*'
        // }
      };
      const response = await Axios(config).then((res) => res.data);
      dispatch(slice.actions.axiosSuccess(response));
    } catch (error:any) {
      dispatch(slice.actions.axiosFailed(error.stack));
    }
  };
}

export default slice.reducer;

export const {reSet} = slice.actions;