import Disclaimer from "./disclaimer";
import Hero from "./hero";

import * as React from "react";

export default class Servers extends React.Component {
  public render() {
    return (
      <div>
        <Hero/>
        <Disclaimer/>
      </div>
    );
  }
}
