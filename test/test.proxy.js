// test/Rematic.proxy.js
// Load dependencies
const { expect } = require('chai');

let Rematic;
let rematic;

// Start test block
describe('Rematic (proxy)', function () {
  beforeEach(async function () {
    Token1DividendTracker = await ethers.getContractFactory("Token1DividendTracker")

    // Start deployment, returning a promise that resolves to a contract object
    token1DividendTracker = await Token1DividendTracker.deploy()
    await token1DividendTracker.deployed()

    Token2DividendTracker = await ethers.getContractFactory("Token2DividendTracker")

    // Start deployment, returning a promise that resolves to a contract object
    token2DividendTracker = await Token2DividendTracker.deploy()
    await token2DividendTracker.deployed()


    Rematic = await ethers.getContractFactory("Rematic")
    rematic = await upgrades.deployProxy(Rematic, [token1DividendTracker.address, token2DividendTracker.address], { initializer: '__Rematic_init' })
  });

  // Test case
  it('retrieve returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await rematic.symbol()).toString()).to.equal('RMTX');
  });
});