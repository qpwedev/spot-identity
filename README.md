# SPOT - scores passport attestation 

SPOT is a web3 scores attestation implemented in PolygonID to allow the score-gated sign in 


![image](https://github.com/qpwedev/spot-identity/assets/119045809/2a9d0605-58b3-4a06-8fb0-6a6aef19d5bb)


## NEAR BOS Front-end
Decentralized front-end is deployed on the NEAR Mainnet.

## Scores calculation
integrated scores include Gitcoin score (Gitcoin SDK), Wallet reputation (Airstack), Social score (lens data based on the Lens handle we are fetching from Airstack).

## PolygonID 
All the scores are attested on PolygonID via a schema https://schema-builder-test.polygonid.me/schemas/26b1a2d2-2bd3-44cd-978b-693882805b47 

## Smart contracts 
A smart contract for the NFT SBT mint allows minting an NFT with the scores as attributes and a randomly generated NounsDAO Artwork.

## EAS
The scores passport attestion gets minted on-chain via EAS schema. 
