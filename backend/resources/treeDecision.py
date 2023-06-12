from flask_restful import Resource, reqparse, marshal

from data import *
from classify import *
from build_tree_i3 import *

from model.treeDecision import *
from helpers.base_logger import logger

parser = reqparse.RequestParser()
parser.add_argument('marital_status', type=int, required=False)
parser.add_argument('application_mode', type=int, required=False)
parser.add_argument('application_order', type=int, required=False)
parser.add_argument('course', type=int, required=False)
parser.add_argument('daytime_evening_attendance', type=int, required=False)
parser.add_argument('previous_qualification', type=int, required=False)
parser.add_argument('previous_qualification_grade', type=float, required=False)
parser.add_argument('nacionality', type=int, required=False)
parser.add_argument('mother_qualification', type=int, required=False)
parser.add_argument('father_qualification', type=int, required=False)
parser.add_argument('mother_occupation', type=int, required=False)
parser.add_argument('father_occupation', type=int, required=False)
parser.add_argument('admission_grade', type=float, required=False)
parser.add_argument('displaced', type=int, required=False)
parser.add_argument('educational_special_needs', type=int, required=False)
parser.add_argument('debtor', type=int, required=False)
parser.add_argument('tuition_fees_up_to_date', type=int, required=False)
parser.add_argument('gender', type=int, required=False)
parser.add_argument('scholarship_holder', type=int, required=False)
parser.add_argument('age_at_enrollment', type=int, required=False)
parser.add_argument('international', type=int, required=False)
parser.add_argument('curricular_units_1st_sem_credit', type=int, required=False)
parser.add_argument('curricular_units_1st_sem_enrolled', type=int, required=False)
parser.add_argument('curricular_units_1st_sem_evaluations', type=int, required=False)
parser.add_argument('curricular_units_1st_sem_approved', type=int, required=False)
parser.add_argument('curricular_units_1st_sem_grade', type=float, required=False)
parser.add_argument('curricular_units_1st_sem_without_evaluations', type=int, required=False)
parser.add_argument('curricular_units_2st_sem_credit', type=int, required=False)
parser.add_argument('curricular_units_2st_sem_enrolled', type=int, required=False)
parser.add_argument('curricular_units_2st_sem_evaluations', type=int, required=False)
parser.add_argument('curricular_units_2st_sem_approved', type=int, required=False)
parser.add_argument('curricular_units_2st_sem_grade', type=float, required=False)
parser.add_argument('curricular_units_2st_sem_without_evaluations', type=int, required=False)
parser.add_argument('unemployment_rate', type=float, required=False)
parser.add_argument('inflation_rate', type=float, required=False)
parser.add_argument('gdp', type=float, required=False)


class TreeDecisionResource(Resource):

    def post(self):
        args = parser.parse_args()
        marital_status = args["marital_status"]
        application_mode = args["application_mode"]
        application_order = args["application_order"]
        course = args["course"]
        daytime_evening_attendance = args["daytime_evening_attendance"]
        previous_qualification = args["previous_qualification"]
        previous_qualification_grade = args["previous_qualification_grade"]
        nacionality = args["nacionality"]
        mother_qualification = args["mother_qualification"]
        father_qualification = args["father_qualification"]
        mother_occupation = args["mother_occupation"]
        father_occupation = args["father_occupation"]
        admission_grade = args["admission_grade"]
        displaced = args["displaced"]
        debtor = args["debtor"]
        educational_special_needs = args["educational_special_needs"]
        tuition_fees_up_to_date = args["tuition_fees_up_to_date"]
        gender = args["gender"]
        scholarship_holder = args["scholarship_holder"]
        age_at_enrollment = args["age_at_enrollment"]
        international = args["international"]
        curricular_units_1st_sem_credit = args["curricular_units_1st_sem_credit"]
        curricular_units_1st_sem_enrolled = args["curricular_units_1st_sem_enrolled"]
        curricular_units_1st_sem_evaluations = args["curricular_units_1st_sem_evaluations"]
        curricular_units_1st_sem_approved = args["curricular_units_1st_sem_approved"]
        curricular_units_1st_sem_grade = args["curricular_units_1st_sem_grade"]
        curricular_units_1st_sem_without_evaluations = args["curricular_units_1st_sem_without_evaluations"]
        curricular_units_2st_sem_credit = args["curricular_units_2st_sem_credit"]
        curricular_units_2st_sem_enrolled = args["curricular_units_2st_sem_enrolled"]
        curricular_units_2st_sem_evaluations = args["curricular_units_2st_sem_evaluations"]
        curricular_units_2st_sem_approved = args["curricular_units_2st_sem_approved"]
        curricular_units_2st_sem_grade = args["curricular_units_2st_sem_grade"]
        curricular_units_2st_sem_without_evaluations = args["curricular_units_2st_sem_without_evaluations"]
        unemployment_rate = args["unemployment_rate"]
        inflation_rate = args["inflation_rate"]
        gdp = args["gdp"]

        tree = build_tree_id3(inputs, split_attributes, 'target')

        target = classify(tree, Candidate(
          marital_status, application_mode, application_order, course,
          daytime_evening_attendance, previous_qualification, previous_qualification_grade,
          nacionality, mother_qualification, father_qualification, mother_occupation,
          father_occupation, admission_grade, displaced, educational_special_needs,
          debtor, tuition_fees_up_to_date, gender, scholarship_holder,
          age_at_enrollment, international, curricular_units_1st_sem_credit,
          curricular_units_1st_sem_enrolled, curricular_units_1st_sem_evaluations,
          curricular_units_1st_sem_approved, curricular_units_1st_sem_grade,
          curricular_units_1st_sem_without_evaluations, curricular_units_2st_sem_credit,
          curricular_units_2st_sem_enrolled, curricular_units_2st_sem_evaluations,
          curricular_units_2st_sem_approved, curricular_units_2st_sem_grade,
          curricular_units_2st_sem_without_evaluations, unemployment_rate, inflation_rate,
          gdp
        ))

        targetResponse = TreeDecision(target)

        return (marshal(targetResponse, tree_decision_fields), 200)
