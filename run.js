const Counter = artifacts.require("Counter");

module.exports = async function (callback) {
    let accounts = await web3.eth.getAccounts();
    const instance = await Counter.deployed();
    await instance.increment({from: accounts[0]});

    const counter = await instance.getCounter();
    console.log('Counter value:' + counter.toNumber())
    callback();
}