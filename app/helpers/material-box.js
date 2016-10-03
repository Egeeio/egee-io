import Ember from 'ember';

export function materialBox() {
    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
}

export default Ember.Helper.helper(materialBox);
