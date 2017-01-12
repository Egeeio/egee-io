import Ember from 'ember'

export function modal () {
  $(document).ready(() => {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal()
  })
}

export default Ember.Helper.helper(modal)
