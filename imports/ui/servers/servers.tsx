import Disclaimer from "./disclaimer";
import Games from "./games";
import Hero from "./hero";

import * as React from "react";

export default class Servers extends React.Component {
  public render() {
    return (
      <div>
        <Hero/>
        <Disclaimer/>
        <Games/>
      </div>
    );
  }
}
