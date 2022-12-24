const { ethers } = require("ethers");
const { provider } = require("./0_Provider")

// 1. Account signer that sends ether and pay to change state within the blockchain.
const signer = provider.getSigner()
console.log(signer)


async function main() {
    // 2. Get the balance of an account (by address or ENS name, if supported by network)
    const balance = await provider.getBalance("0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5")
    console.log("Balance:", balance) // { BigNumber: "182826475815887608" }
    // Format the output to user-friendly, such as in ether (instead of wei)
    const balanceEther = ethers.utils.formatEther(balance)
    console.log("Balance in Ether:", balanceEther) // '0.182826475815887608'


    // 3. Returns the number of transactions address has ever sent, as of blockTag.
    const transactionCount = await provider.getTransactionCount("0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5")
    console.log("Transaction Count:", transactionCount) // 42
}

main()
