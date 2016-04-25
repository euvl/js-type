(function(factory) {
  var Type = factory;

  if (typeof window === 'object') {
    window.Type = Type;
  } else if (typeof global !=="undefined"  && Type(global) === 'global') {
    module.exports = Type;
  }
})(function() {
  /**
   *
   * @param object
   * @returns {string}
   * @constructor
   */
  var Type = function(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
  };

  /**
   *
   * @param type
   * @param object
   * @returns {boolean}
   */
  Type.is = function(type, object) {
    return Type(object) === type;
  };

  /**
   *
   * @param array
   */
  Type.extend = function(array) {
    array.forEach(function(type) {
      if (Type.is('string', type)) {
        window.Type['is' + type] = Type.is.bind(null, type);
      }
    });
  };

  /**
   * 
   */
  Type.extend(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp']);

  return Type;
});