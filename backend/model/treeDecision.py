from flask_restful import fields

tree_decision_get_fields = {
    'attribute': fields.String
}

tree_decision_post_fields = {
    'attribute': fields.String,
}


class TreeDecisionGet():
    def __init__(self, attribute):
        self.attribute = attribute


class TreeDecisionPost():
    def __init__(self, attribute):
        self.attribute = attribute
