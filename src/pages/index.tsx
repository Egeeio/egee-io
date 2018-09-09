import * as React from "react";
import Hero from "../components/index/hero";
import OsSection from "../components/index/osSection";
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
