const { provider } = require("./0_Provider")

async function main() {
    // 1. Current block number
    const blockNumber = await provider.getBlockNumber() // 15785491
    console.log("Block Number", blockNumber)

    // 2. Block
    const block = await provider.getBlock(blockNumber)
    console.log("Block:", block) // 42
    // {
    //   hash: '0xf536743c456cd4d9463ff44ad5f49f4d11d523e5af54abad67b8e5406db0da72',
    //   blockHash: '0x660f3f35c295bea00378518994928890e251ccc0558bec4bc922fb49f7788c0a',
    //   blockNumber: 16255791,
    //   transactionIndex: 79,
    //   confirmations: 1,
    //   from: '0xc5beAeD185BbD3F704f759C4111F39134dA3ed55',
    //   gasPrice: [BigNumber],
    //   maxPriorityFeePerGas: [BigNumber],
    //   maxFeePerGas: [BigNumber],
    //   gasLimit: [BigNumber],
    //   to: '0x4a25230F55bB56b4e1f5a0F579D840E91C71d2aE',
    //   value: [BigNumber],
    //   nonce: 11,
    //   data: '0x',
    //   creates: null,
    //   chainId: 1,
    // }


    // 3. Block from the network, where the result.transactions is a list of transaction hashes.
    const lockWithTransactions = await provider.getBlockWithTransactions(blockNumber)
    console.log("Block With Transactions:", lockWithTransactions) // 42
}

main()