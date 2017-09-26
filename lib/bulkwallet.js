var SingleWallet = require('./singlewallet').SingleWallet;
var PDF = require('./pdf');

module.exports = function(cmd, env) {
    var pair = null;
    if (!env) env = {};
    if (typeof cmd === 'object') {
        if (cmd.startwith) {
            pair = handle(cmd.startwith);
        } else if (cmd.endwith) {
            pair = handle(null, cmd.endwith);
        } else {
            return console.log('\n error: bulkwallet [number] argument missing\n');
        }
        if (cmd.output) {
            PDF(cmd.output, pair)
        }
        return console.log('times: ' + pair.times + '\n' + pair.address +'", "' + pair.privateKey + '"');
    }

    var pairs = [];
    if (!isNaN(parseInt(cmd)) && parseInt(cmd) == cmd) {
        var len = parseInt(cmd);
        for (var i = 0; i < len; i++) {
            var single = new SingleWallet();
            pair = single.getPair();
            console.log(i + 1 + ': "' + pair.address +'", "' + pair.privateKey + '"');
            pairs.push(pair);
        }
        
        if (env.output) {
            PDF(env.output, pairs)
        }
        
        return pairs;
    }
    
    return console.log('\n error: bulkwallet <number> argument should be a number\n');
};

function handle(prefix, suffix) {
    var times = 0;
    var arg0 = 0;
    var arg1;
    var str;

    if (prefix) {
        str = prefix;
        arg1 = prefix.length;
    } else {
        str = suffix;
        arg0 = -suffix.length;
    }

    while (true) {
        var single = new SingleWallet();
        var pair = single.getPair();
        times++;
        if (pair.address.slice(arg0, arg1) === str) break;
    }

    pair.times = times;
    return pair;
}