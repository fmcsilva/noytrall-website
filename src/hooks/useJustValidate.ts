import JustValidate from "just-validate";
import {
  FieldConfigInterface,
  FieldRuleInterface,
} from "just-validate/dist/modules/interfaces";
import { useEffect, useState } from "react";

const useJustValidate = (
  formId: string,
  fields: {
    field: string;
    rules: FieldRuleInterface[];
    config?: FieldConfigInterface | undefined;
  }[] = [],
  { onSuccess }: { onSuccess?: () => void } = { onSuccess: () => {} }
) => {
  const [validation, setValidation] = useState<JustValidate | null>(null);

  useEffect(() => {
    setValidation(new JustValidate(`#${formId}`));
  }, []);

  useEffect(() => {
    if (validation) {
      if (Object.keys(validation.fields).length === 0) {
        for (const { field, rules, config } of fields) {
          validation.addField(field, rules, config);
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
