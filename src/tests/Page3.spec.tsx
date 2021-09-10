import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { rest } from "msw";
import { setupServer } from "msw/node";
import store from "../stores";
import Page3 from "../pages/Page3";
import forecast from "../mock/forecast.json";

const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      const city = req.url.searchParams.get("q");
      if (city == "上海") {
        return res(ctx.status(404, "city name is wrong."));
      } else {
        return res(ctx.json(forecast));
      }
    }
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("page3 unit test", () => {
  test("snapshot", () => {
    const dom = render(
      <Provider store={store}>
        <Router>
          <Page3 />
        </Router>
      </Provider>
    );
    expect(dom).toMatchSnapshot();
  });

  test("formik validation", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Page3 />
        </Router>
      </Provider>
    );
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button");
    input.focus();
    userEvent.click(await screen.findByText("网站地图"));
    expect(await screen.findByText("required")).toBeInTheDocument();
    userEvent.type(input, "123qwe");
    expect(await screen.findByText("英数字はダメです。")).toBeInTheDocument();
    userEvent.click(btn);
    expect(
      await screen.queryByText(/都市名:Midsiberia1908/i)
    ).not.toBeInTheDocument();
  });

  test("input,click and getdata", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Page3 />
        </Router>
      </Provider>
    );
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button");

    userEvent.type(input, "東京");
    expect(input).toHaveValue("東京");
    userEvent.click(btn);
    expect(
      await screen.findByText(/都市名:Midsiberia1908/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText("エラーが発生しました。")
    ).not.toBeInTheDocument();
    userEvent.clear(input);
    userEvent.type(input, "上海");
    expect(input).toHaveValue("上海");
    userEvent.click(btn);
    expect(
      await screen.findByText("エラーが発生しました。")
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/都市名:Midsiberia1908/i)
    ).not.toBeInTheDocument();
  });
});
