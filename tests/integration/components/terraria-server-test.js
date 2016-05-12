import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('terraria-server', 'Integration | Component | terraria server', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{terraria-server}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#terraria-server}}
      template block text
    {{/terraria-server}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
