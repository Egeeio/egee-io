import Disclaimer from "../components/servers/disclaimer";
import Games from "../components/servers/games";
import Hero from "../components/servers/hero";
import Layout from "../components/layout";

import * as React from "react";

export default class Servers extends React.Component {
  public render() {
    return (
      <Layout>
        <Hero/>
        <Disclaimer/>
        <Games/>
      </Layout>
    );
  }
}
