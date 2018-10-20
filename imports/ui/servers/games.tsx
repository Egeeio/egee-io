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
                <div className="card-content">
                  <div className="content">
                    <h4>Egee & Chill | No Decay | Discord</h4>
                    <span><b>Server Rules</b></span><br/>
                    <span className="card-rules">1) Event areas are off limits unless in use.</span><br/>
                    <span className="card-rules">2) Don't grief: foundation wiping, cupboard locking, trapping sleepers, etc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/games/tf24by3.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                  <h4>Egee & Gibs</h4>
                    <span><b>Server Rules</b></span><br/>
                    <span className="card-rules">1) Play Nice.</span><br/>
                    <span className="card-rules">2) Have Fun.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/games/minecraft4by3.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Egee & Build</h4>
                    <span><b>Server Rules</b></span><br/>
                    <span className="card-rules">1) Absolutely <b>no</b> cheating (ESP in PropHunt, etc)</span><br/>
                    <span className="card-rules">2) Do not try to crash the server (It's temping, I know)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
