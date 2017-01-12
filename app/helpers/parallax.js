import Ember from 'ember'

export function parallax () {
  $(document).ready(function() {
    $('.parallax').parallax()
  })
}

export default Ember.Helper.helper(parallax)
