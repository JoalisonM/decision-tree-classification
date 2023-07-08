from typing import NamedTuple, Union, Any

class Leaf(NamedTuple):
  value: Any
  certainty: float

class Split(NamedTuple):
  attribute: str
  subtrees: dict
  num_instances: int
  confidence: float
  default_value: Any = None

DecisionTree = Union[Leaf, Split]