import * as React from "react";

export default class Hero extends React.Component {
  public render() {
    return (
      <section className="hero eg-blue-black is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white-bis">
              Egee.io
            </h1>
            <h2 className="subtitle has-text-white-bis">
              Be different. Play together.
            </h2>
            <form>
              <button className="button is-white is-outlined" formAction="/Servers">Our Servers</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
