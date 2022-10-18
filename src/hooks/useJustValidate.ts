import JustValidate from "just-validate";
import { FieldRuleInterface } from "just-validate/dist/modules/interfaces";
import { useEffect, useState } from "react";

const useJustValidate = (
  formId: string,
  fields: { field: string; rules: FieldRuleInterface[] }[] = [],
  { onSuccess }: { onSuccess?: () => void } = { onSuccess: () => {} }
) => {
  const [validation, setValidation] = useState<JustValidate | null>(null);

  useEffect(() => {
    setValidation(new JustValidate(`#${formId}`));
  }, []);

  useEffect(() => {
    if (validation) {
      if (Object.keys(validation.fields).length === 0) {
        for (const { field, rules } of fields) {
          validation.addField(field, rules);
        }
      }
    }
    return () => {
      if (validation) {
        Object.keys(validation.fields).forEach((field) =>
          validation.removeField(field)
        );
      }
    };
  }, [validation]);

  const formIsValid = () => {
    return validation && validation.isSubmitted && validation.isValid;
  };

  return { formIsValid };
};

export default useJustValidate;
