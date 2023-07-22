// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract RelinkdDomain is ERC721, Ownable {

    uint256 private _counter;

    struct ScoreParametrs {
        uint160 DegenScore; 
        uint160 CredScore; 
        uint160 NomisPolygonScore;
        uint160 NomisEthereumScore;

        uint160 numberOfToken;
    }

    mapping(address => ScoreParametrs) public domainToTokenId;
    mapping(uint160 => address) public tokenIdToAddress;
    

    constructor(
        address factory,
        address owner_
    ) ERC721("scores", "spi") {}


    function mint(
        address receiver
    ) external {
      _counter++;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
      
    }

  
}