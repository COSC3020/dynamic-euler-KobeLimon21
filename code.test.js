const bottomupdp = require('./code.js');
const assert = require('assert');



assert(bottomupdp(1) === 2.0);
assert(bottomupdp(2) === 2.5);
assert(bottomupdp(4) === 2.708333333333333);
assert(bottomupdp(10) === 2.7182818011463845);
assert(bottomupdp(50) === 2.7182818284590455);
assert(bottomupdp(100) === 2.7182818284590455);

