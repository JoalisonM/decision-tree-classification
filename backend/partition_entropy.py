from typing import List, Any
from entropia_dados import *


def partition_entropy(subsets: List[List[Any]]) -> float:
    """Retorna a entropia da partição dos dados em subconjuntos"""
    total_count = sum(len(subset) for subset in subsets)

    return sum(data_entropy(subset) * len(subset) / total_count
               for subset in subsets)
