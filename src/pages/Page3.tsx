import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import React from "react";
import { useAppSelector } from "../stores/hooks";
// import { fetchWeather } from "../stores/weather";

function Page3() {
  // log
  console.log("3画面目");

  // const data = useSelector(state => state.weather.data);
  const data = useAppSelector((state) => state.weather.data);
  const status = useAppSelector((state) => state.weather.status);
  const type = useAppSelector((state) => state.weather.type);

  // dispatch
  // const dispatch = useAppDispatch();

  //inputRef
  const inputRef = React.createRef<HTMLInputElement>();

  // button click handle
  // const clickHandle = () =>
  // dispatch(fetchWeather({ type: "forecast", city: inputRef.current?.value }));

  return (
    <React.Fragment>
      <Header />
      <Search
        inputRef={inputRef}
        page="page3"
        data={data}
        status={status}
        type={type}
        datatype="forecast"
      />
      <Footer />
    </React.Fragment>
  );
}

export default Page3;
