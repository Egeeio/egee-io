define('egeeio/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('egeeio/tests/helpers/carousel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/carousel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/carousel.js should pass jshint.\nhelpers/carousel.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/carousel.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/carousel.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('egeeio/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('egeeio/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('egeeio/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'egeeio/tests/helpers/start-app', 'egeeio/tests/helpers/destroy-app'], function (exports, _qunit, _egeeioTestsHelpersStartApp, _egeeioTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _egeeioTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _egeeioTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('egeeio/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('egeeio/tests/helpers/navigation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/navigation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/navigation.js should pass jshint.\nhelpers/navigation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/navigation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/navigation.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('egeeio/tests/helpers/parallax.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/parallax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/parallax.js should pass jshint.\nhelpers/parallax.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/parallax.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/parallax.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('egeeio/tests/helpers/resolver', ['exports', 'egeeio/resolver', 'egeeio/config/environment'], function (exports, _egeeioResolver, _egeeioConfigEnvironment) {

  var resolver = _egeeioResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _egeeioConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _egeeioConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('egeeio/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('egeeio/tests/helpers/start-app', ['exports', 'ember', 'egeeio/app', 'egeeio/config/environment'], function (exports, _ember, _egeeioApp, _egeeioConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _egeeioConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _egeeioApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('egeeio/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('egeeio/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('egeeio/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 15, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('egeeio/tests/routes/contributors.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/contributors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contributors.js should pass jshint.\nroutes/contributors.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/contributors.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('egeeio/tests/routes/distros.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/distros.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/distros.js should pass jshint.\nroutes/distros.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/distros.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('egeeio/tests/routes/faq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/faq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/faq.js should pass jshint.\nroutes/faq.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/faq.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('egeeio/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('egeeio/tests/routes/servers.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/servers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/servers.js should pass jshint.\nroutes/servers.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/servers.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('egeeio/tests/test-helper', ['exports', 'egeeio/tests/helpers/resolver', 'ember-qunit'], function (exports, _egeeioTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_egeeioTestsHelpersResolver['default']);
});
define('egeeio/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('egeeio/tests/unit/helpers/carousel-test', ['exports', 'egeeio/helpers/carousel', 'qunit'], function (exports, _egeeioHelpersCarousel, _qunit) {

  (0, _qunit.module)('Unit | Helper | carousel');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _egeeioHelpersCarousel.carousel)([42]);
    assert.ok(result);
  });
});
define('egeeio/tests/unit/helpers/carousel-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/carousel-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/carousel-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/helpers/navigation-test', ['exports', 'egeeio/helpers/navigation', 'qunit'], function (exports, _egeeioHelpersNavigation, _qunit) {

  (0, _qunit.module)('Unit | Helper | navigation');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _egeeioHelpersNavigation.navigation)([42]);
    assert.ok(result);
  });
});
define('egeeio/tests/unit/helpers/navigation-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/navigation-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/navigation-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/helpers/parallax-test', ['exports', 'egeeio/helpers/parallax', 'qunit'], function (exports, _egeeioHelpersParallax, _qunit) {

  (0, _qunit.module)('Unit | Helper | parallax');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _egeeioHelpersParallax.parallax)([42]);
    assert.ok(result);
  });
});
define('egeeio/tests/unit/helpers/parallax-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/parallax-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/parallax-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/community-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:community', 'Unit | Route | community', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/community-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/community-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/community-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/contributors-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contributors', 'Unit | Route | contributors', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/contributors-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/contributors-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contributors-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/distros-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:distros', 'Unit | Route | distros', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/distros-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/distros-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/distros-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/faq-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:faq', 'Unit | Route | faq', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/faq-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/faq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/faq-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('egeeio/tests/unit/routes/servers-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:servers', 'Unit | Route | servers', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('egeeio/tests/unit/routes/servers-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/servers-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/servers-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('egeeio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map