from flask_restful import fields

tree_decision_get_fields = {
    'attribute': fields.String
}

tree_decision_post_fields = {
    'attribute': fields.String,
    'certainty': fields.Float,
}


class TreeDecisionGet():
    def __init__(self, attribute):
        self.attribute = attribute


class TreeDecisionPost():
    def __init__(self, attribute, certainty=None):
        self.attribute = attribute
        self.certainty = certainty
