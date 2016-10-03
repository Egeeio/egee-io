import Ember from 'ember';

export function gameTitle(title) {
  const normalizeTitle = title.pop();
  switch (normalizeTitle) {
    case 'gmod':
      return Ember.String.htmlSafe('Garrys Mod');
    case 'minecraft':
      return Ember.String.htmlSafe('Minecraft');
    case 'terraria':
      return Ember.String.htmlSafe('Terraria');
    case 'minetest':
      return Ember.String.htmlSafe('Mine Test');
    case 'quakeworld':
      return Ember.String.htmlSafe('Quake World');
    case 'quake2':
      return Ember.String.htmlSafe('Quake 2');
    case 'zomboid':
      return Ember.String.htmlSafe('Project Zomboid');
    default:
      return 'something bad';
  }
}

export default Ember.Helper.helper(gameTitle);
