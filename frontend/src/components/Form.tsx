import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  MARITAL_STATUS,
  COURSE,
  DAYTIME_EVENING_ATTENDANCE,
  NACIONALITY,
  DISPLACED,
  EDUCACIONAL_EDUCATION_NEEDS,
  DEBTOR,
  TUITION_FEES_UP_TO_DATE,
  GENDER,
  SCHOLARSHIP_HOLDER,
  INTERNATIONAL,
} from "../config/answers";
import { useTreeDecisions } from "../hooks/useTreeDecision";
import { FormContainer, Button } from "./styles";

interface TargetProps {
  attribute: string;
  certainty: number;
}

export const Form = () => {
  const {
    tree,
    target,
    setTree,
    setTarget,
    getFirstQuestion,
    createTreeDecision
  } = useTreeDecisions();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    getFirstQuestion();
    setTarget({} as TargetProps);
  }, []);

  const handleSubmitNewTreeDecision = async (data: any) => {
    const response = await createTreeDecision(data);

    response && setTree(response);
    response && setTarget(response);

    if (response.attribute === "Graduate"
      || response.attribute === "Enrolled"
      || response.attribute === "Dropout") {
      getFirstQuestion();
      }

    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitNewTreeDecision)}>
      <h1>“Prever” o desempenho acadêmico do estudante</h1>

      { tree && tree.attribute === "marital_status" &&
        <div>
          <label htmlFor="MARITAL_STATUS">Marital status</label>
          <select id="MARITAL_STATUS" {...register("answer")}>
            {Object.entries(MARITAL_STATUS).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      { tree && tree.attribute === "application_order" &&
        <div>
          <label htmlFor="APPLICATION_ORDER">Application order</label>
          <input
            id="APPLICATION_ORDER"
            type="text"
            placeholder="between 0 - first choice; and 9 last choice"
            {...register("answer")}
          />
        </div>
      }

      { tree && tree.attribute === "course" &&
        <div>
          <label htmlFor="COURSE">Course</label>
          <select id="COURSE" {...register("answer")}>
            {Object.entries(COURSE).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      { tree && tree.attribute === "daytime_evening_attendance" &&
        <div>
          <label htmlFor="DAYTIME_EVENING_ATTENDANCE">Daytime/evening attendance</label>
          <select id="DAYTIME_EVENING_ATTENDANCE" {...register("answer")}>
            {Object.entries(DAYTIME_EVENING_ATTENDANCE).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      { tree && tree.attribute === "previous_qualification_grade" &&
        <div>
          <label htmlFor="PREVIOUS_QUALIFICATION_GRADE">Previous qualification(grade)</label>
          <input
            id="PREVIOUS_QUALIFICATION_GRADE"
            type="text"
            placeholder="between 0 and 200"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "nacionality" &&
        <div>
          <label htmlFor="NACIONALITY">Nacionality</label>
          <select id="NACIONALITY" {...register("answer")}>
            {Object.entries(NACIONALITY).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "admission_grade" &&
        <div>
          <label htmlFor="ADMISSION_GRADE">Admission grade</label>
          <input
            id="ADMISSION_GRADE"
            type="text"
            placeholder="between 0 and 200"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "displaced" &&
        <div>
          <label htmlFor="DISPLACED">Displaced</label>
          <select id="DISPLACED" {...register("answer")}>
            {Object.entries(DISPLACED).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "educational_special_needs" &&
        <div>
          <label htmlFor="EDUCACIONAL_EDUCATION_NEEDS">Educational special needs</label>
          <select id="EDUCACIONAL_EDUCATION_NEEDS" {...register("answer")}>
            {Object.entries(EDUCACIONAL_EDUCATION_NEEDS).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "debtor" &&
        <div>
          <label htmlFor="DEBTOR" >Debtor</label>
          <select id="DEBTOR" {...register("answer")}>
            {Object.entries(DEBTOR).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "tuition_fees_up_to_date" &&
        <div>
          <label htmlFor="TUITION_FEES_UP_TO_DATE">Tuition fees up to date</label>
          <select id="TUITION_FEES_UP_TO_DATE" {...register("answer")}>
            {Object.entries(TUITION_FEES_UP_TO_DATE).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "gender" &&
        <div>
          <label htmlFor="GENDER">Gender</label>
          <select id="GENDER" {...register("answer")}>
            {Object.entries(GENDER).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "scholarship_holder" &&
        <div>
          <label htmlFor="SCHOLARSHIP_HOLDER">Scholarship holder</label>
          <select id="SCHOLARSHIP_HOLDER" {...register("answer")}>
            {Object.entries(SCHOLARSHIP_HOLDER).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "age_at_enrollment" &&
        <div>
          <label htmlFor="AGE_AT_ENROLLMENT">Age at enrollment</label>
          <input
            id="AGE_AT_ENROLLMENT"
            type="text"
            placeholder="Age of studend at enrollment"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "international" &&
        <div>
          <label htmlFor="INTERNATIONAL">International</label>
          <select id="INTERNATIONAL" {...register("answer")}>
            {Object.entries(INTERNATIONAL).map(([key, value]) => (
              <option key={key} value={value.value}>{value.title}</option>
            ))}
          </select>
        </div>
      }

      {tree && tree.attribute === "curricular_units_1st_sem_credit" &&
        <div>
          <label htmlFor="1ST_SEM_CREDIT">Curricular units 1st sem (credited)</label>
          <input
            id="1ST_SEM_CREDIT"
            type="text"
            placeholder="Number of curricular units credited in the 1st semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_1st_sem_enrolled" &&
        <div>
          <label htmlFor="1ST_SEM_ENROLLED">Curricular units 1st sem (enrolled)</label>
          <input
            id="1ST_SEM_ENROLLED"
            type="text"
            placeholder="Number of curricular units enrolled in the 1st semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_1st_sem_evaluations" &&
        <div>
          <label htmlFor="1ST_SEM_EVALUATION">Curricular units 1st sem (evaluations)</label>
          <input
            id="1ST_SEM_EVALUATION"
            type="text"
            placeholder="Number of evaluations to curricular units in the 1st semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_1st_sem_approved" &&
        <div>
          <label htmlFor="1ST_SEM_APPROVED">Curricular units 1st sem (approved)</label>
          <input
            id="1ST_SEM_APPROVED"
            type="text"
            placeholder="Number of curricular units approved in the 1st semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_1st_sem_grade" &&
        <div>
          <label htmlFor="1ST_SEM_GRADE">Curricular units 1st sem (grade)</label>
          <input
            id="1ST_SEM_GRADE"
            type="text"
            placeholder="Grade average in the 1st semester (between 0 and 20)"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_1st_sem_without_evaluations" &&
        <div>
          <label htmlFor="1ST_SEM_WITHOUT_EVALUATIONS">Curricular units 1st sem (without evaluations)</label>
          <input
            id="1ST_SEM_WITHOUT_EVALUATIONS"
            type="text"
            placeholder="Number of curricular units without evalutions in the 1st semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_2nd_sem_credit" &&
        <div>
          <label htmlFor="2ND_SEM_CREDIT">Curricular units 2nd sem (credited)</label>
          <input
            id="2ND_SEM_CREDIT"
            type="text"
            placeholder="Number of curricular units credited in the 2nd semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_2nd_sem_enrolled" &&
        <div>
          <label htmlFor="2ND_SEM_ENROLLED">Curricular units 2nd sem (enrolled)</label>
          <input
            id="2ND_SEM_ENROLLED"
            type="text"
            placeholder="Number of curricular units enrolled in the 2nd semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_2nd_sem_evaluations" &&
        <div>
          <label htmlFor="2ND_SEM_EVALUATIONS">Curricular units 2nd sem (evaluations)</label>
          <input
            id="2ND_SEM_EVALUATIONS"
            type="text"
            placeholder="Number of evaluations to curricular units in the 2nd semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_2nd_sem_approved" &&
        <div>
          <label htmlFor="2ND_SEM_APPROVED">Curricular units 2nd sem (approved)</label>
          <input
            id="2ND_SEM_APPROVED"
            type="text"
            placeholder="Number of curricular units approved in the 2nd semester"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_2nd_sem_grade" &&
        <div>
          <label htmlFor="2ND_SEM_GRADE">Curricular units 2nd sem (grade)</label>
          <input
            id="2ND_SEM_GRADE"
            type="text"
            placeholder="Grade average in the 2nd semester (between 0 and 20)"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "curricular_units_2nd_sem_without_evaluations" &&
        <div>
          <label htmlFor="2ND_SEM_WITHOUT_EVALUATIONS">Curricular units 2nd sem (without evaluations)</label>
          <input
            id="2ND_SEM_WITHOUT_EVALUATIONS"
            type="text"
            placeholder="Number of curricular units without evalutions in the 1st semester)"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "unemployment_rate" &&
        <div>
          <label htmlFor="UNEMPLOYMENT">Unemployment rate</label>
          <input
            id="UNEMPLOYMENT"
            type="text"
            placeholder="Unemployment rate (%)"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "inflation_rate" &&
        <div>
          <label htmlFor="INFLATION">Inflation rate</label>
          <input
            id="INFLATION"
            type="text"
            placeholder="Inflation rate (%)"
            {...register("answer")}
          />
        </div>
      }

      {tree && tree.attribute === "gdp" &&
        <div>
          <label htmlFor="GDP">GDP</label>
          <input
            id="GDP"
            type="text"
            placeholder="GDP"
            {...register("answer")}
          />
        </div>
      }

      {(target.attribute === "Graduate"
      || target.attribute === "Enrolled"
      || target.attribute === "Dropout") &&
        <h2>Resultado: <span>{target.attribute}</span>, com {target.certainty}% de certeza</h2>
      }

      <Button type="submit">Enviar</Button>

    </FormContainer>
  );
};