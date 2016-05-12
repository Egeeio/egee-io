import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('distribution-ubuntu', 'Integration | Component | distribution ubuntu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{distribution-ubuntu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#distribution-ubuntu}}
      template block text
    {{/distribution-ubuntu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
