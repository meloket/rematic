// test/1.Box.test.ts
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Box", function () {
  let box;

  beforeEach(async function () {
    const Box = await ethers.getContractFactory("Box")
    box = await Box.deploy()
    await box.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box.store(42)
    expect(await box.retrieve() / 1).to.equal(42)

    await box.store(100)
    expect(await box.retrieve() / 1).to.equal(100)
  })
})