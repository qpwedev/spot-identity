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
        uint160 GitcoinScore;

        address owner;
    }

    mapping(address => ScoreParametrs) public addressToScore;
    mapping(uint256 => address) public tokenIdToAddress;
    

    constructor(
        address factory,
        address owner_
    ) ERC721("scores", "spi") {}


    function mint(
        address receiver,
        ScoreParametrs memory score
    ) external {
        require(addressToScore[receiver].owner == address(0), "You already minted your score");

        _safeMint(receiver, _counter);
        tokenIdToAddress[_counter] = receiver;
        addressToScore[receiver] = score;
        _counter++;
    }

    function updateScore(
        address user,
        ScoreParametrs memory score
    ) external {
        addressToScore[user] = score;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
      
            return
                string(
                    abi.encodePacked(
                        "data:application/json;base64,",
                        Base64.encode(
                            abi.encodePacked(
                                '{"name":"',
                                _counter,
                                '","description":"',
                                _counter,
                                ' - Relinkd Domain","image":"https://noun.pics/',
                                _counter,
                                '","attributes":[{"trait_type":"Degen Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].DegenScore),
                                '"},{"trait_type":"Cred Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].CredScore),
                                '"},{"trait_type":"Gitcoin Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].GitcoinScore),
                                '"}]}'
                            )
                        )
                    )
                );
    }

  
}