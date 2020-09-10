import React from "react";
import { DashboardRoute } from "./DashboardRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={DashboardRoute} />
        </Switch>
      </div>
    </Router>
  );
};
