import Hero from "./hero";
import OSection from "./oSection";

import * as React from "react";

export default class Index extends React.Component {
  public render() {
    return (
      <div>
        <Hero/>
        <OSection/>
      </div>
    );
  }
}
