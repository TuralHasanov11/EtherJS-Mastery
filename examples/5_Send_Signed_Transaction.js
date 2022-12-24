const { ethers } = require("ethers");
const { providerTest } = require("./0_Provider")

const account1 = "0x42e9C661A4B2593967feffe6F7caAbCe2CD4DD07"
const account2 = "0x9a55e599fEeEF2DD1498BcCe49289e5D4c2eE50f"

const privateKey1 = "Private Key of Sender"


const wallet = ethers.Wallet(privateKey1, providerTest)


async function main() {

    // Account 1 balance before transfer
    let senderBalance = await providerTest.getBalance(account1)

    // Account 2 balance before transfer
    let receiverBalance = await providerTest.getBalance(account2)

    console.log("Sender Balance Before Transaction: ", ethers.utils.formatEther(senderBalance))
    console.log("Receiver Balance Before Transaction: ", ethers.utils.formatEther(receiverBalance))


    // Send Ether
    const transaction = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    // Wait for Transaction to be mined 
    await transaction.wait()
    console.log(transaction)

    // Account 1 balance after transfer
    senderBalance = await providerTest.getBalance(account1)

    // Account 2 balance after transfer
    receiverBalance = await providerTest.getBalance(account2)

    console.log("Sender Balance After Transaction: ", ethers.utils.formatEther(senderBalance))
    console.log("Receiver Balance After Transaction: ", ethers.utils.formatEther(receiverBalance))
}

main()