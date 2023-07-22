import math


def calculate_score(followers, following, posts, comments, mirrors, publications, collects, gitcoin):
    # Maximum values for each parameter
    max_followers = 5000
    max_following = 200
    max_posts = 20
    max_comments = 100
    max_mirrors = 10
    max_publications = 200
    max_collects = 5
    max_gitcoin = 100

    # If the parameter values exceed the maximum values, use the maximum values
    followers = min(followers, max_followers)
    following = min(following, max_following)
    posts = min(posts, max_posts)
    comments = min(comments, max_comments)
    mirrors = min(mirrors, max_mirrors)
    publications = min(publications, max_publications)
    collects = min(collects, max_collects)
    gitcoin = min(gitcoin, max_gitcoin)

    # Adjust the score calculation for followers, posts, and gitcoin to reflect logarithmic growth
    followers = math.log1p(followers) / math.log1p(max_followers)
    posts = math.log1p(posts) / math.log1p(max_posts)
    gitcoin = math.log1p(gitcoin) / math.log1p(max_gitcoin)

    # Weights for each parameter
    weight_followers = 10
    weight_following = 3
    weight_posts = 6
    weight_comments = 6
    weight_mirrors = 2
    weight_publications = 8
    weight_collects = 3
    weight_gitcoin = 4

    # Total weights including gitcoin
    total_weights = weight_followers + weight_following + weight_posts + weight_comments + \
        weight_mirrors + weight_publications + weight_collects + weight_gitcoin

    # Calculate lens score (score excluding gitcoin)
    lens_score = (weight_followers*followers + weight_following*following/max_following +
                  weight_posts*posts + weight_comments*comments/max_comments +
                  weight_mirrors*mirrors/max_mirrors + weight_publications*publications/max_publications +
                  weight_collects*collects/max_collects) / total_weights

    # Calculate gitcoin score
    gitcoin_score = (weight_gitcoin*gitcoin) / total_weights

    # Calculate total score
    total_score = 777 * (lens_score + gitcoin_score)

    return lens_score, gitcoin_score, total_score
