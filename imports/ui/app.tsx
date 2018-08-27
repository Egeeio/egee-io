import * as React from "react";
import "./app.less";
import Footer from "./footer";
import IndexHero from "./indexHero";
import NavBar from "./nav";

export default class HelloWorld extends React.Component {
  public render() {
    return (
      <body>
        <NavBar/>
        <IndexHero/>
        <Footer/>
      </body>
    );
  }
}
