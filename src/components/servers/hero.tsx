// This class functionally does nothing
// It serves as reference code when creating a new component

import * as React from "react";

export default class Servers extends React.Component {
  public render() {
    return (
      <section className="hero eg-blue-black is-small">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle has-text-white-bis">
              These are the official servers we run.
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
