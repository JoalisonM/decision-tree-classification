from classify import *
from leafsplit import *
from flask_restful import fields

tree_decision_get_fields = {
    'question': fields.String
}

tree_decision_post_fields = {
    'attribute': fields.String,
    'subtree': fields.Raw,
}


class TreeDecisionGet():
    def __init__(self, question):
        self.question = question


class TreeDecisionPost():
    def __init__(self, attribute, subtree):
        self.attribute = attribute
        self.subtree = subtree
