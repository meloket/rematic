const { ethers } = require("hardhat")
const { upgrades } = require("hardhat")

async function main() {

  const Rematic = await ethers.getContractFactory("Rematic")
  console.log("Deploying Rematic...")
  const rematic = await upgrades.deployProxy(Rematic, {initializer: '__Rematic_init'})

  console.log(rematic.address," rematic(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(rematic.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(rematic.address)," getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

/*
rinkeby:
0xD4DFC916C56cE28F17AE5F49BF07205524a7446c  rematic(proxy) address
0xEE4f72eA4Fab5AE1997B8BaaB9Cd6A055f9e1bc0  getImplementationAddress
0xee77459B26f46a253FFEb51295A65399457e2E76  getAdminAddress
*/

/*
testnet.bscscan
0x2b16185E8FED153d03D65E421A24CB8667569d19  rematic(proxy) address
0x37aa8d6Fa4185c44B85207568d1698f3F8C7323f  getImplementationAddress
0xdF0A6c3ee3358771e52f0829411ea193E429cDC1  getAdminAddress
*/