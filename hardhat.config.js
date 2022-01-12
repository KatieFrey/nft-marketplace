require('dotenv').config()
require('@nomiclabs/hardhat-waffle')
const fs = require('fs')

//create a .secret file and add your metamask private key (testing?)
const privateKey = fs.readFileSync('.secret').toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
}
