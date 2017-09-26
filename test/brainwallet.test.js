var test = require('tape');
var cmd = require('../lib/brainwallet');

test('passphrase is not long enough', function(t) {
    t.plan(2);
    // bitaddress brainwallet your_input
    // error: the passphrase you entenred is too short, at least 15 characters
    t.notOk(cmd('your_input'));

    // bitaddress brainwallet
    // error: brainwallet <passphrase> argument missing
    t.notOk(cmd());

});

    // bitaddress brainwallet something_input_and_long_enough
test('should generate address and private key', function(t) {
    t.plan(2);
    var pair = cmd('something_input_and_long_enough');

    t.deepEqual(pair.address, '1FTffDv4zYtJ4nuYsNzP1YYg53WcqRjRRk');
    t.deepEqual(pair.privateKey, 'L3PieuWbXdacNy8XBiCTi8W5XKrteq4zMJzfYAjKL3LyhAiVPY7T');
});