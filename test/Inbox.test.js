const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INIT_MESSAGE = 'Learn Solidity!';

beforeEach(async() => {
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INIT_MESSAGE] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {        // check if the contract is properly deployed (by checking the deployed destination address)
        console.log('deployed inbox..... ', inbox);
        assert.ok(inbox.options.address);
    });

    it('has a default message', async() => {        // check if the is init message
        const message = await inbox.methods.message().call();
        assert.equal(message, INIT_MESSAGE);
    });

    it('can change the message', async() => {       // test setMessage and retrieve message
        await inbox.methods.setMessage('Create SmartContract!').send({ from: accounts[0], gas: '1000000' });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Create SmartContract!');
    });
});