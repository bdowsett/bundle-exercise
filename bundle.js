(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      module.exports = (a, b) => {
        return a + b;
      };
    }
  });

  // mutiply.js
  var require_mutiply = __commonJS({
    "mutiply.js"(exports, module) {
      module.exports = (a, b) => {
        return a * b;
      };
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_mutiply();
  console.log(multiply(add(2, 2), 4));
})();
