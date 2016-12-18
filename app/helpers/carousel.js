import Ember from 'ember';

export function carousel() {
  $(document).ready(function(){
    $('.carousel').carousel();
  });
}

export default Ember.Helper.helper(carousel);
