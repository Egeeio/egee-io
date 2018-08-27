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
                <form>
                  <button className="button is-info is-outlined" formAction="https://www.patreon.com/egeeirl">Support Us</button>
                </form>
            </div>
            <div className="column">
              <h1 className="subtitle has-text-white-ter">Chat With Us!</h1>
                <p>
                    We have a Discord server where we hang out
                    and coordinate events. If you want to participate
                    in the events and discussion, feel free to join in!
                </p><br/>
                <form>
                  <button className="button is-info is-outlined" formAction="https://discord.gg/tVyBHAU">
                  Join Our Discord</button>
                </form>
            </div>
            <div className="column">
              <h1 className="subtitle has-text-white-ter">Connect</h1>
              <figure>
                <div className="g-ytsubscribe" data-channelid="UCXa6sE6cKXcQ97vI0Emn1XA" data-layout="default" data-theme="dark" data-count="default"/>
              </figure>
              <figure>
                <a href="https://twitter.com/egee_irl?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-count="false">Follow &commat;egee_irl</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              </figure>
              <figure>
                <a className="github-button" href="https://github.com/egee-irl" data-size="large" aria-label="Follow &commat;egee-irl on GitHub">Follow &commat;egee-irl</a>
              </figure>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
