import Ember from 'ember'

export function carousel () {
  $(document).ready(() => {
    $('.carousel').carousel()
  })
}

export default Ember.Helper.helper(carousel)
