import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/currentweather">
            <Page2 />
          </Route>
        </Switch>
      </Router>
    );
    userEvent.click(screen.getByText("Page2"));
    expect(screen.getByRole("contentinfo").textContent).toBe("This is page2");
  });
  test("click link to page3", () => {
    render(
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
    );
    userEvent.click(screen.getByText("Page3"));
    expect(screen.getByRole("contentinfo").textContent).toBe("This is page3");
  });
});
