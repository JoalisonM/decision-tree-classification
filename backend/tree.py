from leafsplit import *

hiring_tree = Split('level', {# Primeiro vértice é level
  'Junior': Split('phd', { # Se level tem resposta Junior vai no vértice phd
    False: Leaf(True), # Se phd tem valor False vai no vértice True
    True: Leaf(False) # Se phd tem valor True vai no vértice False
  }),
  'Mid': Leaf(True), # Se level tem resposta Mid vai no vértice True
  'Senior': Split('tweets', { # Se level tem resposta Senior vai em tweets
    False: Leaf(False), # Se tweets tem resposta False vai no vértice False
    True: Leaf(True) # Se tweets tem resposta True vai no vértice True
  })
})