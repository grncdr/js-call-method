module.exports = function (methodName) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function (thing) {
    switch (args.length) {
      case 0:
        return thing[methodName]();
      case 1:
        return thing[methodName](args[0]);
      case 2:
        return thing[methodName](args[0], args[1]);
      case 3:
        return thing[methodName](args[0], args[1], args[2]);
      case 4:
        return thing[methodName](args[0], args[1], args[2], args[3]);
      case 5:
        return thing[methodName](args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return thing[methodName](args[0], args[1], args[2], args[3], args[4], args[5]);
      default:
        return thing[methodName].apply(thing, args);
    }
  };
};
