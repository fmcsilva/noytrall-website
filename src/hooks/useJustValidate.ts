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
  const [justValidate, setJustValidate] = useState<JustValidate | null>(null);

  useEffect(() => {
    setJustValidate(new JustValidate(`#${formId}`));
  }, []);

  useEffect(() => {
    if (justValidate) {
      if (Object.keys(justValidate.fields).length === 0) {
        for (const { field, rules, config } of fields) {
          justValidate.addField(field, rules, config);
        }
      }
    }
    return () => {
      if (justValidate) {
        Object.keys(justValidate.fields).forEach((field) =>
          justValidate.removeField(field)
        );
      }
    };
  }, [justValidate]);

  const formIsValid = () => {
    return justValidate && justValidate.isSubmitted && justValidate.isValid;
  };

  return { formIsValid, justValidate };
};

export default useJustValidate;
