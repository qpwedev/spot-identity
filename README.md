# SPOT - scores passport attestation 

Hosted at: [LINK]

SPOT is a web3 scores attestation implemented in PolygonID to allow sign in to the score-gated dapps and apps

![image](https://github.com/qpwedev/spot-identity/assets/119045809/2a9d0605-58b3-4a06-8fb0-6a6aef19d5bb)

## Tools Used 
Here's what we integrated.

### NEAR BOS Front-end
Decentralized front-end is deployed on the NEAR Mainnet.

### Scores Calculation Back-end
integrated scores include Gitcoin score (Gitcoin SDK), Wallet reputation (Airstack), Social score (lens data based on the Lens handle we are fetching from Airstack).

### PolygonID 
All the scores are attested on PolygonID via a schema https://schema-builder-test.polygonid.me/schemas/26b1a2d2-2bd3-44cd-978b-693882805b47 

### Smart Contract
A smart contract for the NFT SBT mint allows minting an NFT with the scores as attributes and a randomly generated NounsDAO Artwork.
The contract is deployed on Polygon, Mantle and Neon EVM. 

### EAS
The scores passport attestion gets minted on-chain via EAS schema. 

# Use Case

![image](https://github.com/qpwedev/spot-identity/assets/119045809/aa4fde89-9f0a-4085-9841-38c6903dc7de)

# Launch
## Front-end Launch 

## Verifier 

## Issuer 

