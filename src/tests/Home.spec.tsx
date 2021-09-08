import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import rootStore from "../stores";

// global.window = { location: { pathname: null } };
global.window = Object.assign({}, global.window, {
  location: { pathname: null },
});

describe("Home page test", () => {
  test("Snapshot", () => {
    const domTree = render(
      <Router>
        <Home />
      </Router>
    );
    expect(domTree).toMatchSnapshot();
  });

  test("click link to page2", () => {
    render(
      <Provider store={rootStore}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/currentweather">
              <Page2 />
            </Route>
            <Route path="/forecasteachthreehours">
              <Page3 />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
    userEvent.click(screen.getByText("Page2"));
    expect(global.window.location.pathname).toEqual("/currentweather");
    // expect(screen.getByRole("contentinfo").textContent).toBe("This is page2");
  });
  test("click link to page3", () => {
    render(
      <Provider store={rootStore}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/currentweather">
              <Page2 />
            </Route>
            <Route path="/forecasteachthreehours">
              <Page3 />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
    userEvent.click(screen.getByText("Page3"));
    expect(global.window.location.pathname).toEqual("/forecasteachthreehours");
    // expect(screen.getByRole("contentinfo").textContent).toBe("This is page3");
  });
});
