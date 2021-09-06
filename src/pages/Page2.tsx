import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import React from "react";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { fetchWeatherData } from "../stores/weather";
import "semantic-ui-css/semantic.min.css";

function Page2() {
  // log
  console.log("2画面目");

  // const data = useSelector(state => state.weather.data);
  const data = useAppSelector((state) => state.weather.data);
  const status = useAppSelector((state) => state.weather.status);
  const errorMessage = useAppSelector((state) => state.weather.errorMessage);

  // dispatch
  const dispatch = useAppDispatch();

  //inputRef
  const inputRef = React.createRef<HTMLInputElement>();

  // button click handle
  const clickHandle = () =>
    dispatch(fetchWeatherData("weather", inputRef.current?.value));

  return (
    <React.Fragment>
      <Header />
      <Search
        inputRef={inputRef}
        handle={clickHandle}
        page="page2"
        data={data}
        status={status}
        errorMessage={errorMessage}
      />
      <Footer />
    </React.Fragment>
  );
}

export default Page2;
