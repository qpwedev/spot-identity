// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract Lock is ERC721, Ownable {

    uint256 private _counter;

    struct ScoreParametrs {
        uint160 DegenScore; 
        uint160 CredScore; 
        uint160 NomisPolygonScore;
        uint160 NomisEthereumScore;
        uint160 GitcoinScore;

        uint160 WalletNFTs; 
        uint160 WalletTokens;
        uint160 WalletAge; 
        // uint160 WalletGuilds; 
        // uint160 WalletTransactions;
        // uint160 WalletPoaps; 
        // uint160 WalletDomains;

        // uint160 LensFollowers;
        // uint160 LensFollowing; 
        // uint160 LensPosts;
        // uint160 LensComments;
        // uint160 FarcasterFollowers; 
        // uint160 FarcasterFollowing;
        // uint160 FarcasterPosts;
        // uint160 FarcasterComments;

        address owner;
    }

    mapping(address => ScoreParametrs) public addressToScore;
    mapping(uint256 => address) public tokenIdToAddress;
    

    constructor() ERC721("scores", "spi") {}


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
                                Strings.toString(_counter),
                                '","description":"',
                                Strings.toString(_counter),
                                ' SPOT","image":"https://noun.pics/',
                                Strings.toString(_counter),
                                '.png","attributes":[{"trait_type":"Degen Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].DegenScore),
                                '"},{"trait_type":"Cred Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].CredScore),
                                '"},{"trait_type":"Nomis Polygon Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].NomisPolygonScore),
                                '"},{"trait_type":"Nomis Ethereum Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].NomisEthereumScore),
                                '"},{"trait_type":"Gitcoin Score","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].GitcoinScore),
                                '"},{"trait_type":"Wallet NFTs","value":"',
                                Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletNFTs),
                                '"},{"trait_type":"Wallet Tokens","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletTokens),
                                // '"},{"trait_type":"Wallet Age","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletAge),
                                // '"},{"trait_type":"Wallet Guilds","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletGuilds),
                                // '"},{"trait_type":"Wallet Transactions","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletTransactions),
                                // '"},{"trait_type":"Wallet Poaps","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletPoaps),
                                // '"},{"trait_type":"Wallet Domains","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].WalletDomains),
                                // '"},{"trait_type":"Lens Following","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].LensFollowing),
                                // '"},{"trait_type":"Lens Posts","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].LensPosts),
                                // '"},{"trait_type":"Lens Comments","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].LensComments),
                                // '"},{"trait_type":"Farcaster Followers","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].FarcasterFollowers),
                                // '"},{"trait_type":"Farcaster Following","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].FarcasterFollowing),
                                // '"},{"trait_type":"Farcaster Posts","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].FarcasterPosts),
                                // '"},{"trait_type":"Farcaster Comments","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].FarcasterComments),
                                // '"},{"trait_type":"LensFollowers","value":"',
                                // Strings.toString(addressToScore[tokenIdToAddress[tokenId]].LensFollowers),
                                '"}]}'
                            )
                        )
                    )
                );
    }
  
}