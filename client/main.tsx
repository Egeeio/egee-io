import createBrowserHistory from "history/createBrowserHistory";
import { Meteor } from "meteor/meteor";
import * as React from "react";
import { render } from "react-dom";
import { Route, Router } from "react-router";
import App from "../imports/ui/app";

const browserHistory = createBrowserHistory();

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>, document.getElementById("root"));
});
