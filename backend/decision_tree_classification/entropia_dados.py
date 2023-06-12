from typing import List, Any
from collections import Counter
from entropy import *

def class_probabilities(labels:List[Any]) -> List[float]:
  total_count = len(labels)
  return [count / total_count
    for count in Counter(labels).values()]

def data_entropy(labels: List[Any]) -> float:
  return entropy(class_probabilities(labels))