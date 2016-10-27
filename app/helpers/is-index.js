import Ember from 'ember'

export function isIndex () {
  if (window.location.pathname === '/') {
    return Ember.String.htmlSafe(
      `<div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#fixed-tab-1" class="mdl-layout__tab is-active">Welcome</a>
        <a href="#fixed-tab-2" class="mdl-layout__tab">Games</a>
        <a href="#fixed-tab-3" class="mdl-layout__tab">About</a>
      </div>`)
  }
}

export default Ember.Helper.helper(isIndex)
