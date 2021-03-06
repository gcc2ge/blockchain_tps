var sender = require('./sender');


var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
const BN = require('bn.js');
var Wallet = require('../lib/wallet');
var Web3 = require("web3");
var Coin = require('./coin');

var net = require('net')

const NUM_ACCOUNT = 500;
var wallets = new Array(NUM_ACCOUNT);
var mnemonic = 'make animal theme rose fresh hybrid beach inner deposit nut alert just';

// 初始化余额
async function initBalance(url) {
    const web3 = new Web3(url);
    let main_wallet = Wallet.fromV3(`{"address":"eb680f30715f347d4eb5cd03ac5eced297ac5046","crypto":{"cipher":"aes-128-ctr","ciphertext":"0a5993469b3546c8581abbb597ed15b2e14d14c8a55713b9f7fd276d5ef35c5b","cipherparams":{"iv":"9164453efdad36e06c2a36be5c522c24"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"7618b02cbcac1127b57b1bc9c8b468cccf105e5724bdcd7ca50ec99434f29671"},"mac":"7b3c086d138b181e1baa6aab7c4f93e1fc220862181d835e9efb1a41d57c8e08"},"id":"3a7959b8-1c2f-42fe-b375-6a0a93d1dffc","version":3}`, "123456");
    let balance = await web3.eth.getBalance(main_wallet.getAddressString());
    balance = new BN(balance);
    balance = balance.divRound(new BN(100)).mul(new BN(70));
    let _amount = balance.divRound(new BN(NUM_ACCOUNT));
    _amount = web3.utils.fromWei(_amount, "ether");
    let _nonce = await web3.eth.getTransactionCount(main_wallet.getAddressString(), 'pending');
    let coin = new Coin(web3, main_wallet);
    for (let i = 0; i < wallets.length; i++) {
        coin.transfer(main_wallet.getAddressString(), wallets[i].getAddressString(), _amount, _nonce);
        _nonce = _nonce + 1;
    }
}

var split_wallets;

function splitAccount(from, to) {
    split_wallets = new Array(to - from);
    let count = 0;
    for (let i = from; i < to; i++) {
        split_wallets[count] = wallets[i];
        count = count + 1;
    }
}

// 开始发送交易

function startSendTx(url) {
    // 账户间隔
    splitAccount(0,100);

    let web3 = new Web3(url, net);

    let count = 0;

    for (let i = 0; i < split_wallets.length; i++) {
        count = count + 1;
        sender(web3, 2000, split_wallets[i], split_wallets);
    }
}

// 创建账号
async function createAccounts() {
    let m = await bip39.mnemonicToSeed(mnemonic, "");
    var hdwallet = hdkey.fromMasterSeed(m);

    var wallet_hdpath = "m/44'/60'/0'/0/";
    for (let i = 0; i < NUM_ACCOUNT; i++) {
        let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
        wallets[i] = wallet;
    }
}

async function main() {
    await createAccounts();
    startSendTx('/home/ppio/geth_deploy_script/miner1/db/geth.ipc');
}

main();