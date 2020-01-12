const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require('./secret/mnemonic');
const apiKey = require('./secret/apiKey');

module.exports = {
    networks: {
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${apiKey}`)
        }
    }
};