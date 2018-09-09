import React from "react";
import Hero from "../components/hero";
import OsSection from "../components/osSection";
import Layout from "../components/layout";

export default class IndexPage extends React.Component {
  public render() {
    return (
      <Layout>
        <Hero/>
        <OsSection/>
      </Layout>
    );
  }
}
