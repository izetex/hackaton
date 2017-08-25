var express = require('express');
var router = express.Router();
const Web3 = require('web3');
const ProviderEngine = require('web3-provider-engine');
const Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
const WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
const EthereumWallet = require('ethereumjs-wallet');

const provider_url = 'http://hackaton.izx.io:18555';
const wallet_addr = '0xe8798c379d5ca8b3ac3bfeb354c7a70884206e5d';
const wallet_pkey = 'f07743ca2985cdd9cedd61ec393366c3d0147dc2cef1758234c1427700347c9a';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render( 'index', { title: 'Hackaton', default_addr: wallet_addr } );
});

router.get('/balance', function(req, res){


    var address = req.query.address;
    const web3 = new Web3(new Web3.providers.HttpProvider(provider_url));

    web3.eth.getBalance(address,
        function(error, result){
            console.log(error, result);
            if(error || !result) {
                res.send({time: Date.now(), address: address, balance: error, state: 'danger'  });
            }else{
                var balance = web3.fromWei(result);
                res.send({time: Date.now(), address: address, balance: balance, state: 'success'  });
            }
        }
    );


});


router.post('/send', function(req, res){

    var address = req.body.address;
    var amount = req.body.amount;

    if(!address){
        res.send({time: Date.now(), address: address, result: 'Адрес не указан', state: 'warning' });
        return;
    }else if(!amount || amount > 0.01){
        res.send({time: Date.now(), address: address, result: 'Сумма неверная', state: 'warning'  });
        return;
    }

    const wallet = EthereumWallet.fromPrivateKey(Buffer.from(wallet_pkey, 'hex'));
    const engine = new ProviderEngine();
    engine.addProvider(new WalletSubprovider(wallet, {}));
    engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(provider_url)));

    engine.start();
    const web3 = new Web3(engine);

    web3.eth.sendTransaction( { from: wallet.getAddressString(), to: address, value: web3.toWei(amount), gas: '100000'},
        function(error, result){
            console.log(error, result);

            if(error || !result) {
                res.send({time: Date.now(), address: address, result: error });
            }else{
                res.send({time: Date.now(), address: address, tx: result, result: 'ok' });
            }

            engine.stop();
        }
    );



});

module.exports = router;
