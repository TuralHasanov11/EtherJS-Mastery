const { ethers } = require("ethers");
const { provider } = require("./0_Provider")

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const signer = provider.getSigner()
const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider)


async function main() {
    const myAddress = await signer.getAddress()


    // 1. Receive an event when ANY transfer occurs
    contract.on("Transfer", (from, to, amount, event) => {
        console.log(`${from} sent ${ethers.utils.formatEther(amount)} to ${to}`);
    });


    // 2. Filter for address that receives tokens 
    const filter = contract.filters.Transfer(null, myAddress)

    contract.on(filter, (from, to, amount, event) => {
        // The to will always be "address"
        console.log(`I got ${ethers.utils.formatEther(amount)} from ${from}.`);
    });


    // 3. Filter for address that sends tokens 
    const filterFrom = contract.filters.Transfer(myAddress, null);

    // List all transfers sent from me in a specific block range
    const blockNumber = await provider.getBlockNumber() // 15785491
    const transfersSentFromMe = await contract.queryFilter(filterFrom, blockNumber - 10, blockNumber)
    console.log(transfersSentFromMe)

    // List all transfers sent in the last 10,000 blocks
    const transfersSentInLastBlocks = await contract.queryFilter(filterFrom, -10000)
    console.log(transfersSentInLastBlocks)

    // List all transfers ever sent to me
    const transfersSentToMe = await contract.queryFilter(myAddress)
    console.log(transfersSentToMe)


    provider.on("block", (blockNumber) => {
        // Emitted on every block change
    })


    const transactionHash = ""
    provider.once(transactionHash, (transaction) => {
        // Emitted when the transaction has been mined
    })



    // This filter could also be generated with the Contract or Interface API. If address is not specified, any address
    // matches and if topics is not specified, any log matches
    const daiTokenFilter = {
        address: tokenAddress,
        topics: [
            ethers.utils.id("Transfer(address,address,uint256)")
        ]
    }

    provider.on(daiTokenFilter, (log, event) => {
        // Emitted whenever a DAI token transfer occurs
    })


    // Notice this is an array of topic-sets and is identical to using a filter with no address (i.e. match any address)
    const topicSets = [
        utils.id("Transfer(address,address,uint256)"),
        null,
        [
            ethers.hexZeroPad(myAddress, 32),
        ]
    ]

    provider.on(topicSets, (log, event) => {
        // Emitted any token is sent TO either address
    })

}

main()