import requests


def issueAttestation(recipient, degen_score, nomis_score_eth, wallet_data, social_score, gitcoin_score, spot_score):
    data = {
        'recipient': recipient,
        'degen_score': degen_score,
        'nomis_score_eth': nomis_score_eth,
        'wallet_data': wallet_data,
        'social_score': social_score,
        'gitcoin_score': gitcoin_score,
        'spot_score': spot_score
    }

    response = requests.post(
        'http://localhost:7777/issue-attestation', json=data)

    if response.status_code == 200:
        data = response.json()

        data['url'] = 'https://sepolia.easscan.org/attestation/view/' + \
            data['newAttestationUID']

        return data
    else:
        return response.status_code

# recipient = '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165'
# degen_score = 111111
# nomis_score_eth = 1000
# wallet_data = 1111
# social_score = 777
# gitcoin_score = 777
# spot_score = 777

# result = issueAttestation(recipient, degen_score,
#                           nomis_score_eth, wallet_data, social_score, gitcoin_score, spot_score)

# print(result)
