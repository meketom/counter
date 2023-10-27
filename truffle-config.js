require('dotenv').config();
const mnemonic = process.env["MNEMONIC"];
// const infuraProjectId = process.env["INFURA_PROJECT_ID"];

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

    networks: {
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 7545,            // Standard Ethereum port (default: none)
            network_id: "5777",       // Any network (default: none)
        },
        scroll: {
            provider: () => new HDWalletProvider(MNEMONIC_PHRASE, "https://rpc.scroll.io/"),
            network_id: '*'
        },
    },

    compilers: {
        solc: {
            version: "0.8.13",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1000
                }
            }
        }
    }
};
