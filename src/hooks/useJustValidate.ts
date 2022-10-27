import JustValidate from "just-validate";
import {
  FieldConfigInterface,
  FieldRuleInterface,
} from "just-validate/dist/modules/interfaces";
import { useEffect, useState } from "react";

const useJustValidate = (
  formId: string,
  fields: {
    ref?: React.RefObject<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;
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

  useEffect(() => {
    if (!justValidate) return;
    const validateField = async (field: string) => {
      const valid = await justValidate?.revalidateField(field);
      return valid || false;
    };
    const listener = (field: string) => async (e: any) => {
      validateField(`${field}`);
    };
    fields.forEach(({ field, ref }) => {
      ref?.current?.addEventListener("keyup", listener(field));
      ref?.current?.addEventListener("change", listener(field));
    });
    return () => {
      fields.forEach(({ field, ref }) => {
        ref?.current?.removeEventListener("keyup", listener(field));
        ref?.current?.removeEventListener("change", listener(field));
      });
    };
  }, [justValidate, fields]);

  const validateField = async (field: string) => {
    const valid = await justValidate?.revalidateField(field);
    return valid || false;
  };

  const formIsValid = async () => {
    try {
      const valid = await justValidate?.revalidate();
      return valid || false;
    } catch (err) {
      console.log("err", err);
      return false;
    }
  };

  const revalidate = async () => {
    if (!justValidate) return false;
    const valid = await justValidate.revalidate();

    console.log("valid", valid);
    return valid;
  };

  return { formIsValid, justValidate, validateField, revalidate };
};

export default useJustValidate;
