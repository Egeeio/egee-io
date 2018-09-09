import React from "react";

export default class OsSection extends React.Component {
  public render() {
    return (
      <section className="section has-background-real-black">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image is-256x256">
                <img src="/images/opensource0.png" alt="Open Source image logo thing"/>
              </figure>
            </div>
            <div className="column">
              <h1 className="subtitle has-text-white-ter">Powered By Open Source Software</h1>
              <p>
                Egee.io is self-hosted &amp; powered by open source technologies.
                We don't use any cloud providers or hosting platforms.
                This allows us to control of our software choices and remain committed to open source software.
              </p><br/>
              <p>
                If you'd like to learn more about our infrastructure and software stack,
                you can find us on <a href="https://github.com/Egeeio">GitHub </a>
                or read and learn more about us <a href="/about">here</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
