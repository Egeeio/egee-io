import * as React from "react";
import "./app.less";
import Footer from "./footer";
import IndexHero from "./indexHero";
import IndexOSection from "./indexOSection";
import NavBar from "./nav";

export default class HelloWorld extends React.Component {
  public render() {
    return (
      <div>
        <NavBar/>
        <IndexHero/>
        <IndexOSection/>
        <Footer/>
      </div>
    );
  }
}
