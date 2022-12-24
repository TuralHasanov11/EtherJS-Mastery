const { provider } = require("./0_Provider")


async function main() {
  // 1. Returns the transaction with hash or null if the transaction is unknown.
  const transactionNumber = "0x5b73e239c55d790e3c9c3bbb84092652db01bb8dbf49ccc9e4a318470419d9a0"
  const transaction = await provider.getTransaction(transactionNumber);
  console.log("Transaction:", transaction)

  const transactionReceipt = await provider.getTransactionReceipt(transaction.hash)
  console.log("Transaction Receipt:", transactionReceipt)


  const signedTransaction = "";
  await provider.sendTransaction(signedTransaction);
}

main()