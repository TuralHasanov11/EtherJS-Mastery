const { Provider } = require("@ethersproject/abstract-provider");
const { provider } = require("./0_Provider")

// 1. Check if is provider
console.log("Is Provider: ", Provider.isProvider(provider))


// 2. Indicates if the Provider is currently polling. 
//    If there are no events to poll for or polling has been explicitly disabled, this will be false.
console.log("Is Polling: ", provider.isPolling)


// 3. The frequency at which the provider polls.
console.log("Polling interval: ", provider.pollingInterval)
