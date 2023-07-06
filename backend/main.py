from data import *
from classify import *
from build_tree_i3 import *
from helpers.base_logger import *


# tree = build_tree_id3(inputs, split_attributes, 'target')

# print(classify_decision(tree))


def classify_decision_api(answer=None, tree: DecisionTree = None) -> Any:
    if (tree is None):
        tree = build_tree_id3(inputs, split_attributes, 'target')

    if isinstance(tree, Leaf):
        return tree.value

    attribute = tree.attribute

    if answer not in tree.subtrees:
        return tree.default_value

    if (answer != None):
        subtree: DecisionTree = tree.subtrees[answer]

        return (subtree.attribute, subtree)
    else:
        return attribute
