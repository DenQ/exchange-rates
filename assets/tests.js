'use strict';

define('ember-platforma/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ember-platforma/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-platforma/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-platforma/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-platforma/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-platforma/tests/helpers/start-app', 'ember-platforma/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberPlatformaTestsHelpersStartApp, _emberPlatformaTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberPlatformaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberPlatformaTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-platforma/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-platforma/tests/helpers/resolver', ['exports', 'ember-platforma/resolver', 'ember-platforma/config/environment'], function (exports, _emberPlatformaResolver, _emberPlatformaConfigEnvironment) {

  var resolver = _emberPlatformaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberPlatformaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberPlatformaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-platforma/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-platforma/tests/helpers/start-app', ['exports', 'ember', 'ember-platforma/app', 'ember-platforma/config/environment'], function (exports, _ember, _emberPlatformaApp, _emberPlatformaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberPlatformaConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberPlatformaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-platforma/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-platforma/tests/initializers/trigger-resize-window.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/trigger-resize-window.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/trigger-resize-window.js should pass jshint.\ninitializers/trigger-resize-window.js: line 5, col 5, \'$\' is not defined.\n\n1 error');
  });
});
define('ember-platforma/tests/instance-initializers/injecting-routing.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | instance-initializers/injecting-routing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/injecting-routing.js should pass jshint.');
  });
});
define('ember-platforma/tests/instance-initializers/push-records.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | instance-initializers/push-records.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'instance-initializers/push-records.js should pass jshint.\ninstance-initializers/push-records.js: line 59, col 26, \'results\' is defined but never used.\ninstance-initializers/push-records.js: line 7, col 7, \'LIMIT\' is defined but never used.\n\n2 errors');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-footer/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('system/simple-footer', 'Integration | Component | system/simple footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 24
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'system/simple-footer', ['loc', [null, [1, 0], [1, 24]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'system/simple-footer', [], [], 0, null, ['loc', [null, [2, 4], [4, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-footer/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/system/simple-footer/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/system/simple-footer/component-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-header/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('system/simple-header', 'Integration | Component | system/simple header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 24
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'system/simple-header', ['loc', [null, [1, 0], [1, 24]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'system/simple-header', [], [], 0, null, ['loc', [null, [2, 4], [4, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-header/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/system/simple-header/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/system/simple-header/component-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-sidebar-control/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('system/simple-sidebar-control', 'Integration | Component | system/simple sidebar control', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 33
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'system/simple-sidebar-control', ['loc', [null, [1, 0], [1, 33]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'system/simple-sidebar-control', [], [], 0, null, ['loc', [null, [2, 4], [4, 38]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-sidebar-control/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/system/simple-sidebar-control/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/system/simple-sidebar-control/component-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-sidebar/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('system/simple-sidebar', 'Integration | Component | system/simple sidebar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 25
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'system/simple-sidebar', ['loc', [null, [1, 0], [1, 25]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'system/simple-sidebar', [], [], 0, null, ['loc', [null, [2, 4], [4, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-platforma/tests/integration/pods/components/system/simple-sidebar/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/system/simple-sidebar/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/system/simple-sidebar/component-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/integration/pods/components/table/cell/system-column/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('table/cell/system-column', 'Integration | Component | table/cell/system column', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 28
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'table/cell/system-column', ['loc', [null, [1, 0], [1, 28]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'table/cell/system-column', [], [], 0, null, ['loc', [null, [2, 4], [4, 33]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-platforma/tests/integration/pods/components/table/cell/system-column/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/table/cell/system-column/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/table/cell/system-column/component-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/integration/pods/components/wrap-modal/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('wrap-modal', 'Integration | Component | wrap modal', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'wrap-modal', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'wrap-modal', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-platforma/tests/integration/pods/components/wrap-modal/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/pods/components/wrap-modal/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/wrap-modal/component-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/lib/columns-definition/rates-exchanges.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | lib/columns-definition/rates-exchanges.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lib/columns-definition/rates-exchanges.js should pass jshint.');
  });
});
define('ember-platforma/tests/lib/data/currency-type.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | lib/data/currency-type.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lib/data/currency-type.js should pass jshint.');
  });
});
define('ember-platforma/tests/lib/data/eur.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | lib/data/eur.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/data/eur.js should pass jshint.\nlib/data/eur.js: line 1468, col 2, Missing semicolon.\n\n1 error');
  });
});
define('ember-platforma/tests/lib/data/usd.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | lib/data/usd.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'lib/data/usd.js should pass jshint.\nlib/data/usd.js: line 1468, col 2, Missing semicolon.\n\n1 error');
  });
});
define('ember-platforma/tests/models/currency-type.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/currency-type.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/currency-type.js should pass jshint.');
  });
});
define('ember-platforma/tests/models/rates-exchange.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/rates-exchange.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/rates-exchange.js should pass jshint.\nmodels/rates-exchange.js: line 11, col 18, \'Ember\' is not defined.\n\n1 error');
  });
});
define('ember-platforma/tests/pods/application/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/application/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/controller.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/components/system/simple-footer/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/system/simple-footer/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/system/simple-footer/component.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/components/system/simple-header/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/system/simple-header/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/system/simple-header/component.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/components/system/simple-sidebar-control/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/system/simple-sidebar-control/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/system/simple-sidebar-control/component.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/components/system/simple-sidebar/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/system/simple-sidebar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/system/simple-sidebar/component.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/components/table/cell/system-column/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/table/cell/system-column/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/table/cell/system-column/component.js should pass jshint.');
  });
});
define('ember-platforma/tests/pods/components/wrap-modal/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/wrap-modal/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/wrap-modal/component.js should pass jshint.\npods/components/wrap-modal/component.js: line 15, col 17, \'e\' is defined but never used.\n\n1 error');
  });
});
define('ember-platforma/tests/pods/exchanges/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/exchanges/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/exchanges/controller.js should pass jshint.\npods/exchanges/controller.js: line 3, col 87, Missing semicolon.\npods/exchanges/controller.js: line 25, col 25, Missing semicolon.\npods/exchanges/controller.js: line 23, col 11, \'lengthData\' is defined but never used.\n\n3 errors');
  });
});
define('ember-platforma/tests/pods/exchanges/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/exchanges/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/exchanges/route.js should pass jshint.');
  });
});
define('ember-platforma/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-platforma/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-platforma/tests/services/waiting-destroy-data.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/waiting-destroy-data.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/waiting-destroy-data.js should pass jshint.');
  });
});
define('ember-platforma/tests/test-helper', ['exports', 'ember-platforma/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberPlatformaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberPlatformaTestsHelpersResolver['default']);
});
define('ember-platforma/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-platforma/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/initializers/trigger-resize-window-test', ['exports', 'ember', 'ember-platforma/initializers/trigger-resize-window', 'qunit'], function (exports, _ember, _emberPlatformaInitializersTriggerResizeWindow, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | trigger resize window', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _emberPlatformaInitializersTriggerResizeWindow['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('ember-platforma/tests/unit/initializers/trigger-resize-window-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/initializers/trigger-resize-window-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/trigger-resize-window-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/instance-initializers/injecting-routing-test', ['exports', 'ember', 'ember-platforma/instance-initializers/injecting-routing', 'qunit', 'ember-platforma/tests/helpers/destroy-app'], function (exports, _ember, _emberPlatformaInstanceInitializersInjectingRouting, _qunit, _emberPlatformaTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | injecting routing', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _emberPlatformaTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _emberPlatformaInstanceInitializersInjectingRouting.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('ember-platforma/tests/unit/instance-initializers/injecting-routing-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/injecting-routing-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/injecting-routing-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/instance-initializers/push-records-test', ['exports', 'ember', 'ember-platforma/instance-initializers/push-records', 'qunit', 'ember-platforma/tests/helpers/destroy-app'], function (exports, _ember, _emberPlatformaInstanceInitializersPushRecords, _qunit, _emberPlatformaTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | push records', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _emberPlatformaTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _emberPlatformaInstanceInitializersPushRecords.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('ember-platforma/tests/unit/instance-initializers/push-records-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/push-records-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/push-records-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/models/currency-type-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('currency-type', 'Unit | Model | currency type', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-platforma/tests/unit/models/currency-type-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/currency-type-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/currency-type-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/models/rates-exchange-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('rates-exchange', 'Unit | Model | rates exchange', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-platforma/tests/unit/models/rates-exchange-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/rates-exchange-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rates-exchange-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/pods/application/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-platforma/tests/unit/pods/application/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/application/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/controller-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/pods/application/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-platforma/tests/unit/pods/application/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/application/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/pods/exchanges/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:exchanges', 'Unit | Controller | exchanges', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-platforma/tests/unit/pods/exchanges/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/exchanges/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/exchanges/controller-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/pods/exchanges/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:exchanges', 'Unit | Route | exchanges', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-platforma/tests/unit/pods/exchanges/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/exchanges/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/exchanges/route-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/services/waiting-destoroy-data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:waiting-destoroy-data', 'Unit | Service | waiting destoroy data', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-platforma/tests/unit/services/waiting-destoroy-data-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/waiting-destoroy-data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/waiting-destoroy-data-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/services/waiting-destroy-data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:waiting-destroy-data', 'Unit | Service | waiting destroy data', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-platforma/tests/unit/services/waiting-destroy-data-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/waiting-destroy-data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/waiting-destroy-data-test.js should pass jshint.');
  });
});
define('ember-platforma/tests/unit/services/wating-destroy-data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:wating-destroy-data', 'Unit | Service | wating destroy data', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-platforma/tests/unit/services/wating-destroy-data-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/wating-destroy-data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/wating-destroy-data-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-platforma/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
