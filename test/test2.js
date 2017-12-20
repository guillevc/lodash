var jsc = require("jsverify");
var _ = require('lodash');

var sortIdempotent =
  jsc.forall("string -> nat", "array string", function (f, arr) {
    return _.isEqual(_.sortBy(_.sortBy(arr, f), f), _.sortBy(arr, f));
  });

var intersectionCommutative =
  jsc.forall("array", "array", function (a1, a2) {
    return _.isEqual(_.intersection(a1, a2), _.intersection(a2, a1));
  });

console.log('sortIdempotent');
jsc.check(sortIdempotent);

console.log('intersectionCommutative');
jsc.check(intersectionCommutative);
