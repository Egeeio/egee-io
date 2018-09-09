import React from 'react'
import { Link } from 'gatsby'

export default class NavBar extends React.Component {
  public render() {
    return (
      <nav className="navbar eg-blue-black is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item has-text-white-bis" href="/">Egee.io</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item has-text-white-bis" href="/About">About</a>
          <a className="navbar-item has-text-white-bis" href="https://medium.com/&commat;egee_irl">Blog</a>
          <a className="navbar-item has-text-white-bis" href="/Servers">Servers</a>
          <a className="navbar-item has-text-white-bis" href="http://www.youtube.com/c/BriansprojectsNetEG">Videos</a>
        </div>
      </nav>
    );
  }
}
