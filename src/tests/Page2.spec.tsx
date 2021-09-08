import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page2 from "../pages/Page2";
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import store from "../stores";
import mockData from "../mock/weather.json";

export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      const city = req.url.searchParams.get("q");
      if (city == "東京") {
        return res(ctx.json(mockData), ctx.delay(150));
      } else if (city == "上海") {
        return res(ctx.status(404, "city name wrong."));
      }
    }
  ),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

jest.spyOn(console, "error");

describe("Page2 tests", () => {
  test("Snapshot test", () => {
    const dom = render(
      <Provider store={store}>
        <Router>
          <Page2 />
        </Router>
      </Provider>
    );
    expect(dom).toMatchSnapshot();
  });

  test("user type city and click comfirm", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Page2 />
        </Router>
      </Provider>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "東京");
    expect(screen.getByRole("textbox")).toHaveValue("東京");
    userEvent.click(screen.getByRole("button", { name: /Submit/i }));
    expect(await screen.findByText(/都市名:Osamu/i)).toBeInTheDocument();
  });

  test("test error when the city name is wrong", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Page2 />
        </Router>
      </Provider>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "上海");
    expect(screen.getByRole("textbox")).toHaveValue("上海");
    userEvent.click(screen.getByRole("button", { name: /Submit/i }));
    expect(
      await screen.findByText(/エラーが発生しました。/i)
    ).toBeInTheDocument();
    expect(console.error).toHaveBeenCalledWith("エラーが発生しました。");
  });
});
