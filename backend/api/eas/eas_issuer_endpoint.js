import express from 'express';
import bodyParser from 'body-parser';
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import { config } from "dotenv";
config();

const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies

export async function issueAttestation(privateKey, recipient, degen_score, nomis_score_eth, wallet_data, social_score, gitcoin_score, spot_score) {
    const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";

    const eas = new EAS(EASContractAddress);

    const provider = ethers.providers.getDefaultProvider("sepolia");

    const signer = new ethers.Wallet(privateKey, provider);

    eas.connect(signer);

    const schemaEncoder = new SchemaEncoder("uint32 degen-score,uint32 nomis-score-eth,uint32 wallet-data,uint32 social-score,uint32 gitcoin-score,uint32 spot-score");

    const data = [
        { name: "degen-score", value: degen_score, type: "uint32" },
        { name: "nomis-score-eth", value: nomis_score_eth, type: "uint32" },
        { name: "wallet-data", value: wallet_data, type: "uint32" },
        { name: "social-score", value: social_score, type: "uint32" },
        { name: "gitcoin-score", value: gitcoin_score, type: "uint32" },
        { name: "spot-score", value: spot_score, type: "uint32" },
    ];

    const encodedData = schemaEncoder.encodeData(data);

    const schemaUID = "0xd616c0140d1e3e8bd835314909aee2a26136f9f8652d8614a408384337a07a05";

    const tx = await eas.attest({
        schema: schemaUID,
        data: {
            recipient: recipient,
            expirationTime: 0,
            revocable: true,
            data: encodedData,
        },
    });

    const newAttestationUID = await tx.wait();

    console.log("New attestation UID:", newAttestationUID);

    return newAttestationUID;
}

app.post('/issue-attestation', async (req, res) => {
    const { recipient, degen_score, nomis_score_eth, wallet_data, social_score, gitcoin_score, spot_score } = req.body;
    const privateKey = process.env.SEPOLIA_PRIVATE_KEY;
    const newAttestationUID = await issueAttestation(privateKey, recipient, degen_score, nomis_score_eth, wallet_data, social_score, gitcoin_score, spot_score);
    res.send({ newAttestationUID });
});

const port = process.env.EAS_PORT || 3003;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
