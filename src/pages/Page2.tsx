import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import React from "react";
import { useAppSelector } from "../stores/hooks";
import "semantic-ui-css/semantic.min.css";

function Page2() {
  // log
  console.log("2画面目");

  // const data = useSelector(state => state.weather.data);
  const data = useAppSelector((state) => state.weather.data);
  const status = useAppSelector((state) => state.weather.status);
  const type = useAppSelector((state) => state.weather.type);
  // dispatch
  // const dispatch = useAppDispatch();

  //inputRef
  // const inputRef = React.createRef<HTMLInputElement>();

  // button click handle
  // const clickHandle = () =>
  // dispatch(fetchWeatherData("weather", inputRef.current?.value));
  // dispatch(fetchWeather({ type: "weather", city: inputRef.current?.value }));

  return (
    <React.Fragment>
      <Header />
      <Search
        page="page2"
        data={data}
        status={status}
        type={type}
        datatype="weather"
      />
      <Footer />
    </React.Fragment>
  );
}

export default Page2;
