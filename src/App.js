import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SetEvaluationPage from "./components/SetEvaluationPage";
import StatisticsPage from "./components/StatisticsPage";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header>
        <NavLink exact to="/">Home</NavLink>
        {/* <NavLink to="/evaluations">Set Evaluations</NavLink> */}
        <NavLink to="/stats">Statistics</NavLink>
      </Header>

      <div style={{ padding: "1rem" }}>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/evaluations">
            <SetEvaluationPage />
          </Route>
          <Route path="/stats">
            <StatisticsPage />
          </Route>
          <Route path="/404">404</Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
