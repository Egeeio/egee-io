import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('minecraft-server', 'Integration | Component | minecraft server', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{minecraft-server}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#minecraft-server}}
      template block text
    {{/minecraft-server}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
