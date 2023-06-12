from data import *
from classify import *
from build_tree_i3 import *

# tree = build_tree_id3(inputs, ['level', 'lang', 'tweets', 'phd'], 'did_well')
# tree = build_tree_id3(inputs, split_attributes, 'target')

# Deve prever True
# print(classify(tree, Candidate("Junior", "Java", True, False)))
# Deve prever False
# assert not classify(tree, Candidate("Junior", "Java", True, True))
# Aplicando a valores inesperados
# assert classify(tree, Candidate("Intern", "java", True, True))

tree = build_tree_id3(inputs, split_attributes, 'target')

print(classify(
  tree,
  Candidate(1,17,5,171,1,1,122.0,1,19,12,5,9,127.3,1,0,0,1,1,0,20,0,0,0,0,0,0.0,0,0,0,0,0,0.0,0,10.8,1.4,1.74))
)