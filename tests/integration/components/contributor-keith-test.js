import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contributor-keith', 'Integration | Component | contributor keith', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contributor-keith}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contributor-keith}}
      template block text
    {{/contributor-keith}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
