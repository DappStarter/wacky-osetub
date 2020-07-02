require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture street rifle noise modify giraffe light army gaze'; 
let testAccounts = [
"0xfd759ec4567bd25b2f7b89c5b89a966910d4e471678686616d26f00b551a3b8b",
"0xb23e917afe5b8fa3f9998a52f7b48168147ef6d9de1792fd6c69ae458cb7f966",
"0xd2a634cfeebd4c597d23c02fff292ccba4f95de0b19016ca096fca9d63bcb75e",
"0x1184144e80ae89329684e2d053894d10f712c935fa634e71e387e6b241867a24",
"0x67119db23c62ab7aab261369dfc9b378306564020119d2fb36290046310d930d",
"0xf8397933e9b0fbdb10a03611663b52a6bb263c5fb7007037703d283bb3e3a3b8",
"0x1448e16a2e251e5d7559595765e406894fdff57c0240ef2c4f2994b3c6b7590d",
"0x3f2ebf308c87d81792fa4b418839bad50ea584521a1eaff151ace38512b96e35",
"0xeb95bc2078c76b31c910f701b0b65e35ceabc127e42a09f7bb5a315fd4dc33e6",
"0xd7bd3a5bd41f0132c8c37a0cf76c12633ee3ff9a2890f6b83b573b422aef7bd3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
