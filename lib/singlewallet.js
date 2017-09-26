var fs          = require('fs');
var randomBytes = require('randombytes');
var qrcode      = require('qrcode-terminal');
var bitcoin     = require('bitcoinjs-lib');
var typeforce   = require('typeforce');
var BigInteger  = require('bigi');
var ecurve      = require('ecurve');
var wif         = require('wif');
var PDF         = require('./pdf');

function SingleWallet() {
    this.buffer = null;
}

SingleWallet.prototype.getAddress = function(options) {
    var keyPair = this.makeRandom(options);
    return keyPair.getAddress();
};

SingleWallet.prototype.getPrivateKey = function() {
    return wif.encode(128, this.buffer, true);
};

SingleWallet.prototype.getPair = function(options) {
    return {
        address: this.getAddress(options),
        privateKey: this.getPrivateKey()
    }
};

SingleWallet.prototype.makeRandom = function(options) {
    options = options || {};
    var rng = options.rng || randomBytes;
    var secp256k1 = ecurve.getCurveByName('secp256k1');

    var d;
    do {
        var buffer  = rng(32);
        typeforce(Buffer256bit(), buffer);

        d = BigInteger.fromBuffer(buffer)
    } while (d.signum() <= 0 || d.compareTo(secp256k1.n) >= 0);

    this.buffer = buffer;

    return new bitcoin.ECPair(d, null, options)
};

function Buffer256bit() {
    return typeforce.BufferN(32);
}

module.exports = function(cmd, env) {
    // generate a new address
    // $bitaddress singlewallet
    if (typeof cmd === 'object') {
        var pair = new SingleWallet().getPair();
        console.log('Bitcoin Address: ' + pair.address);
        if (cmd.qrcode) {
            console.log('QRCode: ');
            qrcode.generate(pair.address);
            console.log('\n');
        }
        var str = cmd.qrcode ? 'Private Key: ' : 'Private Key:     ';
        console.log(str + pair.privateKey);
        if (cmd.qrcode) {
            console.log('QRCode: ');
            qrcode.generate(pair.privateKey)
        }
        if (cmd.output) {
            // print to pdf with string and qrcode
            return PDF(cmd.output, pair)
        }
        
        return pair;
    }
    
    console.log('\n Usage: bitaddress singlewallet [options]\n');
    return false;
};

module.exports.SingleWallet = SingleWallet;