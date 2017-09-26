var test = require('tape');
var cmd = require('../lib/bulkwallet');

test('argument missing or not a number', function(t) {
    t.plan(2);
    // Eg: bitaddress bulkwallet
    // error: bulkwallet <number> argument missing
    t.notOk(cmd());

    // Eg: bitaddress bulkwallet NaN
    // error: bulkwallet <number> argument should be a number
    t.notOk(cmd('NaN'));

});

// Eg: bitaddress bulkwallet 10
test('should generate some new addresses', function(t) {
    t.plan(1);
    t.ok(cmd(10));
});

// BIP38 Encrypt
// test('should generate some new addresses and encrypt private keys', function(t) {
//     t.plan(2);
//     var pairs = cmd(10, 'your_pass_phrase');
//
//     // t.deepEqual(pair.address, '1FTffDv4zYtJ4nuYsNzP1YYg53WcqRjRRk');
//     // t.deepEqual(pair.privateKey, 'L3PieuWbXdacNy8XBiCTi8W5XKrteq4zMJzfYAjKL3LyhAiVPY7T');
// });