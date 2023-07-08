import os
import pickle
import os.path

from data import *
from classify import *
from build_tree_i3 import *
from helpers.base_logger import *

# CLASSIFY sem ser api, rodar com python3 main.py
# tree = build_tree_id3(inputs, split_attributes, 'target')
# print(classify_decision(tree))


def set_subtree(subtree):
  with open("new_tree.pickle", "wb") as file:
    pickle.dump(subtree, file)

def get_tree():
    if(os.path.exists('new_tree.pickle')):
        with open("new_tree.pickle", "rb") as file:
            tree = pickle.load(file)

            return tree
    else:
        tree = build_tree_id3(inputs, split_attributes, 'target')
        return tree

def classify_decision_api(answer=None) -> Any:
    tree: DecisionTree = get_tree()

    attribute = tree.attribute

    if(answer is None):
        return attribute

    if answer not in tree.subtrees:
        if(os.path.exists('new_tree.pickle')):
            os.remove('new_tree.pickle')
        return tree.default_value, tree.confidence*100

    if (answer != None):
        subtree: DecisionTree = tree.subtrees[answer]

        if isinstance(subtree, Leaf):
            if(os.path.exists('new_tree.pickle')):
                os.remove('new_tree.pickle')
            return (subtree.value, subtree.certainty*100)
        else:
            set_subtree(subtree)

            return subtree.attribute