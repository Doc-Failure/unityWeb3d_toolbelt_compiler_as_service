//{ ethers, deployments, getNamedAccounts }
module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const chainId = await getChainId()
  const { deploy } = deployments
  const { deployer, dev } = await getNamedAccounts()
  console.log("deployer: "+deployer);
  console.log("dev: "+dev);
  var VRF_Coordinator="";
  var LINK_Token="";
  var Key_Hash="";
  var Fee=1;

  const fs = require('fs');
  const networkInFile = fs.readFileSync('Networks_ChainlinkVFR_Adresses.json');

  const networks = JSON.parse(networkInFile);
  const network = networks.filter((elem)=>{ 
    if(elem.ChainId == chainId)
      return elem
    });
  VRF_Coordinator=network[0].VRF_Coordinator;
  LINK_Token=network[0].LINK_Token;
  Key_Hash=network[0].Key_Hash;
  Fee=network[0].Fee;

  let { address } = await deploy("NFTContract", {
    from: deployer,
    args: [VRF_Coordinator, LINK_Token, Key_Hash, Fee],
    log: true,
    deterministicDeployment: false
  });
}

module.exports.tags = ["NFTContract"]
