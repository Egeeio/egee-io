import createBrowserHistory from "history/createBrowserHistory";
import * as React from "react";
import { Route, Router } from "react-router";
import Footer from "./footer";
import Index from "./index/index";
import NavBar from "./nav";
import Servers from "./servers/servers";

import "./app.less";

const browserHistory = createBrowserHistory();

export default class HelloWorld extends React.Component {
  public render() {
    return (
      <div>
        <NavBar/>
        <Router history={browserHistory}>
          <switch>
            <Route exact={true} path="/" component={Index}/>
            <Route exact={true} path="/servers" component={Servers}/>
          </switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}
