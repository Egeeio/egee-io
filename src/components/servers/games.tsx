import * as React from "react";

import gmod from "../../images/games/gmod4by3.jpg";
import rust from "../../images/games/rust4by3.jpg";
import tf2 from "../../images/games/tf24by3.jpg";
import openspades from "../../images/games/openspades4by3.jpg";

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
                    <img src={ rust } alt="Placeholder image"/>
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
                    <img src={ gmod } alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Egee & Create</h4>
                    <span><b>Server Rules</b></span><br/>
                    <span className="card-rules">1) Absolutely <b>no</b> cheating (ESP in PropHunt, etc)</span><br/>
                    <span className="card-rules">2) Do not try to crash the server (It's temping, I know)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={ openspades } alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                  <h4>Egee & Shoot</h4>
                    <span><b>Server Rules</b></span><br/>
                    <span className="card-rules">1) Play Nice.</span><br/>
                    <span className="card-rules">2) Have Fun.</span>
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
