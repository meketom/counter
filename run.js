const Counter = artifacts.require("Counter");

module.exports = async function (callback) {
    let accounts = await web3.eth.getAccounts();
    console.log(accounts)
    const instance = await Counter.deployed();
    console.log(instance.address)
    await instance.increment({from: accounts[0]});

    const counter = await instance.getCounter();
    console.log('Counter value:' + counter.toNumber())
    callback();
}