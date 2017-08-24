var express = require('express');
var router = express.Router();
const Web3 = require('web3');
const ProviderEngine = require('web3-provider-engine');
const Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");

const provider_url = 'http://hackaton.izx.io:18555';
const wallet_addr = '0xe8798c379d5ca8b3ac3bfeb354c7a70884206e5d';
const wallet_pkey = 'f07743ca2985cdd9cedd61ec393366c3d0147dc2cef1758234c1427700347c9a';

/* GET home page. */
router.get('/', function(req, res, next) {

  /*
    const engine = new ProviderEngine();
    engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(provider_url)));
    engine.start();
    const web3 = new Web3(engine);


    web3.eth.getBalance(wallet_addr,
        function(error, result){

            if(error || !result) {
                console.log('ERROR '+error);
            }else{
                console.log('BALANCE of '+wallet_addr+' ='+web3.fromWei(result));
            }
        }
    );
    */

    res.render( 'index', { title: 'Hackaton', default_addr: wallet_addr } );



});


router.post('/balance', function(req, res){
    var userName = req.body.userName;
    var html = 'Hello: ' + userName + '.<br>' +
        '<a href="/">Try again.</a>';
    res.send(html);
});

module.exports = router;
