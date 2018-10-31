import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | servers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:servers');
    assert.ok(route);
  });
});
