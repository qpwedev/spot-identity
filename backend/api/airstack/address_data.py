from airstack.execute_query import AirstackClient
import asyncio
from pprint import pprint
# from utils.reader import read_query_from_file

AIRSTACK_API_KEY = "72c91a4fb12a4bea913898a41da418b1"


def read_query_from_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()


async def execute_graphql_query(api_key, query, variables=None):
    api_client = AirstackClient(api_key=api_key)
    execute_query_client = api_client.create_execute_query_object(
        query=query, variables=variables)

    return await execute_query_client.execute_query()


FETCH_ADDRESS_DATA_QUERY = read_query_from_file(
    './api/airstack/graphql/address_data.graphql'
)


def fetch_address_data(address: str):

    variables = {"identity": address}

    query_response = asyncio.run(
        execute_graphql_query(
            AIRSTACK_API_KEY,
            FETCH_ADDRESS_DATA_QUERY,
            variables
        )
    )

    return query_response.data
