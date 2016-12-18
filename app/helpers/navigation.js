import Ember from 'ember';

export function navigation() {
  (function($){
    $(function(){

      $('.button-collapse').sideNav();

    }); // end of document ready
  })(jQuery); // end of jQuery name space
}

export default Ember.Helper.helper(navigation);
