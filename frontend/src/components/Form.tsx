import { useForm } from "react-hook-form";

import {
  MARITAL_STATUS,
  APPLICATION_MODE,
  COURSE,
  DAYTIME_EVENING_ATTENDANCE,
  PREVIOUS_QUALIFICATION,
  NACIONALITY,
  MOTHER_QUALIFICATION,
  FATHER_QUALIFICATION,
  MOTHER_OCCUPATION,
  FATHER_OCCUPATION,
  DISPLACED,
  EDUCACIONAL_EDUCATION_NEEDS,
  DEBTOR,
  TUITION_FEES_UP_TO_DATE,
  GENDER,
  SCHOLARSHIP_HOLDER,
  INTERNATIONAL,
} from "../config/answers";
import { useTreeDecision } from "../hooks/useTreeDecision";

interface FormProps {
  setTarget: (value: string) => void;
}

export const Form = ({ setTarget }: FormProps) => {
  const { createTreeDecision } = useTreeDecision();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const handleSubmitNewTreeDecision = async (data: any) => {
    console.log(data);

    const response = await createTreeDecision(data);

    response && setTarget(response);

    // reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitNewTreeDecision)}>
      <div>
        <label htmlFor="MARITAL_STATUS">Marital status</label>
        <select id="MARITAL_STATUS" {...register("marital_status", { valueAsNumber: true })}>
          {Object.entries(MARITAL_STATUS).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="APPLICATION_MODE">Application mode</label>
        <select id="APPLICATION_MODE" {...register("application_mode", { valueAsNumber: true })}>
          {Object.entries(APPLICATION_MODE).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="APPLICATION_ORDER">Application order</label>
        <input
          id="APPLICATION_ORDER"
          type="number"
          placeholder="between 0 - first choice; and 9 last choice"
          {...register("application_order", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="COURSE">Course</label>
        <select id="COURSE" {...register("course", { valueAsNumber: true })}>
          {Object.entries(COURSE).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="DAYTIME_EVENING_ATTENDANCE">Daytime/evening attendance</label>
        <select id="DAYTIME_EVENING_ATTENDANCE" {...register("daytime_evening_attendance", { valueAsNumber: true })}>
          {Object.entries(DAYTIME_EVENING_ATTENDANCE).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="PREVIOUS_QUALIFICATION">Previous qualification</label>
        <select id="PREVIOUS_QUALIFICATION" {...register("previous_qualification", { valueAsNumber: true })}>
          {Object.entries(PREVIOUS_QUALIFICATION).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="PREVIOUS_QUALIFICATION_GRADE">Previous qualification(grade)</label>
        <input
          id="PREVIOUS_QUALIFICATION_GRADE"
          type="number"
          placeholder="between 0 and 200"
          {...register("previous_qualification_grade", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="NACIONALITY">Nacionality</label>
        <select id="NACIONALITY" {...register("nacionality", { valueAsNumber: true })}>
          {Object.entries(NACIONALITY).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="MOTHER_QUALIFICATION">Mother's qualification</label>
        <select id="MOTHER_QUALIFICATION" {...register("mother_qualification", { valueAsNumber: true })}>
          {Object.entries(MOTHER_QUALIFICATION).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="FATHER_QUALIFICATION">Father's qualification</label>
        <select id="FATHER_QUALIFICATION" {...register("father_qualification", { valueAsNumber: true })}>
          {Object.entries(FATHER_QUALIFICATION).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="MOTHER_OCCUPATION">Mother's occupation</label>
        <select id="MOTHER_OCCUPATION" {...register("mother_occupation", { valueAsNumber: true })}>
          {Object.entries(MOTHER_OCCUPATION).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="FATHER_OCCUPATION">Father's occupation</label>
        <select id="FATHER_OCCUPATION" {...register("father_occupation", { valueAsNumber: true })}>
          {Object.entries(FATHER_OCCUPATION).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ADMISSION_GRADE">Admission grade</label>
        <input
          id="ADMISSION_GRADE"
          type="number"
          placeholder="between 0 and 200"
          {...register("admission_grade", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="DISPLACED">Displaced</label>
        <select id="DISPLACED" {...register("displaced", { valueAsNumber: true })}>
          {Object.entries(DISPLACED).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="EDUCACIONAL_EDUCATION_NEEDS">Educational special needs</label>
        <select id="EDUCACIONAL_EDUCATION_NEEDS" {...register("educational_special_needs", { valueAsNumber: true })}>
          {Object.entries(EDUCACIONAL_EDUCATION_NEEDS).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="DEBTOR" >Debtor</label>
        <select id="DEBTOR" {...register("debtor", { valueAsNumber: true })}>
          {Object.entries(DEBTOR).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="TUITION_FEES_UP_TO_DATE">Tuition fees up to date</label>
        <select id="TUITION_FEES_UP_TO_DATE" {...register("tuition_fees_up_to_date", { valueAsNumber: true })}>
          {Object.entries(TUITION_FEES_UP_TO_DATE).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="GENDER">Gender</label>
        <select id="GENDER" {...register("gender", { valueAsNumber: true })}>
          {Object.entries(GENDER).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="SCHOLARSHIP_HOLDER">Scholarship holder</label>
        <select id="SCHOLARSHIP_HOLDER" {...register("scholarship_holder", { valueAsNumber: true })}>
          {Object.entries(SCHOLARSHIP_HOLDER).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="AGE_AT_ENROLLMENT">Age at enrollment</label>
        <input
          id="AGE_AT_ENROLLMENT"
          type="number"
          placeholder="Age of studend at enrollment"
          {...register("age_at_enrollment", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="INTERNATIONAL">International</label>
        <select id="INTERNATIONAL" {...register("international", { valueAsNumber: true })}>
          {Object.entries(INTERNATIONAL).map(([key, value]) => (
            <option key={key} value={value.value}>{value.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="1ST_SEM_CREDIT">Curricular units 1st sem (credited)</label>
        <input
          id="1ST_SEM_CREDIT"
          type="number"
          placeholder="Number of curricular units credited in the 1st semester"
          {...register("curricular_units_1st_sem_credit", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="1ST_SEM_ENROLLED">Curricular units 1st sem (enrolled)</label>
        <input
          id="1ST_SEM_ENROLLED"
          type="number"
          placeholder="Number of curricular units enrolled in the 1st semester"
          {...register("curricular_units_1st_sem_enrolled", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="1ST_SEM_EVALUATION">Curricular units 1st sem (evaluations)</label>
        <input
          id="1ST_SEM_EVALUATION"
          type="number"
          placeholder="Number of evaluations to curricular units in the 1st semester"
          {...register("curricular_units_1st_sem_evaluations", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="1ST_SEM_APPROVED">Curricular units 1st sem (approved)</label>
        <input
          id="1ST_SEM_APPROVED"
          type="number"
          placeholder="Number of curricular units approved in the 1st semester"
          {...register("curricular_units_1st_sem_approved", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="1ST_SEM_GRADE">Curricular units 1st sem (grade)</label>
        <input
          id="1ST_SEM_GRADE"
          type="number"
          placeholder="Grade average in the 1st semester (between 0 and 20)"
          {...register("curricular_units_1st_sem_grade", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="1ST_SEM_WITHOUT_EVALUATIONS">Curricular units 1st sem (without evaluations)</label>
        <input
          id="1ST_SEM_WITHOUT_EVALUATIONS"
          type="number"
          placeholder="Number of curricular units without evalutions in the 1st semester"
          {...register("curricular_units_1st_sem_without_evaluations", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="2ND_SEM_CREDIT">Curricular units 2nd sem (credited)</label>
        <input
          id="2ND_SEM_CREDIT"
          type="number"
          placeholder="Number of curricular units credited in the 2nd semester"
          {...register("curricular_units_2st_sem_credit", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="2ND_SEM_ENROLLED">Curricular units 2nd sem (enrolled)</label>
        <input
          id="2ND_SEM_ENROLLED"
          type="number"
          placeholder="Number of curricular units enrolled in the 2nd semester"
          {...register("curricular_units_2st_sem_enrolled", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="2ND_SEM_EVALUATIONS">Curricular units 2nd sem (evaluations)</label>
        <input
          id="2ND_SEM_EVALUATIONS"
          type="number"
          placeholder="Number of evaluations to curricular units in the 2nd semester"
          {...register("curricular_units_2st_sem_evaluations", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="2ND_SEM_APPROVED">Curricular units 2nd sem (approved)</label>
        <input
          id="2ND_SEM_APPROVED"
          type="number"
          placeholder="Number of curricular units approved in the 2nd semester"
          {...register("curricular_units_2st_sem_approved", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="2ND_SEM_GRADE">Curricular units 2nd sem (grade)</label>
        <input
          id="2ND_SEM_GRADE"
          type="number"
          placeholder="Grade average in the 2nd semester (between 0 and 20)"
          {...register("curricular_units_2st_sem_grade", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="2ND_SEM_WITHOUT_EVALUATIONS">Curricular units 2nd sem (without evaluations)</label>
        <input
          id="2ND_SEM_WITHOUT_EVALUATIONS"
          type="number"
          placeholder="Number of curricular units without evalutions in the 1st semester)"
           {...register("curricular_units_2st_sem_without_evaluations", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="UNEMPLOYMENT">Unemployment rate</label>
        <input
          id="UNEMPLOYMENT"
          type="number"
          placeholder="Unemployment rate (%)"
          {...register("unemployment_rate", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="INFLATION">Inflation rate</label>
        <input
          id="INFLATION"
          type="number"
          placeholder="Inflation rate (%)"
          {...register("inflation_rate", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label htmlFor="GDP">GDP</label>
        <input
          id="GDP"
          type="number"
          placeholder="GDP"
          {...register("gdp", { valueAsNumber: true })}
        />
      </div>

      <button type="submit">Enviar</button>

    </form>
  );
};