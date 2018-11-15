import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | secretsanta', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:secretsanta');
    assert.ok(route);
  });
});
