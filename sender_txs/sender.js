const {
    setIntervalAsync,
    clearIntervalAsync
} = require('set-interval-async/dynamic');

var Coin = require('./coin');

var Web3 = require("web3");

var Wallet = require('../lib/wallet');

const queue_size = 600;

//

async function start(web3, pause = 50, wallet_Private, toArr) {

    let coin = new Coin(web3, wallet_Private);

    let nonce = await web3.eth.getTransactionCount(wallet_Private.getAddressString(), 'pending');

    let count = 0;
    let toLen = toArr.length;

    let hashs = new Map();

    let timer = setIntervalAsync(
        async () => {


            let amount = '0.00000000000001'; //ether

            if (hashs.size <= queue_size) {//控制http请求数量
                let to = toArr[count % toLen];
                count = count + 1;

                coin.transfer(wallet_Private.getAddressString(), to.getAddressString(), amount, nonce, (err) => {
                    console.info(`${err}`);
                    clearIntervalAsync(timer);
                }, (hash) => {
                    hashs.set(hash, 1);
                });
                nonce = nonce + 1;
            }

            // 删除成功的交易
            hashs.forEach((item, key, mapObj) => {
                web3.eth.getTransactionReceipt(hash[i]).then(hash => {
                    if (hash) {
                        hashs.delete(hash);
                    }
                })
            });

        },
        pause
    );
}


module.exports = start;
