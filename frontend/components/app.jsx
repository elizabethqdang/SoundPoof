import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";

const App = () => (
  <div>
    <Switch>
      <Route component={Splash} />
    </Switch>
  </div>
);

export default App;
