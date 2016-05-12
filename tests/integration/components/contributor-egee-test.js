import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contributor-egee', 'Integration | Component | contributor egee', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contributor-egee}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contributor-egee}}
      template block text
    {{/contributor-egee}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
