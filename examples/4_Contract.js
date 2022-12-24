const { ethers } = require("ethers");
const { provider } = require("./0_Provider")

// #### Contract
const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
const ERC20_ABI = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",

    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",

    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
]

const contract = new ethers.Contract(address, ERC20_ABI, provider)

async function main() {
    // ERC-20 token name
    const contractName = await contract.name()
    console.log("Contract Name: ", contractName)

    // ERC-20 token symbol
    const contractSymbol = await contract.symbol()
    console.log("Contract Symbol: ", contractSymbol)

    // ERC-20 total supply
    const contractTotalSupply = await contract.totalSupply()
    console.log("Contract Total Supply: ", ethers.utils.formatEther(contractTotalSupply))

    // Balance
    const balance = await contract.balanceOf("0x6B175474E89094C44Da98b954EedeAC495271d0F")
    console.log("Balance of address: ", ethers.utils.formatUnits(balance, 18)) // 18 => wei to ether
}


main()