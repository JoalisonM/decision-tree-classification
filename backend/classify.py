from data import *
from leafsplit import *


def classify_decision(tree: DecisionTree) -> Any:
    if isinstance(tree, Leaf):
        return tree.value

    attribute = tree.attribute
    question = f"Qual é o valor de '{attribute}'? "

    if attribute in split_attributes:
        answer = input(question)

    if answer not in tree.subtrees:
        return tree.default_value

    subtree = tree.subtrees[answer]

    return classify_decision(subtree)
