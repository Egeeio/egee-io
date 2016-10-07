import Ember from 'ember';

export function personaName(name) {
  const normalizeName = name.pop();
  switch (normalizeName) {
    case 'egee':
      return Ember.String.htmlSafe('Egee');
    case 'monkey':
      return Ember.String.htmlSafe('Striped_Monkey');
    case 'ghost':
      return Ember.String.htmlSafe('GhostSquad57');
    case 'omega':
      return Ember.String.htmlSafe('Omegapex');
    case 'rice':
      return Ember.String.htmlSafe('Arroz (rice)');
    case 'teal':
      return Ember.String.htmlSafe('Teal1500');
    case 'sudo':
      return Ember.String.htmlSafe('Sudoshred');
    default:
      return 'Game Title is missing from game-title.js file';
  }
}

export default Ember.Helper.helper(personaName);
