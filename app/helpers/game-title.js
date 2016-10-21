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
    case 'minecraft-modded':
      return Ember.String.htmlSafe('Modded Minecraft');
    default:
      return 'Game Title is missing from game-title.js file';
  }
}

export default Ember.Helper.helper(gameTitle);
