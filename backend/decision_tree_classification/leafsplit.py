from typing import NamedTuple, Union, Any

class Leaf(NamedTuple):
  value: Any

class Split(NamedTuple):
  attribute: str
  subtrees: dict
  default_value: Any = None

DecisionTree = Union[Leaf, Split]