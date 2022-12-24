const { ethers } = require("ethers");

// #### A connection to the Ethereum network (a Provider)

// 1. Use MetaMask provider
// const provider = new ethers.providers.Web3Provider(window.ethereum)

// 2. The JSON-RPC API third-party method for interacting with Ethereum and is available in all major Ethereum node implementations
const INFURA_API_KEY = "9432e63dad4c4f599fa6f92fe5cf3051"
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_API_KEY}`)

// 3. Test Provider that is not real Etherium provider
const providerTest = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_API_KEY}`)

module.exports = {
  provider,
  providerTest
}

