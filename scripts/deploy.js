async function main() {
    const RaceKingdom = await ethers.getContractFactory("RaceKingdom")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myContract = await RaceKingdom.deploy()
    await myContract.deployed()
    console.log("Contract deployed to address:", myContract.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  

    /*
    0x1658E87A719679cfA595695958Bd9C4c60f24e74  box(proxy) address
0x2b16185E8FED153d03D65E421A24CB8667569d19  getImplementationAddress
0xee77459B26f46a253FFEb51295A65399457e2E76  getAdminAddress
*/