import requests
from tenacity import retry, stop_after_attempt, wait_exponential


class Scores:
    def __init__(self, social_score, degen_score, cred_score, nomis_polygon_score, nomis_eth_score, gitcoin_score, spot_score):
        self.social_score = social_score
        self.degen_score = degen_score
        self.cred_score = cred_score
        self.nomis_polygon_score = nomis_polygon_score
        self.nomis_eth_score = nomis_eth_score
        self.gitcoin_score = gitcoin_score
        self.spot_score = spot_score


@retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def generate_credential_link(scores: Scores):

    headers = {
        'authorization': 'Basic dXNlci1hcGk6cGFzc3dvcmQtYXBp',
    }

    json_data = {
        'credentialExpiration': None,
        'credentialSubject': {
            'social-score ': scores.social_score,
            'degen-score': scores.degen_score,
            'cred-score': scores.cred_score,
            'nomis-polygon-score': scores.nomis_polygon_score,
            'nomis-eth-score': scores.nomis_eth_score,
            'gitcoin-score': scores.gitcoin_score,
            'spot-score': scores.spot_score,
        },
        'expiration': None,
        'limitedClaims': 1,
        'mtProof': False,
        # ipfs://QmPumwPj4FtRdpkTH2AcvUuHuef4ZUSeBtVm8ZhtjJcEYw
        'schemaID': 'e8f8c952-4bfb-4246-9d74-606cb85a7130',
        'signatureProof': True,
    }

    response = requests.post(
        'https://issuer-admin.polygonid.me/v1/credentials/links',
        headers=headers,
        json=json_data
    )

    return "https://issuer-ui.polygonid.me/credentials/scan-link/" + response.json()['id']


# p = generate_credential_link(
#     Scores(
#         0.5,
#         0.5,
#         0.5,
#         0.5,
#         0.5,
#         0.5,
#         0.5
#     )
# )

# print(p)
