const { ethers } = require("hardhat")
const { upgrades } = require("hardhat")

async function main() {
  const Token1DividendTracker = await ethers.getContractFactory("Token1DividendTracker")

  // Start deployment, returning a promise that resolves to a contract object
  const token1DividendTracker = await Token1DividendTracker.deploy()
  await token1DividendTracker.deployed()
  console.log("Token1DividendTracker deployed to address:", token1DividendTracker.address)
  await token1DividendTracker.__Token1DividendTracker_init();

  const Token2DividendTracker = await ethers.getContractFactory("Token2DividendTracker")

  // Start deployment, returning a promise that resolves to a contract object
  const token2DividendTracker = await Token2DividendTracker.deploy()
  await token2DividendTracker.deployed()
  console.log("Token2DividendTracker deployed to address:", token2DividendTracker.address)
  await token2DividendTracker.__Token2DividendTracker_init();


  const Rematic = await ethers.getContractFactory("Rematic")
  console.log("Deploying Rematic...")
  // const rematic = await upgrades.deployProxy(Rematic, [token1DividendTracker.address, token2DividendTracker.address], {initializer: '__Rematic_init'})

  // console.log(rematic.address," rematic(proxy) address")
  // console.log(await upgrades.erc1967.getImplementationAddress(rematic.address)," getImplementationAddress")
  // console.log(await upgrades.erc1967.getAdminAddress(rematic.address)," getAdminAddress")    
  const rematic = await Rematic.deploy()
  await rematic.deployed()
  console.log("Rematic deployed to address:", rematic.address)
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

/*
Token1DividendTracker deployed to address: 0x1D802462fEba721d564E1002789764812adb4A24
Token2DividendTracker deployed to address: 0x8198f74a1F4efB09d553215d4095428E1FDBE893
Deploying Rematic...
Rematic deployed to address: 0x489C9fE323fb4818fDbcAEE8a729727Ca38545F3
*/