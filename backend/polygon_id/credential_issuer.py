import requests
from tenacity import retry, stop_after_attempt, wait_exponential


class Scores:
    def __init__(self, social_score, degen_score, nomis_score_eth, gitcoin_score, spot_score, wallet_data):
        self.social_score = social_score
        self.degen_score = degen_score
        self.nomis_score_eth = nomis_score_eth
        self.gitcoin_score = gitcoin_score
        self.spot_score = spot_score
        self.wallet_data = wallet_data


@retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def generate_credential_link(scores: Scores):

    headers = {
        'authorization': 'Basic dXNlci1hcGk6cGFzc3dvcmQtYXBp',
    }

    json_data = {
        'credentialExpiration': None,
        'credentialSubject': {
            'degen-score ': scores.degen_score,
            'nomis-score-eth': scores.nomis_score_eth,
            'wallet-data': scores.wallet_data,
            'social-score': scores.social_score,
            'gitcoin-score ': scores.gitcoin_score,
            'spot-score': scores.spot_score,
        },
        'expiration': None,
        'limitedClaims': 1,
        'mtProof': False,
        'schemaID': 'c895e94a-643f-4e47-8ece-b434a520ba08',
        'signatureProof': True,
    }

    response = requests.post(
        'https://issuer-admin.polygonid.me/v1/credentials/links',
        headers=headers,
        json=json_data
    )

    return {"url": "https://issuer-ui.polygonid.me/credentials/scan-link/" + response.json()['id'], "id": response.json()['id']}


# p = generate_credential_link(
#     Scores(
#         0.5,
#         0.5,
#         0.5,
#         0.5,
#         0.5,
#         0.5
#     )
# )

# print(p)
