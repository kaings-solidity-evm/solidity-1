const { networks } = require('./truffle-config');
const { interface, bytecode } = require('./compile');
const Web3 = require('web3');

const provider = networks.rinkeby.provider();
const web3 = new Web3(provider);

let accounts;
const INIT_MESSAGE = 'Deploy Smart Contract!';

const deploy = async() => {
    accounts = await web3.eth.getAccounts();
    console.log('getAccounts..... ', accounts);     // correct connection should give your rinkeby accounts tied to your mnemonic

    const inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INIT_MESSAGE] })
    .send({ from: accounts[0] , gas: '1000000' });

    console.log('deployed contract..... ', inbox);
};

deploy();
