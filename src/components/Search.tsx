import React, { useEffect } from "react";
import { useAppDispatch } from "../stores/hooks";
import { fetchWeather } from "../stores/weather";
import { reSet } from "../stores/weather";
import { List, Icon, Image } from "semantic-ui-react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import "semantic-ui-css/semantic.min.css";

interface SearchProps {
  page: string;
  data: any;
  status: string;
  type: string;
  datatype: string;
}

interface formData {
  city: string;
}

function Search(props: SearchProps) {
  console.log("search");
  const dispatch = useAppDispatch();

  const validateCity = (value: string) => {
    let error;
    if (!value) {
      error = "required";
    } else if (/^[0-9a-zA-Z]+$/i.test(value)) {
      error = "英数字はダメです。";
    }
    return error;
  };

  useEffect(() => {
    dispatch(reSet());
  }, [dispatch]);

  return (
    <div style={{ minHeight: "78vh" }}>
      <h1 role="contentinfo">This is {props.page}</h1>

      {/* formik don't validate agian after commit if you dont reset form */}
      <Formik
        initialValues={{ city: "" }}
        onSubmit={(
          values: formData,
          { setSubmitting, resetForm }: FormikHelpers<formData>
        ) => {
          console.log("city:" + values.city);
          dispatch(fetchWeather({ type: props.datatype, city: values.city }));
          setSubmitting(false);
          resetForm({ values: { city: "" } });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="city" validate={validateCity}></Field>
            <ErrorMessage name="city" component="p" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* <input type="text" ref={props.inputRef} />
      <button onClick={props.handle}>confirm</button> */}

      {props.type === "weather" && props.data && (
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
      {props.type === "forecast" && props.data && (
        // <p>{JSON.stringify(props.data, null, 2)}</p>
        <List verticalAlign="middle">
          <List.Item>
            <Icon name="home" color="blue" />
            <List.Content>
              <List.Header>都市名:{props.data.city.name}</List.Header>
            </List.Content>
          </List.Item>
          {props.data.list.map((item: any) => {
            return (
              <List.Item key={item.dt}>
                <List.Content>
                  <List.Description>
                    <Image
                      avatar
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    />
                    <b>日付:</b> {item.dt_txt} <b>気温:</b>
                    {item.main.temp}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      )}
      {props.status === "error" && <p>エラーが発生しました。</p>}
    </div>
  );
}

export default Search;
