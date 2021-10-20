require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind history heavy process obscure gaze'; 
let testAccounts = [
"0xa9229941f377c09823e38a510095b9684fd7597032ec7f42f808f0c3cf49ed1a",
"0x98b6d6ce7ab0ed2c28e5e2392ffd405c66e483c3c37eea8fa30054f729e91c58",
"0xa736b9cc377be3d0b09c9fedc49a7ee13392a349c74a33f57dd6cb30f2081084",
"0xfc6d3b040c8f7bdc7af50763de8c7237fef9d90c585d97c0036540e0a7953b2f",
"0x01546b4a45c4ed6e2c495e2dfbb92477d566edbc19e51dca152fa29cf36f73ae",
"0xb236aba9e424c98247e800fd1dd0b2915544eebeb198f63014de66f9abc5e8f7",
"0x83244749bd6fbf28f1c311ef1af73505561824772ee1ed1714be2df41d5e23b2",
"0x2e2254b5078a6e97f5c20ae07474a1c4da14b4a03ded322bd05ecbe035f82a54",
"0x7ac3e1168f80c8df82e604d6e5b464e77d936fac3a54b75f8636f09e5019fcff",
"0x25adc2209d3005c94c13eefbbb8fa262df28635238f568fdea2d61f96a64ba21"
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
            version: '^0.8.0'
        }
    }
};

