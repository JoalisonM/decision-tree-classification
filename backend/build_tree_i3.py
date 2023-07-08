from typing import List

from leafsplit import *
from partition_entropy_by import *


def build_tree_id3(inputs: List[Any], split_attributes: List[str], target_attribute: str, num_instances: int = None) -> DecisionTree:
    if(num_instances is None):
        num_instances = len(inputs)
    # Conte os rótulos especificados
    # Itera por todos as tuplas contando quantos valores diferentes o target_attribute assume
    label_counts = Counter(getattr(input, target_attribute)
                           for input in inputs)

    # descobre o rótulo mais comum
    most_common_label = label_counts.most_common(1)[0][0]

    # Se houver só um rótulo, preveja esse rótulo.
    # Se só tem uma resposta (uma entrada em label_counts)
    # então a entropia é zero e retorna uma folha P/o rótulo
    if len(label_counts) == 1:
        certainty = 1.0

        return Leaf(most_common_label, certainty)

    # Se não restar nenhum atributo de divisão, retorne o rótulo majoritário
    # Se não tem como ramificar retorne o label(rótulo) mais comum
    if not split_attributes:
        total_instances = sum(label_counts.values())
        majority_label_count = max(label_counts.values())
        certainty = majority_label_count / total_instances

        return Leaf(most_common_label, certainty)

    # Caso contrário, divida pelo melhor resultado
    def split_entropy(attribute: str) -> float:
        """A função auxiliar para encontrar o melhor atributo"""
        # Calcula a entropia da partição pelo atributo
        return partition_entropy_by(inputs, attribute, target_attribute)

    # encontra o atributo com a menor entropia
    best_attribute = min(split_attributes, key=split_entropy)

    # particiona novamente usando o valor do melhor atributo
    partitions = partition_by(inputs, best_attribute)

    # cria uma nova lista de atributos sem o melhor atributo
    new_attributes = [a for a in split_attributes if a != best_attribute]

    # Construa recursivamente as subárvores
    # construa as subárvores usando o valor de cada uma das partições
    subtrees = {attribute_value: build_tree_id3(subset, new_attributes, target_attribute, len(subset))
                for attribute_value, subset in partitions.items()}

    leaf_certainty = max(label_counts.values()) / num_instances

    # retorna o vértice com o atributo de divisão, cada uma das subárvores
    # e o valor padrão para o caso da busca por atributo(valor1) não presente
    # nos labels de divisão
    return Split(best_attribute, subtrees, num_instances, confidence=leaf_certainty, default_value=most_common_label)
