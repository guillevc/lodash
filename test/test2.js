var jsc = require("jsverify");
var _ = require('lodash');

var camelCaseIdempotent =
  jsc.forall("asciinestring", function (str) {
    console.log("testing '" + str + "'");
    return _.isEqual(_.camelCase(_.camelCase(str)), _.camelCase(str));
  });

jsc.check(camelCaseIdempotent);

console.log(_.camelCase('0aW'), _.camelCase(_.camelCase('0aW')));
