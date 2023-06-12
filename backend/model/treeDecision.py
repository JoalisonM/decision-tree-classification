from flask_restful import fields

tree_decision_fields = {
  'target': fields.String
}

class TreeDecision():
  def __init__(self, target):
    self.target = target