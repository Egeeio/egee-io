import * as React from "react";

import Layout from "../components/layout";

const SecondPage = () => (
  <Layout>
    <section className="hero eg-blue-black is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="eg-title has-text-white-bis">
            Hiya. Welcome to the website.
          </h2>
          <p className="has-text-white-bis">
            We're an alternative gaming community built with open source tools and technology.
          </p>
        </div>
      </div>
    </section>
    <section className="section has-background-real-black">
      <div className="container">
        <h2 className="eg-title has-text-white-bis">
          A little history...
        </h2>
        <p className="has-text-white-bis">
          Egee.io started way back in 2014 as a WordPress blog called BriansProjects
          and an accompanying YouTube channel. In 2015, BriansProjects switched from WordPress to Ghost.io
          and began using the Egee.io moniker. Fast-foward to 2016, Egee.io was completely redesigned as a
          landing page for the Egee.io community and our game servers.
        </p>
      </div>
    </section>
    <section className="section has-background-real-black">
      <div className="container">
        <h2 className="eg-title has-text-white-bis">
          Egee.io Today
        </h2>
        <p className="has-text-white-bis">
          Egee.io has evolved from a simple technology <a href="https://medium.com/&commat;egee_irl">blog</a> &amp; 
          <a href="https://www.youtube.com/channel/UCXa6sE6cKXcQ97vI0Emn1XA"> YouTube</a> channel to a fully-fledge gaming
          community with a strong focus on Open Source Software. Our community is mostly based out of Discord,
          which is not open source, however every piece of the Egee.io infrastructure is Open Source.
          From the Docker containers our game servers run in, to this website.
        </p>
      </div>
    </section>
    {/* <section className="section has-background-real-black">
      <div className="container">
        <h2 className="eg-title has-text-white-bis">
          Egee.io Software
        </h2>
        <p className="has-text-white-bis">
          The Egee.io website was originally written in EmberJS. It was later completely rewritten in ASP .NET Core
          with <a href="https://github.com/Egeeio/egeeio-website">Razor Pages</a>. The front-end side of the website 
          uses pure CSS with Bulma. The only JavaScript used on the site is for the social buttons in the footer.
        </p><br/>
        <p className="has-text-white-bis">
          The server-side of Egee.io runs exclusively in Docker containers. The website runs on the .NET Core image.
          The game servers run on <a href="https://hub.docker.com/u/egeeio/">custom</a> Egee.io Docker images which are based on Ubuntu. Each game server container
          is slightly unique and are organized in a <a href="https://github.com/Egeeio/gsc-meta">meta-project</a>
          on the Egee.io organization GitHub.
        </p>
      </div>
    </section> */}
    <section className="section has-background-real-black">
      <div className="container">
        <h2 className="eg-title has-text-white-bis">
          Who's Egee?
        </h2>
        <p className="has-text-white-bis">
          Egee is Brian, a software developer from a Pacific Northwest region of the USA. What started out as a hobby,
          Egee.io has grown into a full-blown community and a YouTube channel with over 2 million views. You can check
          out his YouTube channel <a href="https://www.youtube.com/channel/UCXa6sE6cKXcQ97vI0Emn1XA">here</a>.
        </p><br/>
        <p className="has-text-white-bis">
          Brian works for a healthcare company as a senior software enginer doing C# and DevOps stuff. While it would
          be great to quit the 9-5 job and focus on Egee.io and open source projects, he's not quite there yet.
          You can support Brian directly by contributing to the <a href="https://www.patreon.com/egeeirl">Egee.io Patreon!</a>
        </p>
      </div>
    </section>
  </Layout>
)

export default SecondPage
