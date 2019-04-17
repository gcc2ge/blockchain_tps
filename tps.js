const Web3 = require('web3');

const {
    setIntervalAsync,
    clearIntervalAsync
} = require('set-interval-async/dynamic');


async function analyzeNewBlocks(blockNumber, newBlockNumber, txCount, start_time) {
    let txCount_new = 0;
    let bl = blockNumber + 1;
    while (bl <= newBlockNumber) {
        txCount_new += await web3.eth.getBlockTransactionCount(bl);
        bl = bl + 1;
    }
    let block = await web3.eth.getBlock(blockNumber);
    let newBlock = await web3.eth.getBlock(newBlockNumber);

    let ts_blockNumber = block.timestamp;
    let ts_newBlockNumber = newBlock.timestamp;

    let blocktimeSeconds = (ts_newBlockNumber - ts_blockNumber);

    let tps_current;

    if (blocktimeSeconds == 0) {
        tps_current = 0;
    } else {
        tps_current = txCount_new / blocktimeSeconds;
    }

    txCount += txCount_new;
    let elapsed = ts_newBlockNumber - start_time;
    let tps = txCount / elapsed;
    console.info(`block ${blockNumber} | new #TX ${txCount_new} / ${blocktimeSeconds }s = ${tps_current}  TPS_current | total: #TX ${txCount} / ${elapsed}s = ${tps} TPS_average`);
    return txCount
}


async function measurement(blockNumber, pauseBetweenQueries = 15000) {
    let txCount = await web3.eth.getBlockTransactionCount(blockNumber);

    let block = await web3.eth.getBlock(blockNumber);

    let start_time = block.timestamp;
    console.info('starting timer, at block', blockNumber, 'which has ', txCount, ' transactions; at timecode', start_time);

    setIntervalAsync(
        async () => {
            let newBlockNumber = await web3.eth.getBlockNumber();
            if (blockNumber != newBlockNumber) {
                txCount = await analyzeNewBlocks(blockNumber, newBlockNumber, txCount, start_time);
                blockNumber = newBlockNumber;
            }
        },
        pauseBetweenQueries
    );

}

var web3;

async function start(eth_url='http://10.211.55.8:8545') {
    web3 = new Web3(eth_url);
    let blockNumber_start = await web3.eth.getBlockNumber();
    console.info("\nBlock ", blockNumber_start, " - waiting for something to happen");
    measurement(blockNumber_start);
}

if (process.argv.length >2){
    start(process.argv[2]);
}else{
    start();
}
