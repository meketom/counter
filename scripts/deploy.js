const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    let counterContract;
    counterContract = await hre.ethers.deployContract("Counter");
    await counterContract.waitForDeployment();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})