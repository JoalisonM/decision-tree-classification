from flask_restful import Resource, reqparse, marshal

from data import *
from main import *
from build_tree_i3 import *

from model.treeDecision import *
from helpers.base_logger import logger

parser = reqparse.RequestParser()
parser.add_argument('answer', type=str, required=False)

class TreeDecisionResource(Resource):
    def get(self):
        response: str = classify_decision_api()

        question = TreeDecisionGet(response)

        return (marshal(question, tree_decision_get_fields), 200)

    def post(self):
        args = parser.parse_args()
        answer = args["answer"]

        response = classify_decision_api(answer)

        if (type(response) == str):
            tree = TreeDecisionPost(response)

            return (marshal(tree, tree_decision_post_fields), 200)
        else:
            tree = TreeDecisionPost(response[0], round(response[1], 2))

            return (marshal(tree, tree_decision_post_fields), 200)
