/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");

const { API_URL_ROPSTEN, API_URL_RINKEBY, PRIVATE_KEY, API_KEY } = process.env;

module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL_ROPSTEN,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      rinkeby: {
         url: API_URL_RINKEBY,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      apiKey: {
         ropsten: API_KEY,
         rinkeby: API_KEY,
      }
   }
}
