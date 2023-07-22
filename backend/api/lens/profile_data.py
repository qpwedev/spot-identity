
import json
import requests
# from utils.reader import read_query_from_file


def read_query_from_file(file_path: str):
    with open(file_path, 'r') as file:
        return file.read()


def fetch_profile_data(handle: str):
    BASE_URL = "https://api.lens.dev"
    headers = {"Content-Type": "application/json"}

    query = read_query_from_file('./api/lens/graphql/profile_data.graphql')

    variables = {
        "handle": handle,
    }

    data = json.dumps({
        "query": query,
        "variables": variables,
    })

    response = requests.post(BASE_URL, headers=headers, data=data)

    result = json.loads(response.text)

    return result
