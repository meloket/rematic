const { ethers } = require("hardhat")
const { upgrades } = require("hardhat")

async function main() {

  const Rematic = await ethers.getContractFactory("Rematic")
  console.log("Deploying Rematic...")
  const rematic = await upgrades.deployProxy(Rematic, { initializer: '__Rematic_init' })

  console.log(rematic.address," rematic(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(rematic.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(rematic.address)," getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})