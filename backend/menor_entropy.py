from partition_entropy_by import *
from dados import *

for key in ['level', 'lang', 'tweets', 'phd']:
    print(key, partition_entropy_by(inputs, key, 'did_well'))

assert 0.69 < partition_entropy_by(inputs, 'level', 'did_well') < 0.70
assert 0.86 < partition_entropy_by(inputs, 'lang', 'did_well') < 0.87
assert 0.78 < partition_entropy_by(inputs, 'tweets', 'did_well') < 0.79
assert 0.89 < partition_entropy_by(inputs, 'phd', 'did_well') < 0.90

# for key in split_attributes:
#     print(key, partition_entropy_by(inputs, key, 'target'))

# curricular_units_2st_sem_grade_inputs = [
#     input for input in inputs if input.curricular_units_2st_sem_grade == '0.0']

# print(partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#       'educational_special_needs', 'target'))

# assert 0.25 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'admission_grade', 'target') < 0.26
# assert 0.53 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'course', 'target') < 0.54
# assert 0.54 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_1st_sem_enrolled', 'target') < 0.55
# assert 0.55 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_2st_sem_enrolled', 'target') < 0.56
# assert 0.56 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'previous_qualification_grade', 'target') < 0.57
# assert 0.67 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_1st_sem_evaluations', 'target') < 0.68
# assert 0.68 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_2st_sem_evaluations', 'target') < 0.69
# assert 0.68 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'application_mode', 'target') < 0.69
# assert 0.68 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'age_at_enrollment', 'target') < 0.69
# assert 0.74 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_1st_sem_grade', 'target') < 0.75
# assert 0.74 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'mother_occupation', 'target') < 0.75
# assert 0.74 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'father_occupation', 'target') < 0.75
# assert 0.75 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'tuition_fees_up_to_date', 'target') < 0.76
# assert 0.75 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'mother_qualification', 'target') < 0.76
# assert 0.75 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'displaced', 'target') < 0.76
# assert 0.76 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_1st_sem_approved', 'target') < 0.77
# assert 0.76 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'father_qualification', 'target') < 0.77
# assert 0.76 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'previous_qualification', 'target') < 0.77
# assert 0.77 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'scholarship_holder', 'target') < 0.78
# assert 0.77 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'unemployment_rate', 'target') < 0.78
# assert 0.77 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'gdp', 'target') < 0.78
# assert 0.78 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_1st_sem_without_evaluations', 'target') < 0.79
# assert 0.78 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'marital_status', 'target') < 0.79
# assert 0.78 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'inflation_rate', 'target') < 0.79
# assert 0.78 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'daytime_evening_attendance', 'target') < 0.79
# assert 0.79 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'debtor', 'target') < 0.80
# assert 0.79 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'application_order', 'target') < 0.80
# assert 0.79 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_2st_sem_without_evaluations', 'target') < 0.80
# assert 0.79 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'nacionality', 'target') < 0.80
# assert 0.80 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_2st_sem_approved', 'target') < 0.81
# assert 0.80 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'gender', 'target') < 0.81
# assert 0.80 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_1st_sem_credit', 'target') < 0.81
# assert 0.80 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'curricular_units_2st_sem_credit', 'target') < 0.81
# assert 0.80 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'international', 'target') < 0.81
# assert 0.80 < partition_entropy_by(curricular_units_2st_sem_grade_inputs,
#                                    'educational_special_needs', 'target') < 0.81
