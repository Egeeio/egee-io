import Ember from 'ember'

export function materialSlider () {
  $(document).ready(function () {
    $('.slider').slider({full_width: true})
  })
}

export default Ember.Helper.helper(materialSlider)
