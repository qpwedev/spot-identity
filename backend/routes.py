from flask import Blueprint, request
from api.eas.eas_issuer import issueAttestation
import json
from polygon_id.credential_issuer import generate_credential_link, Scores
from spot_scoring.scoring import get_scores

main = Blueprint('main', __name__)


@main.route('/issue-eas-attestation', methods=['POST'])
def attest():
    data = request.get_json()

    try:
        attestation_data = issueAttestation(
            data['recipient'],
            data['degen_score'],
            data['nomis_score_eth'],
            data['wallet_data'],
            data['social_score'],
            data['gitcoin_score'],
            data['spot_score']
        )
    except Exception as e:

        error = {
            "error": str(e)
        }

        return json.dumps(error)

    return json.dumps(attestation_data)


@main.route('/get-scores', methods=['GET'])
def scores():

    try:
        # get query param
        recipient = request.args.get('recipient')

        scores = get_scores(
            recipient
        )
    except Exception as e:

        error = {
            "error": str(e)
        }

        return json.dumps(error)

    return json.dumps(scores)


@main.route('/hello', methods=['POST'])
def hello():
    return "Hello, World!"


@main.route('/issue-polygon-link', methods=['POST'])
def polygon_link():
    try:
        data = request.get_json()

        scores = Scores(
            data['social_score'],
            data['degen_score'],
            data['nomis_score_eth'],
            data['gitcoin_score'],
            data['spot_score'],
            data['wallet_data']
        )

        polygon_id_data = generate_credential_link(
            scores
        )

    except Exception as e:

        error = {
            "error": str(e)
        }

        return json.dumps(error)

    return polygon_id_data
