import math
from api.lens.profile_data import fetch_profile_data
from api.airstack.address_data import fetch_address_data
from api.degen.degen_score import get_degen_score
from api.nomis.nomis_score import get_nomis_score_eth
from api.gitcoin.gitcoin_score import get_gitcoin_score


def calculate_social_score(lens_data):
    max_collects = 1
    max_comments = 5
    max_followers = 10
    max_following = 5
    max_mirrors = 1
    max_posts = 5
    max_publications = 5

    collects = lens_data['totalCollects']
    comments = lens_data['totalComments']
    followers = lens_data['totalFollowers']
    following = lens_data['totalFollowing']
    mirrors = lens_data['totalMirrors']
    posts = lens_data['totalPosts']
    publications = lens_data['totalPublications']

    collects = min(collects, max_collects)
    comments = min(comments, max_comments)
    followers = min(followers, max_followers)
    following = min(following, max_following)
    mirrors = min(mirrors, max_mirrors)
    posts = min(posts, max_posts)
    publications = min(publications, max_publications)

    weight_sum = max_collects + max_comments + max_followers + \
        max_following + max_mirrors + max_posts + max_publications

    social_score = (max_collects*collects/max_collects + max_comments*comments/max_comments + max_followers*followers/max_followers + max_following *
                    following/max_following + max_mirrors*mirrors/max_mirrors + max_posts*posts/max_posts + max_publications*publications/max_publications) / weight_sum

    return social_score


def calculate_wallet_data_score(wallet_data):
    poaps = wallet_data.get('poaps')
    poaps_count = len(poaps) if poaps is not None else 0

    token_balances = wallet_data.get('tokenBalances')
    if token_balances is None:
        tokens_count = 0
        nfts_count = 0
    else:
        tokens_count = len(
            [t for t in token_balances if t.get('tokenType') == 'ERC20'])
        nfts_count = len(
            [t for t in token_balances if t.get('tokenType') == 'ERC721'])

    token_transfers = wallet_data.get('tokenTransfers')
    tokens_transfers_count = len(
        token_transfers) if token_transfers is not None else 0

    max_poaps_count = 5
    max_tokens_count = 5
    max_nfts_count = 10
    max_tokens_transfers_count = 10

    poaps_count = min(poaps_count, max_poaps_count)
    tokens_count = min(tokens_count, max_tokens_count)
    nfts_count = min(nfts_count, max_nfts_count)
    tokens_transfers_count = min(
        tokens_transfers_count, max_tokens_transfers_count)

    # weights for each parameter
    weight_poaps_count = 10
    weight_tokens_count = 10
    weight_nfts_count = 10
    weight_tokens_transfers_count = 10

    # sum
    weight_sum = weight_poaps_count + weight_tokens_count + \
        weight_nfts_count + weight_tokens_transfers_count

    # Calculate wallet data score
    wallet_data_score = (weight_poaps_count*poaps_count/max_poaps_count + weight_tokens_count*tokens_count/max_tokens_count + weight_nfts_count *
                         nfts_count/max_nfts_count + weight_tokens_transfers_count*tokens_transfers_count/max_tokens_transfers_count) / weight_sum

    return wallet_data_score


def calculate_degen_score(address):
    score = get_degen_score(address)
    return 1


def calculate_nomis_score_eth(address):
    score = get_nomis_score_eth(address)

    if score:
        return score['data']['score']

    return 1


def calculate_gitcoin_score(address):
    score = get_gitcoin_score(address)

    if score:
        return round(float(score['score']) / 100, 5)

    return 1


def calculate_spot_score(followers, following, posts, comments, mirrors, publications, collects, gitcoin):
    max_followers = 5000
    max_following = 200
    max_posts = 20
    max_comments = 100
    max_mirrors = 10
    max_publications = 200
    max_collects = 5
    max_gitcoin = 100

    followers = min(followers, max_followers)
    following = min(following, max_following)
    posts = min(posts, max_posts)
    comments = min(comments, max_comments)
    mirrors = min(mirrors, max_mirrors)
    publications = min(publications, max_publications)
    collects = min(collects, max_collects)
    gitcoin = min(gitcoin, max_gitcoin)

    followers = math.log1p(followers) / math.log1p(max_followers)
    posts = math.log1p(posts) / math.log1p(max_posts)
    gitcoin = math.log1p(gitcoin) / math.log1p(max_gitcoin)

    weight_followers = 10
    weight_following = 3
    weight_posts = 6
    weight_comments = 6
    weight_mirrors = 2
    weight_publications = 8
    weight_collects = 3
    weight_gitcoin = 4

    total_weights = weight_followers + weight_following + weight_posts + weight_comments + \
        weight_mirrors + weight_publications + weight_collects + weight_gitcoin

    lens_score = (weight_followers*followers + weight_following*following/max_following +
                  weight_posts*posts + weight_comments*comments/max_comments +
                  weight_mirrors*mirrors/max_mirrors + weight_publications*publications/max_publications +
                  weight_collects*collects/max_collects) / total_weights

    gitcoin_score = (weight_gitcoin*gitcoin) / total_weights

    total_score = 777 * (lens_score + gitcoin_score)

    return lens_score, gitcoin_score, total_score


def get_scores(address):
    profile_data = fetch_address_data(address)

    if profile_data == None:
        return None

    wallet_data_score = calculate_wallet_data_score(profile_data['Wallet'])

    lens_handle = None

    if 'socials' in profile_data['Wallet'] and profile_data['Wallet']['socials'] is not None:
        for social in profile_data['Wallet']['socials']:
            if social['dappName'] == 'lens':
                lens_handle = social['profileName']

    lens_data = None

    social_score = 0

    if lens_handle:
        lens_data = fetch_profile_data(lens_handle)['data']['profile']['stats']
        social_score = calculate_social_score(lens_data)

    degen_score = calculate_degen_score(address)

    nomis_score = calculate_nomis_score_eth(address)

    gitcoin_score = calculate_gitcoin_score(address)

    print(
        social_score,
        degen_score,
        nomis_score,
        gitcoin_score,
        wallet_data_score
    )

    return {
        "scores": {
            "social_score": social_score,
            "degen_score": degen_score,
            "nomis_score_eth": nomis_score,
            "gitcoin_score": gitcoin_score,
            "spot_score": 100 * (float(social_score) + float(degen_score)+float(nomis_score)+float(gitcoin_score) + float(wallet_data_score)) / 5,
            "wallet_data": wallet_data_score,
        },

        "data": {
            "profile_data": profile_data,
            "lens_data": lens_data
        }
    }
