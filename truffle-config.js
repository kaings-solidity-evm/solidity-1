const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require('./secret/mnemonic');

module.exports = {
    networks: {
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/eb6fda480d8340ffae7710c91d3c123e')
        }
    }
};