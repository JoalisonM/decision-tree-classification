from typing import List
from math import log


def entropy(class_probabilities: List[float]) -> float:
    """Calcula a entropia para a lista de probabilidades
    de classe informada"""

    return sum(-p*log(p, 2)
               for p in class_probabilities
               if p > 0)
