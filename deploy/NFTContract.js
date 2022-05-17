//{ ethers, deployments, getNamedAccounts }
module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  
  let { address } = await deploy("NFTContract", {
    from: deployer,
    args: ["0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B", "0x01BE23585060835E02B77ef475b0Cc51aA1e0709", "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311"],
    log: true,
    deterministicDeployment: false
  })
/* 
  await deploy("ERC20TokenLauncher", {
    from: deployer,
    log: true,
    deterministicDeployment: false
  })

  const ERC20TokenLauncher = await ethers.getContract("ERC20TokenLauncher")
  if (ERC20TokenLauncher) {
    // Transfer Sushi Ownership to Chef
    console.log("ERC20TokenLauncher deployed at address: "+ERC20TokenLauncher)
  }
*/
}

module.exports.tags = ["NFTContract"]
