import pandas as pd
from typing import NamedTuple, Optional

columns = [
  "marital_status", "application_mode", "application_order", "course", "daytime_evening_attendance",
  "previous_qualification", "previous_qualification_grade", "nacionality", "mother_qualification",
  "father_qualification", "mother_occupation", "father_occupation", "admission_grade", "displaced",
  "educational_special_needs", "debtor", "tuition_fees_up_to_date", "gender", "scholarship_holder",
  "age_at_enrollment", "international", "curricular_units_1st_sem_credit", "curricular_units_1st_sem_enrolled",
  "curricular_units_1st_sem_evaluations", "curricular_units_1st_sem_approved", "curricular_units_1st_sem_grade",
  "curricular_units_1st_sem_without_evaluations", "curricular_units_2st_sem_credit", "curricular_units_2st_sem_enrolled",
  "curricular_units_2st_sem_evaluations","curricular_units_2st_sem_approved", "curricular_units_2st_sem_grade",
  "curricular_units_2st_sem_without_evaluations", "unemployment_rate", "inflation_rate", "gdp", "target"
]

split_attributes = [
  "marital_status", "application_mode", "application_order", "course", "daytime_evening_attendance",
  "previous_qualification", "previous_qualification_grade", "nacionality", "mother_qualification",
  "father_qualification", "mother_occupation", "father_occupation", "admission_grade", "displaced",
  "educational_special_needs", "debtor", "tuition_fees_up_to_date", "gender", "scholarship_holder",
  "age_at_enrollment", "international", "curricular_units_1st_sem_credit", "curricular_units_1st_sem_enrolled",
  "curricular_units_1st_sem_evaluations", "curricular_units_1st_sem_approved", "curricular_units_1st_sem_grade",
  "curricular_units_1st_sem_without_evaluations", "curricular_units_2st_sem_credit", "curricular_units_2st_sem_enrolled",
  "curricular_units_2st_sem_evaluations","curricular_units_2st_sem_approved", "curricular_units_2st_sem_grade",
  "curricular_units_2st_sem_without_evaluations", "unemployment_rate", "inflation_rate", "gdp"
]


class Candidate(NamedTuple):
  marital_status: int
  application_mode: int
  application_order: int
  course: int
  daytime_evening_attendance: int
  previous_qualification: int
  previous_qualification_grade: float
  nacionality: int
  mother_qualification: int
  father_qualification: int
  mother_occupation: int
  father_occupation: int
  admission_grade: float
  displaced: int
  educational_special_needs: int
  debtor: int
  tuition_fees_up_to_date: int
  gender: int
  scholarship_holder: int
  age_at_enrollment: int
  international: int
  curricular_units_1st_sem_credit: int
  curricular_units_1st_sem_enrolled: int
  curricular_units_1st_sem_evaluations: int
  curricular_units_1st_sem_approved: int
  curricular_units_1st_sem_grade: float
  curricular_units_1st_sem_without_evaluations: int
  curricular_units_2st_sem_credit: int
  curricular_units_2st_sem_enrolled: int
  curricular_units_2st_sem_evaluations: int
  curricular_units_2st_sem_approved: int
  curricular_units_2st_sem_grade: float
  curricular_units_2st_sem_without_evaluations: int
  unemployment_rate: float
  inflation_rate: float
  gdp: float
  target: Optional[str] = None

dataFrame = pd.read_csv("database/data.csv", sep=";", names=columns, header=None)

inputs = []

for i, infos in dataFrame.iterrows():
  inputs.append(Candidate(
    infos.marital_status, infos.application_mode, infos.application_order, infos.course,
    infos.daytime_evening_attendance, infos.previous_qualification, infos.previous_qualification_grade,
    infos.nacionality, infos.mother_qualification, infos.father_qualification, infos.mother_occupation,
    infos.father_occupation, infos.admission_grade, infos.displaced, infos.educational_special_needs,
    infos.debtor, infos.tuition_fees_up_to_date, infos.gender, infos.scholarship_holder,
    infos.age_at_enrollment, infos.international, infos.curricular_units_1st_sem_credit,
    infos.curricular_units_1st_sem_enrolled, infos.curricular_units_1st_sem_evaluations,
    infos.curricular_units_1st_sem_approved, infos.curricular_units_1st_sem_grade,
    infos.curricular_units_1st_sem_without_evaluations, infos.curricular_units_2st_sem_credit,
    infos.curricular_units_2st_sem_enrolled, infos.curricular_units_2st_sem_evaluations,
    infos.curricular_units_2st_sem_approved, infos.curricular_units_2st_sem_grade,
    infos.curricular_units_2st_sem_without_evaluations, infos.unemployment_rate, infos.inflation_rate,
    infos.gdp, infos.target
  ))