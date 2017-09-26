var test = require('tape');
var Buffer = require('safe-buffer').Buffer;
var cmd = require('../lib/singlewallet');
var SingleWallet = require('../lib/singlewallet').SingleWallet;

function rng() { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')}

test('Generate a new bitcoin address', function(t) {
    t.plan(2);

    var singleWallet = new SingleWallet();
    var pair = singleWallet.getPair({ rng: rng });

    t.deepEqual(pair.address, '1F5VhMHukdnUES9kfXqzPzMeF1GPHKiF64');
    t.deepEqual(pair.privateKey, 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1');
});

// $ bitaddress singlewallet somethingInput
test('should not input any arguments', function(t) {
    t.plan(1);
    t.notOk(cmd('something input'));
});