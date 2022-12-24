const { provider } = require("./0_Provider")
const { ethers } = require("ethers")

provider.on("network", (newNetwork, oldNetwork) => {
  // When a Provider makes its initial connection, it emits a "network"
  // event with a null oldNetwork along with the newNetwork. So, if the
  // oldNetwork exists, it represents a changing network
  if (oldNetwork) {
    window.location.reload();
  }
});

async function main() {
  // The gas price (in wei)...
  const gasPrice = await provider.getGasPrice()
  // { BigNumber: "21971214174" }
  console.log(ethers.utils.formatUnits(gasPrice, "gwei")) // '21.971214174'

  // Returns the block number (or height) of the most recently mined block.
  const recentBlockNumber = await provider.getBlockNumber()
  console.log(recentBlockNumber)
  // 15785491

  const feeData = await provider.getFeeData()
  // {
  //   gasPrice: { BigNumber: "21971214174" },
  //   lastBaseFeePerGas: { BigNumber: "21761034090" },
  //   maxFeePerGas: { BigNumber: "45022068180" },
  //   maxPriorityFeePerGas: { BigNumber: "1500000000" }
  // }

  // ...often these values are easier to understand or
  // display to the user in gwei
  console.log(ethers.utils.formatUnits(feeData.maxFeePerGas, "gwei"))

}

main()