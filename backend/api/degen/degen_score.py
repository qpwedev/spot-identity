import requests
from tenacity import retry, stop_after_attempt, wait_exponential


@retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def get_degen_score(beacon_address):

    response = requests.get(
        f"https://beacon.degenscore.com/v1/beacon/{beacon_address}")

    result = response.json()

    return result if result['code'] != 5 else 0
