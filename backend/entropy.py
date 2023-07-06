from typing import List
from math import log


def entropy(class_probabilities: List[float]) -> float:
    """Calcula a entropia para a lista de probabilidades
    de classe informada"""

    return sum(-p*log(p, 2)
               for p in class_probabilities
               if p > 0)


assert entropy([1.0]) == 0
assert entropy([0.5, 0.5]) == 1
assert 0.81 < entropy([0.25, 0.75]) < 0.82
