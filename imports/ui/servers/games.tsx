import * as React from "react";

export default class Games extends React.Component {
  public render() {
    return (
      <section>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/games/rust4by3.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
