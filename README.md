### 介绍

本项目用于测试以太坊的TPS

### 准备

下载项目：

```
git clone https://github.com/gcc2ge/blockchain_tps.git
```

npm安装依赖

```
npm install
```

### 测试TPS

`tps.js`用于测试，以太坊的TPS

```
node ./tps.js https://ropsten.infura.io/
```
输出：

```

Block  8  - waiting for something to happen
starting timer, at block 8 which has  106  transactions; at timecode 1555476030
block 8 | new #TX 263 / 14s = 18.785714285714285  TPS_current | total: #TX 369 / 14s = 26.357142857142858 TPS_average
block 10 | new #TX 299 / 16s = 18.6875  TPS_current | total: #TX 668 / 30s = 22.266666666666666 TPS_average
block 12 | new #TX 298 / 16s = 18.625  TPS_current | total: #TX 966 / 46s = 21 TPS_average
block 13 | new #TX 227 / 12s = 18.916666666666668  TPS_current | total: #TX 1193 / 58s = 20.56896551724138 TPS_average
block 15 | new #TX 191 / 11s = 17.363636363636363  TPS_current | total: #TX 1384 / 69s = 20.057971014492754 TPS_average
block 17 | new #TX 206 / 10s = 20.6  TPS_current | total: #TX 1590 / 79s = 20.126582278481013 TPS_average
block 18 | new #TX 528 / 28s = 18.857142857142858  TPS_current | total: #TX 2118 / 107s = 19.794392523364486 TPS_average
block 21 | new #TX 302 / 16s = 18.875  TPS_current | total: #TX 2420 / 123s = 19.67479674796748 TPS_average
block 22 | new #TX 38 / 2s = 19  TPS_current | total: #TX 2458 / 125s = 19.664 TPS_average
block 23 | new #TX 476 / 57s = 8.350877192982455  TPS_current | total: #TX 2934 / 182s = 16.12087912087912 TPS_average
block 24 | new #TX 476 / 28s = 17  TPS_current | total: #TX 3410 / 210s = 16.238095238095237 TPS_average
block 25 | new #TX 867 / 12s = 72.25  TPS_current | total: #TX 4277 / 222s = 19.265765765765767 TPS_average
block 27 | new #TX 356 / 19s = 18.736842105263158  TPS_current | total: #TX 4633 / 241s = 19.224066390041493 TPS_average
block 30 | new #TX 56 / 3s = 18.666666666666668  TPS_current | total: #TX 4689 / 244s = 19.2172131147541 TPS_average
block 31 | new #TX 545 / 29s = 18.79310344827586  TPS_current | total: #TX 5234 / 273s = 19.17216117216117 TPS_average
block 34 | new #TX 189 / 10s = 18.9  TPS_current | total: #TX 5423 / 283s = 19.16254416961131 TPS_average
block 36 | new #TX 476 / 35s = 13.6  TPS_current | total: #TX 5899 / 318s = 18.550314465408807 TPS_average
block 37 | new #TX 374 / 10s = 37.4  TPS_current | total: #TX 6273 / 328s = 19.125 TPS_average
block 38 | new #TX 169 / 9s = 18.77777777777778  TPS_current | total: #TX 6442 / 337s = 19.115727002967358 TPS_average
block 39 | new #TX 303 / 16s = 18.9375  TPS_current | total: #TX 6745 / 353s = 19.107648725212464 TPS_average
block 41 | new #TX 472 / 25s = 18.88  TPS_current | total: #TX 7217 / 378s = 19.09259259259259 TPS_average
block 44 | new #TX 284 / 15s = 18.933333333333334  TPS_current | total: #TX 7501 / 393s = 19.08651399491094 TPS_average
block 45 | new #TX 340 / 18s = 18.88888888888889  TPS_current | total: #TX 7841 / 411s = 19.07785888077859 TPS_average
block 46 | new #TX 791 / 42s = 18.833333333333332  TPS_current | total: #TX 8632 / 453s = 19.055187637969095 TPS_average
block 50 | new #TX 131 / 7s = 18.714285714285715  TPS_current | total: #TX 8763 / 460s = 19.05 TPS_average
block 53 | new #TX 318 / 17s = 18.705882352941178  TPS_current | total: #TX 9081 / 477s = 19.037735849056602 TPS_average
block 54 | new #TX 263 / 14s = 18.785714285714285  TPS_current | total: #TX 9344 / 491s = 19.030549898167006 TPS_average
block 55 | new #TX 414 / 22s = 18.818181818181817  TPS_current | total: #TX 9758 / 513s = 19.021442495126706 TPS_average
block 56 | new #TX 773 / 41s = 18.853658536585368  TPS_current | total: #TX 10531 / 554s = 19.009025270758123 TPS_average
block 59 | new #TX 360 / 19s = 18.94736842105263  TPS_current | total: #TX 10891 / 573s = 19.00698080279232 TPS_average
block 62 | new #TX 76 / 4s = 19  TPS_current | total: #TX 10967 / 577s = 19.006932409012133 TPS_average
block 64 | new #TX 227 / 12s = 18.916666666666668  TPS_current | total: #TX 11194 / 589s = 19.00509337860781 TPS_average
block 65 | new #TX 476 / 27s = 17.62962962962963  TPS_current | total: #TX 11670 / 616s = 18.944805194805195 TPS_average
block 66 | new #TX 356 / 17s = 20.941176470588236  TPS_current | total: #TX 12026 / 633s = 18.998420221169038 TPS_average
block 67 | new #TX 283 / 15s = 18.866666666666667  TPS_current | total: #TX 12309 / 648s = 18.99537037037037 TPS_average
block 70 | new #TX 529 / 28s = 18.892857142857142  TPS_current | total: #TX 12838 / 676s = 18.99112426035503 TPS_average
block 73 | new #TX 132 / 7s = 18.857142857142858  TPS_current | total: #TX 12970 / 683s = 18.989751098096633 TPS_average
block 75 | new #TX 476 / 33s = 14.424242424242424  TPS_current | total: #TX 13446 / 716s = 18.779329608938546 TPS_average
block 76 | new #TX 476 / 34s = 14  TPS_current | total: #TX 13922 / 750s = 18.562666666666665 TPS_average
block 77 | new #TX 429 / 7s = 61.285714285714285  TPS_current | total: #TX 14351 / 757s = 18.957727873183618 TPS_average
block 78 | new #TX 407 / 23s = 17.695652173913043  TPS_current | total: #TX 14758 / 780s = 18.92051282051282 TPS_average
block 79 | new #TX 233 / 14s = 16.642857142857142  TPS_current | total: #TX 14991 / 794s = 18.88035264483627 TPS_average
block 82 | new #TX 334 / 18s = 18.555555555555557  TPS_current | total: #TX 15325 / 812s = 18.873152709359605 TPS_average
block 84 | new #TX 89 / 5s = 17.8  TPS_current | total: #TX 15414 / 817s = 18.866585067319463 TPS_average
block 85 | new #TX 319 / 18s = 17.72222222222222  TPS_current | total: #TX 15733 / 835s = 18.84191616766467 TPS_average
block 87 | new #TX 409 / 23s = 17.782608695652176  TPS_current | total: #TX 16142 / 858s = 18.813519813519815 TPS_average
block 88 | new #TX 512 / 29s = 17.655172413793103  TPS_current | total: #TX 16654 / 887s = 18.77564825253664 TPS_average
block 91 | new #TX 178 / 10s = 17.8  TPS_current | total: #TX 16832 / 897s = 18.764771460423635 TPS_average
block 92 | new #TX 302 / 17s = 17.764705882352942  TPS_current | total: #TX 17134 / 914s = 18.74617067833698 TPS_average
block 95 | new #TX 213 / 12s = 17.75  TPS_current | total: #TX 17347 / 926s = 18.733261339092873 TPS_average
block 96 | new #TX 375 / 21s = 17.857142857142858  TPS_current | total: #TX 17722 / 947s = 18.713833157338964 TPS_average
block 98 | new #TX 573 / 31s = 18.483870967741936  TPS_current | total: #TX 18295 / 978s = 18.706543967280165 TPS_average
block 100 | new #TX 563 / 30s = 18.766666666666666  TPS_current | total: #TX 18858 / 1008s = 18.708333333333332 TPS_average
block 104 | new #TX 112 / 6s = 18.666666666666668  TPS_current | total: #TX 18970 / 1014s = 18.70808678500986 TPS_average
block 105 | new #TX 355 / 19s = 18.68421052631579  TPS_current | total: #TX 19325 / 1033s = 18.707647628267182 TPS_average
block 106 | new #TX 508 / 27s = 18.814814814814813  TPS_current | total: #TX 19833 / 1060s = 18.710377358490565 TPS_average
block 108 | new #TX 396 / 21s = 18.857142857142858  TPS_current | total: #TX 20229 / 1081s = 18.71322849213691 TPS_average
block 111 | new #TX 320 / 17s = 18.823529411764707  TPS_current | total: #TX 20549 / 1098s = 18.714936247723134 TPS_average
block 114 | new #TX 285 / 15s = 19  TPS_current | total: #TX 20834 / 1113s = 18.71877807726864 TPS_average
block 116 | new #TX 150 / 8s = 18.75  TPS_current | total: #TX 20984 / 1121s = 18.71900089206066 TPS_average
block 117 | new #TX 415 / 22s = 18.863636363636363  TPS_current | total: #TX 21399 / 1143s = 18.721784776902886 TPS_average
block 118 | new #TX 264 / 14s = 18.857142857142858  TPS_current | total: #TX 21663 / 1157s = 18.72342264477096 TPS_average
block 119 | new #TX 207 / 12s = 17.25  TPS_current | total: #TX 21870 / 1169s = 18.70829769033362 TPS_average
block 121 | new #TX 476 / 37s = 12.864864864864865  TPS_current | total: #TX 22346 / 1206s = 18.529021558872305 TPS_average
block 122 | new #TX 476 / 26s = 18.307692307692307  TPS_current | total: #TX 22822 / 1232s = 18.524350649350648 TPS_average
block 123 | new #TX 528 / 15s = 35.2  TPS_current | total: #TX 23350 / 1247s = 18.72493985565357 TPS_average
block 126 | new #TX 132 / 7s = 18.857142857142858  TPS_current | total: #TX 23482 / 1254s = 18.725677830940988 TPS_average
block 128 | new #TX 226 / 12s = 18.833333333333332  TPS_current | total: #TX 23708 / 1266s = 18.726698262243286 TPS_average
block 129 | new #TX 415 / 22s = 18.863636363636363  TPS_current | total: #TX 24123 / 1288s = 18.729037267080745 TPS_average
block 130 | new #TX 322 / 17s = 18.941176470588236  TPS_current | total: #TX 24445 / 1305s = 18.731800766283524 TPS_average
block 133 | new #TX 114 / 6s = 19  TPS_current | total: #TX 24559 / 1311s = 18.73302822273074 TPS_average
block 134 | new #TX 472 / 25s = 18.88  TPS_current | total: #TX 25031 / 1336s = 18.735778443113773 TPS_average
block 136 | new #TX 75 / 4s = 18.75  TPS_current | total: #TX 25106 / 1340s = 18.735820895522387 TPS_average
block 137 | new #TX 753 / 40s = 18.825  TPS_current | total: #TX 25859 / 1380s = 18.73840579710145 TPS_average
block 139 | new #TX 476 / 27s = 17.62962962962963  TPS_current | total: #TX 26335 / 1407s = 18.717128642501777 TPS_average
block 140 | new #TX 670 / 34s = 19.705882352941178  TPS_current | total: #TX 27005 / 1441s = 18.740458015267176 TPS_average
block 144 | new #TX 300 / 16s = 18.75  TPS_current | total: #TX 27305 / 1457s = 18.740562800274535 TPS_average
block 146 | new #TX 282 / 15s = 18.8  TPS_current | total: #TX 27587 / 1472s = 18.74116847826087 TPS_average
block 149 | new #TX 208 / 11s = 18.90909090909091  TPS_current | total: #TX 27795 / 1483s = 18.742414025623734 TPS_average
block 150 | new #TX 376 / 20s = 18.8  TPS_current | total: #TX 28171 / 1503s = 18.74318030605456 TPS_average
block 151 | new #TX 245 / 13s = 18.846153846153847  TPS_current | total: #TX 28416 / 1516s = 18.74406332453826 TPS_average
block 154 | new #TX 281 / 15s = 18.733333333333334  TPS_current | total: #TX 28697 / 1531s = 18.743958197256696 TPS_average
block 155 | new #TX 476 / 28s = 17  TPS_current | total: #TX 29173 / 1559s = 18.712636305323926 TPS_average
block 156 | new #TX 476 / 55s = 8.654545454545454  TPS_current | total: #TX 29649 / 1614s = 18.369888475836433 TPS_average
block 157 | new #TX 476 / 18s = 26.444444444444443  TPS_current | total: #TX 30125 / 1632s = 18.45894607843137 TPS_average
block 158 | new #TX 476 / 21s = 22.666666666666668  TPS_current | total: #TX 30601 / 1653s = 18.512401693889895 TPS_average
block 159 | new #TX 620 / 12s = 51.666666666666664  TPS_current | total: #TX 31221 / 1665s = 18.751351351351353 TPS_average
block 163 | new #TX 284 / 15s = 18.933333333333334  TPS_current | total: #TX 31505 / 1680s = 18.75297619047619 TPS_average
block 167 | new #TX 225 / 12s = 18.75  TPS_current | total: #TX 31730 / 1692s = 18.752955082742318 TPS_average
block 168 | new #TX 395 / 21s = 18.80952380952381  TPS_current | total: #TX 32125 / 1713s = 18.753648569760653 TPS_average
block 169 | new #TX 244 / 13s = 18.76923076923077  TPS_current | total: #TX 32369 / 1726s = 18.753765932792582 TPS_average
block 171 | new #TX 169 / 9s = 18.77777777777778  TPS_current | total: #TX 32538 / 1735s = 18.753890489913545 TPS_average
block 173 | new #TX 244 / 13s = 18.76923076923077  TPS_current | total: #TX 32782 / 1748s = 18.75400457665904 TPS_average
block 174 | new #TX 283 / 15s = 18.866666666666667  TPS_current | total: #TX 33065 / 1763s = 18.75496313102666 TPS_average
block 175 | new #TX 414 / 22s = 18.818181818181817  TPS_current | total: #TX 33479 / 1785s = 18.75574229691877 TPS_average
block 177 | new #TX 206 / 11s = 18.727272727272727  TPS_current | total: #TX 33685 / 1796s = 18.755567928730514 TPS_average
block 178 | new #TX 412 / 22s = 18.727272727272727  TPS_current | total: #TX 34097 / 1818s = 18.755225522552255 TPS_average
block 180 | new #TX 93 / 5s = 18.6  TPS_current | total: #TX 34190 / 1823s = 18.754799780581457 TPS_average
block 181 | new #TX 243 / 13s = 18.692307692307693  TPS_current | total: #TX 34433 / 1836s = 18.754357298474947 TPS_average
block 183 | new #TX 476 / 32s = 14.875  TPS_current | total: #TX 34909 / 1868s = 18.687901498929335 TPS_average
block 184 | new #TX 463 / 18s = 25.72222222222222  TPS_current | total: #TX 35372 / 1886s = 18.755037115588546 TPS_average
block 186 | new #TX 698 / 37s = 18.864864864864863  TPS_current | total: #TX 36070 / 1923s = 18.75715028601144 TPS_average
block 190 | new #TX 245 / 13s = 18.846153846153847  TPS_current | total: #TX 36315 / 1936s = 18.757747933884296 TPS_average
block 193 | new #TX 134 / 7s = 19.142857142857142  TPS_current | total: #TX 36449 / 1943s = 18.759135357694287 TPS_average
block 194 | new #TX 434 / 23s = 18.869565217391305  TPS_current | total: #TX 36883 / 1966s = 18.760427263479144 TPS_average
block 195 | new #TX 323 / 17s = 19  TPS_current | total: #TX 37206 / 1983s = 18.7624810892587 TPS_average
block 196 | new #TX 569 / 30s = 18.966666666666665  TPS_current | total: #TX 37775 / 2013s = 18.765524093392944 TPS_average
block 198 | new #TX 284 / 15s = 18.933333333333334  TPS_current | total: #TX 38059 / 2028s = 18.766765285996055 TPS_average
block 200 | new #TX 1 / 1s = 1  TPS_current | total: #TX 38060 / 2029s = 18.758008871365206 TPS_average
block 201 | new #TX 355 / 18s = 19.72222222222222  TPS_current | total: #TX 38415 / 2047s = 18.76648754274548 TPS_average
block 202 | new #TX 452 / 24s = 18.833333333333332  TPS_current | total: #TX 38867 / 2071s = 18.767262192177693 TPS_average
block 204 | new #TX 207 / 11s = 18.818181818181817  TPS_current | total: #TX 39074 / 2082s = 18.76753121998079 TPS_average
block 205 | new #TX 281 / 15s = 18.733333333333334  TPS_current | total: #TX 39355 / 2097s = 18.767286599904626 TPS_average
block 206 | new #TX 393 / 21s = 18.714285714285715  TPS_current | total: #TX 39748 / 2118s = 18.766761095372992 TPS_average
block 208 | new #TX 281 / 15s = 18.733333333333334  TPS_current | total: #TX 40029 / 2133s = 18.766526019690577 TPS_average
block 212 | new #TX 375 / 20s = 18.75  TPS_current | total: #TX 40404 / 2153s = 18.76637250348351 TPS_average
block 213 | new #TX 476 / 40s = 11.9  TPS_current | total: #TX 40880 / 2193s = 18.64113087095303 TPS_average
block 214 | new #TX 407 / 7s = 58.142857142857146  TPS_current | total: #TX 41287 / 2200s = 18.76681818181818 TPS_average
block 215 | new #TX 396 / 21s = 18.857142857142858  TPS_current | total: #TX 41683 / 2221s = 18.767672219720847 TPS_average
block 218 | new #TX 265 / 14s = 18.928571428571427  TPS_current | total: #TX 41948 / 2235s = 18.768680089485457 TPS_average
block 221 | new #TX 476 / 30s = 15.866666666666667  TPS_current | total: #TX 42424 / 2265s = 18.730242825607064 TPS_average
block 222 | new #TX 476 / 48s = 9.916666666666666  TPS_current | total: #TX 42900 / 2313s = 18.547341115434502 TPS_average
block 223 | new #TX 791 / 15s = 52.733333333333334  TPS_current | total: #TX 43691 / 2328s = 18.7676116838488 TPS_average
block 226 | new #TX 264 / 14s = 18.857142857142858  TPS_current | total: #TX 43955 / 2342s = 18.76814688300598 TPS_average
block 230 | new #TX 488 / 26s = 18.76923076923077  TPS_current | total: #TX 44443 / 2368s = 18.768158783783782 TPS_average
block 232 | new #TX 201 / 11s = 18.272727272727273  TPS_current | total: #TX 44644 / 2379s = 18.76586801176965 TPS_average
block 236 | new #TX 363 / 19s = 19.105263157894736  TPS_current | total: #TX 45007 / 2398s = 18.76855713094245 TPS_average
block 237 | new #TX 395 / 21s = 18.80952380952381  TPS_current | total: #TX 45402 / 2419s = 18.768912773873502 TPS_average
block 238 | new #TX 476 / 29s = 16.413793103448278  TPS_current | total: #TX 45878 / 2448s = 18.741013071895424 TPS_average
block 239 | new #TX 354 / 15s = 23.6  TPS_current | total: #TX 46232 / 2463s = 18.770604953308972 TPS_average
block 242 | new #TX 207 / 11s = 18.818181818181817  TPS_current | total: #TX 46439 / 2474s = 18.77081649151172 TPS_average
block 243 | new #TX 264 / 14s = 18.857142857142858  TPS_current | total: #TX 46703 / 2488s = 18.77130225080386 TPS_average
block 244 | new #TX 282 / 15s = 18.8  TPS_current | total: #TX 46985 / 2503s = 18.77147423092289 TPS_average
block 245 | new #TX 283 / 15s = 18.866666666666667  TPS_current | total: #TX 47268 / 2518s = 18.772041302621126 TPS_average

```


### 发送测试交易脚本

为了测试TPS需要发送一些测试交易，以太坊执行交易是串行的，以下脚本是发送单个账户

```js

async function start(pause = 50) {
    const web3 = new Web3('http://10.211.55.8:8545');

    let wallet_Private = Wallet.fromV3(`{"address":"eb680f30715f347d4eb5cd03ac5eced297ac5046","crypto":{"cipher":"aes-128-ctr","ciphertext":"0a5993469b3546c8581abbb597ed15b2e14d14c8a55713b9f7fd276d5ef35c5b","cipherparams":{"iv":"9164453efdad36e06c2a36be5c522c24"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"7618b02cbcac1127b57b1bc9c8b468cccf105e5724bdcd7ca50ec99434f29671"},"mac":"7b3c086d138b181e1baa6aab7c4f93e1fc220862181d835e9efb1a41d57c8e08"},"id":"3a7959b8-1c2f-42fe-b375-6a0a93d1dffc","version":3}`, "123456");

    coin.init(web3, wallet_Private);

    let nonce = await web3.eth.getTransactionCount(wallet_Private.getAddressString(), 'pending');

    setIntervalAsync(
        async () => {
            var to = "0xd3d4ba599218e795beed5f8886a5696aa00702f4";

            var amount = '0.00000000000001'; //ether

            coin.transfer(wallet_Private.getAddressString(), to, amount, nonce);
            nonce = nonce + 1;
        },
        pause
    );
}
```
将上面方法中的变量改成你自己环境中的变量。

执行脚本：

```angular2html
node sender.js
```