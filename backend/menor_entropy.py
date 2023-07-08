from partition_entropy_by import *
from data import *
from helpers.base_logger import *

for key in split_attributes:
    print(key, partition_entropy_by(inputs, key, 'target'))