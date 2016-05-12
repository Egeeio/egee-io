import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('distribution-arch', 'Integration | Component | distribution arch', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{distribution-arch}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#distribution-arch}}
      template block text
    {{/distribution-arch}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
