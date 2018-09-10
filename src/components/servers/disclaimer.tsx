import * as React from "react";

export default class Disclaimer extends React.Component {
  public render() {
    return (
      <section className="section is-small eg-blue-black">
        <div className="container">
          <p>
            This page is a work in progress however, if you see a server listed here, you can assume it is up.
            We also have quite a few unlisted servers that aren't listed here because they aren't always up.
          </p>
          <p>
            Join our Discord server for more information about our unlisted servers.
          </p><br/>
          <p>
            All servers have the following rules:
          </p>
          <span className="card-rules has-text-white-bis"><b>1) Use common sense: don't cheat or hack.</b></span><br/>
          <span className="card-rules has-text-white-bis"><b>2) No spamming or advertising in chat.</b></span><br/>
          <span className="card-rules has-text-white-bis"><b>3) Do not harass the Admins or ask/imply for items, kill logs, etc.</b></span><br/><br/>
          <p>
            If you have issues connecting to one of our servers, or you would like to see a new server added,
            message an admin on our <a href="https://discord.gg/tVyBHAU">Discord server</a> or create an issue on our GitHub repo.
          </p><br/>
            <a href="https://github.com/egeeio/gsc-meta/issues">
              <button
                className="button is-warning is-outlined">
                Issues <i className="fa-padding fab fa-github-alt"/>
              </button>
            </a>

        </div>
      </section>
    );
  }
}
