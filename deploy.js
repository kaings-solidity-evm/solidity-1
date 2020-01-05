const { networks } = require('./truffle-config');
// const { interface, bytecode } = require('./compile');
const Web3 = require('web3');

const provider = networks.rinkeby.provider();
const web3 = new Web3(provider);

let accounts;
const getAccounts = async() => {
    accounts = await web3.eth.getAccounts();
    console.log('getAccounts..... ', accounts);     // correct connection should give your rinkeby accounts tied to your mnemonic
};
getAccounts();
