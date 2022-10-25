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
      return () => {
        Object.keys(justValidate.fields).forEach((field) =>
          justValidate.removeField(field)
        );
      };
    }
  }, [justValidate]);

  const validateField = async (field: string) => {
    console.log("justValidate", justValidate);
    const valid = await justValidate?.revalidateField(field);
    console.log("valid", valid);
    return valid;
  };

  const formIsValid = async () => {
    console.log("justValidate", justValidate);

    try {
      const valid = await justValidate?.revalidate();
      console.log("valid", valid);
      return valid;
    } catch (err) {
      console.log("err", err);
      return false;
    }
  };

  return { formIsValid, justValidate, validateField };
};

export default useJustValidate;
