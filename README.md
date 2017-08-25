# hackaton
Руководство и примеры подключения к тестовому серверу для хакатона в Казани 27-29 августа 2017

## Тестовая сеть и аккаунты

Мы подготовили ноду, работающую на тестовой сети Ropsten ( https://ropsten.etherscan.io/ ).
Подключение к ноде по RPC можно делать так:

```
  const Web3 = require('web3');
  web3 = new Web3(new Web3.providers.HttpProvider('http://hackaton.izx.io:18555'));
```

Так как вам потребуется газ для проведения транзакций, мы завели для вас кошелек.
Его реквизиты вы найдёте в файле routes/index.js. Вы, конечно, можете переводить свободно
средства с этого кошелька, но, пожалуйста, помните что он не резиновый, и один на всех
участников хакатона.

Лучше, если вы заведёте свой кошелёк и переведёте на него некоторую сумму для своей работы.
Для этого можно использовать тестовое приложение hackaton, или воспользоваться любым кошельком, 
например [Metamask](https://metamask.io/).


## Command line

Для работы с командной строки вы можете использовать средства [Ethereum cli](https://www.ethereum.org/cli).


Соединение устанавливается командой:

```
MacBook-Pro-Rasid:~ studnev$ geth attach http://hackaton.izx.io:18555
Welcome to the Geth JavaScript console!

instance: Geth/v1.7.0-unstable-68955ed2/linux-amd64/go1.8.3
coinbase: 0xe8798c379d5ca8b3ac3bfeb354c7a70884206e5d
at block: 1550273 (Fri, 25 Aug 2017 14:29:11 MSK)
 modules: eth:1.0 net:1.0 rpc:1.0 web3:1.0

> web3.fromWei(eth.getBalance("0xe8798c379d5ca8b3ac3bfeb354c7a70884206e5d"), "ether")
239.876652042011803576
 
```


## Тестовое приложение hackaton

Мы сделали простейшее тестовое приложение на [Node Express](http://expressjs.com/ru/).

Приложение подключается к ноду тестовой сети по RPC, запрашивает баланс и делает переводы средств
с тестового кошелька на любой в тестовой сети Ropsten ( https://ropsten.etherscan.io/ ).


Для установки и запуска приложения следуйте шагам:

* установить Node express [по инструкции](http://expressjs.com/ru/starter/installing.html)
* выписать код:
```
MacBook-Pro-Rasid:tmp studnev$ git clone https://github.com/izetex/hackaton.git
Cloning into 'hackaton'...
remote: Counting objects: 56, done.
remote: Compressing objects: 100% (34/34), done.
remote: Total 56 (delta 14), reused 50 (delta 11), pack-reused 0
Unpacking objects: 100% (56/56), done.
```
* установить node_modules:
```
MacBook-Pro-Rasid:tmp studnev$ cd hackaton/
MacBook-Pro-Rasid:hackaton studnev$ npm install
> scrypt@6.0.3 preinstall /private/tmp/hackaton/node_modules/scrypt
> node node-scrypt-preinstall.js
....
added 479 packages in 75.218s
```
* запустить приложение
```
MacBook-Pro-Rasid:hackaton studnev$ bin/www
Listening on port 3000. Open http://localhost:3000 in your browser.
```
* открыть приложение в браузере [http://localhost:3000](http://localhost:3000)



## Техническая поддержка

Обращайтесь за любыми техническими вопросами в канал поддержки в Telegram:
[https://t.me/hackaton](https://t.me/hackaton).