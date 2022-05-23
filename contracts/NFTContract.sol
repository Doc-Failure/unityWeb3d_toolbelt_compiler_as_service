// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

//import "@openzeppelin/contracts/access/Ownable.sol";
/**
 * Constructor inherits VRFConsumerBase
 *
 * Network: Rinkeby
 * Chainlink VRF Coordinator address: 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B
 * LINK token address:                0x01BE23585060835E02B77ef475b0Cc51aA1e0709
 * Key Hash: 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311
 */
contract NFTContract is ERC1155, VRFConsumerBase {
    string public name = "NOME";
    using SafeMath for uint256;
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;
    address public VRFCoordinator;
    // rinkeby: 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B
    address public LinkToken;
    // rinkeby: 0x01BE23585060835E02B77ef475b0Cc51aA1e0709a

    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant SWORD = 2;

  /*   uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant SWORD = 2;
    uint256 public constant SHIELD = 3; */

    mapping(bytes32 => uint256) requestToItem;
    mapping(bytes32 => address) requestToSender;
    mapping(bytes32 => uint256) requestToTokenId;

    constructor(
        address _VRFCoordinator,
        address _LinkToken,
        bytes32 _keyhash,
        // 1 is the equivalent of 0.1 LINK
        // 1 should be the equivalent of 0.0001 LINK
        uint16 _fees
    )
        public
        VRFConsumerBase(_VRFCoordinator, _LinkToken)
        ERC1155(
            "http://www.google.com/{id}.json"
        )
    {
        _mint(address(this), GOLD, 0, "");
        _mint(address(this), SILVER, 0, "");
        _mint(address(this), SWORD, 0, "");

        /* _mint(address(this), GOLD, 0, "");
        _mint(address(this), SILVER, 0, "");
        _mint(address(this), SWORD, 0, "");
        _mint(address(this), SHIELD, 0, ""); */
        VRFCoordinator = _VRFCoordinator;
        LinkToken = _LinkToken;
        keyHash = _keyhash;
        fee = _fees/10000 ** 18;
    }

    function redeemResources(uint256 itemId) public returns (bytes32) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK - fill contract with faucet"
        );
        bytes32 requestId = requestRandomness(keyHash, fee);
        requestToItem[requestId] = itemId;
        requestToSender[requestId] = msg.sender;
        return requestId;
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
        internal
        override
    {
        //we have a 50% chances of receive some resources
        randomResult = randomNumber % 100;
        //if we mined some resources we receive 5 of them
        uint256 quantity = randomResult > 20 ? 10 : 0;

        _mint(requestToSender[requestId], requestToItem[requestId], quantity, "");
    }
}
