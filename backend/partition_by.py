from typing import Dict, TypeVar, List, Any
from collections import defaultdict

T = TypeVar('T') # tipo genérico para entrada de dados

def partition_by(inputs: List[T], attribute: str) -> Dict[Any, List[T]]:
  """Particione as entradas em listas com base no atributo especificado"""
  partitions: Dict[Any, List[T]] = defaultdict(list)

  for input in inputs:
    key = getattr(input, attribute) # Valor do atributo especificado
    partitions[key].append(input) # Adiciona a entrada na partição

  return partitions