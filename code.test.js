const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

assert(bottomupdp(1) === 2.0);
assert(bottomupdp(2) === 2.5);
assert(bottomupdp(4) === 2.708333333333333);
assert(bottomupdp(10) === 2.7182818011463845);
assert(bottomupdp(50) === 2.7182818284590455);
assert(bottomupdp(100) === 2.7182818284590455);

