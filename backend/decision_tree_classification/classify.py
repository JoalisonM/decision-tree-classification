from leafsplit import *

def classify(tree: DecisionTree, input: Any) -> Any:
  """classifique a entrada usando a árvore de decisão indicada"""
  # Se for um nó folha, retorne o seu valor
  if(isinstance(tree, Leaf)):
    return tree.value
  # Caso contrário, árvore consiste em um atributo de divisão
  # e um dicionário cujas chaves são valores deste atributo
  # e cujos valores são subárvores que serão consideradas em seguida
  subtree_key = getattr(input, tree.attribute)
  if subtree_key not in tree.subtrees: # Se não houver subárvore para a chave
    return tree.default_value # retorne o valor padrão

  subtree = tree.subtrees[subtree_key] # Escolha a subárvore adequada
  return classify(subtree, input) # e use-a para classificar a entrada