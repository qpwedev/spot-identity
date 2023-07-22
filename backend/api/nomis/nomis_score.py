import requests
# from tenacity import retry, stop_after_attempt, wait_exponential


# @retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def get_nomis_score_eth(address):
    # response = requests.get(
    #     f"https://api.nomis.cc/api/v1/ethereum/wallet/{address}/score?scoreType=0&nonce=0")
    # result = response.json()
    # return result

    return None


# @retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def get_nomis_score_polygon(address):
    # response = requests.get(
    #     f"https://api.nomis.cc/api/v1/polygon/wallet/{address}/score?scoreType=0&nonce=0")
    # result = response.json()
    # return result

    return None


print(
    get_nomis_score_eth(
        '0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401'
    )
)
