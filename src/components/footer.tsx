import * as React from "react";

export default class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer eg-blue-black">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="subtitle has-text-white-ter">Help Support Egee.io!</h1>
                <p>
                  We hope you enjoy our community. If you play on our servers
                  or just want to help support the community, you can by backing us on Patreon.
                  Any amount helps and is greatly appreciated!
                </p><br/>
                <a href="https://www.patreon.com/egeeirl">
                  <button
                    className="button is-info is-outlined">
                    Support Us
                  </button>
                </a>
            </div>
            <div className="column">
              <h1 className="subtitle has-text-white-ter">Chat With Us!</h1>
                <p>
                    We have a Discord server where we hang out
                    and coordinate events. If you want to participate
                    in the events and discussion, feel free to join in!
                </p><br/>
                <a href="https://discord.gg/tVyBHAU">
                  <button
                    className="button is-info is-outlined">
                    Join Our Discord
                  </button>
                </a>
            </div>
            <div className="column">
              <h1 className="subtitle has-text-white-ter">Connect</h1>
              <figure className="footer-button-padding">
                <a href="https://www.youtube.com/channel/UCXa6sE6cKXcQ97vI0Emn1XA">
                  <button
                    className="button is-white is-outlined">
                    YouTube<i className="fa-padding fab fa-youtube"/>
                  </button>
                </a>
              </figure>
              <figure className="footer-button-padding">
                <a href="https://twitter.com/egee_irl">
                  <button
                    className="button is-white is-outlined">
                    Twitter<i className="fa-padding fab fa-twitter"/>
                  </button>
                </a>
              </figure>
              <figure className="footer-button-padding">
                <a href="https://github.com/egee-irl">
                  <button
                    className="button is-white is-outlined">
                    GitHub<i className="fa-padding fab fa-github-alt"/>
                  </button>  
                </a>
              </figure>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
