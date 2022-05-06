/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle")

const { API_URL, PRIVATE_KEY, API_KEY_ETHERSCAN } = process.env;
module.exports = {
   solidity: "0.8.13",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
    apiKey: API_KEY_ETHERSCAN
  }
}