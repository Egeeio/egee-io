import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('faq-compatible', 'Integration | Component | faq compatible', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{faq-compatible}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#faq-compatible}}
      template block text
    {{/faq-compatible}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
