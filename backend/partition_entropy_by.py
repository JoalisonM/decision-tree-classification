from partition_by import *
from partition_entropy import *


def partition_entropy_by(inputs: List[Any], attribute: str, label_attribute: str) -> float:
    """Calcula a entropia correspondente à partição especificada"""
    # as partições contém as entradas
    partitions = partition_by(inputs, attribute)

    # mas o partition_entropy só precisa dos rótulos das classes
    labels = [[getattr(input, label_attribute) for input in partition]
              for partition in partitions.values()]

    return partition_entropy(labels)
