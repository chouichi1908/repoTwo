import React, { useEffect } from "react";
import { useAppDispatch } from "../stores/hooks";
import { reSet } from "../stores/weather";
import { List, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Search(props: any) {
  // const dispatch = useDispatch();
  console.log("search");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reSet());
  }, [props.inputRef.current?.value, dispatch]);

  return (
    <div style={{ minHeight: "78vh" }}>
      <h1 role="contentinfo">This is {props.page}</h1>
      <input type="text" ref={props.inputRef} />
      <button onClick={props.handle}>confirm</button>

      {props.data && (
        <List verticalAlign="middle">
          <List.Item>
            <Icon name="home" color="blue" />
            <List.Content>
              <List.Header>都市名:{props.data.name}</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            />
            <List.Content>
              <List.Header>気温:{props.data.main.temp}</List.Header>
              <List.Header>体感気温:{props.data.main.feels_like}</List.Header>
              <List.Header>最低気温:{props.data.main.temp_min}</List.Header>
              <List.Header>最高気温:{props.data.main.temp_max}</List.Header>
              <List.Header>気圧:{props.data.main.pressure}</List.Header>
              <List.Header>湿度:{props.data.main.humidity}</List.Header>
              <List.Header>風速:{props.data.wind.speed}</List.Header>
            </List.Content>
          </List.Item>
        </List>
      )}
      {props.status === "error" && <p>エラーが発生しました。</p>}
    </div>
  );
}

export default Search;
