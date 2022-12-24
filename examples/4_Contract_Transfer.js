const { ethers } = require("ethers");
const { providerTest } = require("./0_Provider")

const account1 = "0x42e9C661A4B2593967feffe6F7caAbCe2CD4DD07"
const account2 = "0x9a55e599fEeEF2DD1498BcCe49289e5D4c2eE50f"

const privateKey1 = "5f38d0e622b9b09b036e7ed632b22d5335ff74947b535e783389c1f17a448550"

const wallet = ethers.Wallet(privateKey1, providerTest)

const contractAddress = "Contract Key"
const ERC20_ABI = [
    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
]

const contract = new ethers.Contract(contractAddress, abi, providerTest);


async function main() {

    const balance = await contract.balanceOf(account1)
    console.log("Reading from address: ", contractAddress)
    console.log("Balance of sender: ", balance)

    const contractWithWallet = contract.connect(wallet)

    const transaction = await contractWithWallet.transfer(account2, balance)
    await transaction.wait()
    console.log(transaction)

    const balanceOfSender = await contract.balanceOf(account1)
    console.log("Balance of sender: ", balanceOfSender)

    const balanceOfReceiver = await contract.balanceOf(account2)
    console.log("Balance of sender: ", balanceOfReceiver)
}

main()