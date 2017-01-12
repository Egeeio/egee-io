import Ember from 'ember'

export function parallax () {
  $(document).ready(() => {
    $('.parallax').parallax()
  })
}

export default Ember.Helper.helper(parallax)
