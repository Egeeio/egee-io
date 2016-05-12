import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('distribution-scale', 'Integration | Component | distribution scale', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{distribution-scale}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#distribution-scale}}
      template block text
    {{/distribution-scale}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
