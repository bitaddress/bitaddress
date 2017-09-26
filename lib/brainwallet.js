var message = '\n error: the passphrase you entenred is too short, at least 15 characters\n';
var bitcoin = require('bitcoinjs-lib');
var qrcode = require('qrcode-terminal');
var bigi = require('bigi');
var wif = require('wif');
var PDF = require('./pdf');
var inputLimit = 15;

module.exports = function(cmd, env) {
    if (typeof cmd === 'string') {
        if (cmd.length >= inputLimit) {
            var hash = bitcoin.crypto.sha256(cmd);
            var d = bigi.fromBuffer(hash);
            var address = new bitcoin.ECPair(d).getAddress();
            var privateKey = wif.encode(128, hash, true);

            if (!env) env = {};
            console.log('Bitcoin Address: ' + address);
            if (env.qrcode) {
                console.log('QRCode: ');
                qrcode.generate(address);
                console.log('\n');
            }
            var str = env.qrcode ? 'Private Key: ' : 'Private Key:     ';
            console.log(str + privateKey);
            if (env.qrcode) {
                console.log('QRCode: ');
                qrcode.generate(privateKey)
            }

            var pair = {
                address: address,
                privateKey: privateKey
            };

            if (env.output) {
                PDF(env.output, pair)
            }

            return pair;
        }
        console.log(message);
        return false;
    }

    console.log('\n error: brainwallet <passphrase> argument missing\n');
    return false;
};

