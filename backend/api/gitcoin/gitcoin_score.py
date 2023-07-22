import requests
from pprint import pprint
from tenacity import retry, stop_after_attempt, wait_exponential

API_KEY = 'Jtqysgdo.I7yu9LfaQTklHrvuak9Q8CQUAlrHMkLs'


@retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def get_gitcoin_score(address, api_key):
    headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': api_key,
        'Accept': 'application/json',
    }
    response = requests.get(
        f"https://api.scorer.gitcoin.co/registry/score/97/{address}", headers=headers)
    result = response.json()

    if 'detail' in result and result['detail'] == 'Unable to get score for provided scorer.':
        return None

    return result

# {'address': '0xdd6bfbe9ec414ffabbcc80bb88378c0684e2ad9c',
#  'error': None,
#  'evidence': None,
#  'last_score_timestamp': '2023-07-12T22:01:43.912850+00:00',
#  'score': '4.850000000',
#  'status': 'DONE'}

# pprint(
#     get_gitcoin_score(
#         '0xDD6BFbe9EC414FFABBcc80BB88378c0684e2Ad9c',
#         API_KEY
#     )
# )
