const { ethers } = require("hardhat")
const { upgrades } = require("hardhat")

async function main() {
  const SafeMath = await ethers.getContractFactory("contracts/Rematic.sol:SafeMath")

  // Start deployment, returning a promise that resolves to a contract object
  const safeMath = await SafeMath.deploy()
  await safeMath.deployed()

  const IterableMapping = await ethers.getContractFactory("contracts/Rematic.sol:IterableMapping")

  // Start deployment, returning a promise that resolves to a contract object
  const iterableMapping = await IterableMapping.deploy()
  await iterableMapping.deployed()

  const SafeMathInt = await ethers.getContractFactory("contracts/Rematic.sol:SafeMathInt")

  // Start deployment, returning a promise that resolves to a contract object
  const safMathInt = await SafeMathInt.deploy()
  await safMathInt.deployed()

  const AddressUpgradeable = await ethers.getContractFactory("contracts/Rematic.sol:AddressUpgradeable")

  // Start deployment, returning a promise that resolves to a contract object
  const addressUpgradeable = await AddressUpgradeable.deploy()
  await addressUpgradeable.deployed()

  const SafeMathUint = await ethers.getContractFactory("contracts/Rematic.sol:SafeMathUint")

  // Start deployment, returning a promise that resolves to a contract object
  const safeMathUint = await SafeMathUint.deploy()
  await safeMathUint.deployed()

  const Rematic = await ethers.getContractFactory("Rematic", {
    libraries: {
      SafeMath: safeMath.address,
      IterableMapping: iterableMapping.address,
      SafeMathInt: safMathInt.address,
      AddressUpgradeable: addressUpgradeable.address,
      SafeMathUint: safeMathUint.address,
    },
  })
  console.log("Deploying Rematic...")
  const rematic = await upgrades.deployProxy(Rematic, {initializer: '__Rematic_init',unsafeAllowLinkedLibraries: true, })

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