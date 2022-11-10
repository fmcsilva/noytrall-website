import JustValidate from "just-validate";
import {
  FieldConfigInterface,
  FieldRuleInterface,
} from "just-validate/dist/modules/interfaces";
import { useCallback, useEffect, useState } from "react";

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

  const fieldListener = useCallback(
    (field: string) => {
      const validateField = async (field: string) => {
        const valid = await justValidate?.revalidateField(field);
        return valid || false;
      };
      return async (e: any) => {
        validateField(`${field}`);
      };
    },
    [justValidate]
  );

  useEffect(() => {
    if (!justValidate) return;

    fields.forEach(({ field, ref }) => {
      ref?.current?.addEventListener("keyup", fieldListener(field));
      ref?.current?.addEventListener("change", fieldListener(field));
    });
    return () => {
      fields.forEach(({ field, ref }) => {
        ref?.current?.removeEventListener("keyup", fieldListener(field));
        ref?.current?.removeEventListener("change", fieldListener(field));
      });
    };
  }, [justValidate, fields, fieldListener]);

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

  const refresh = async () => {
    console.log('"REFRESH"', "REFRESH");
    justValidate?.refresh();
  };

  const removeListeners = () => {
    fields.forEach(({ field, ref }) => {
      ref?.current?.removeEventListener("keyup", fieldListener(field));
      ref?.current?.removeEventListener("change", fieldListener(field));
    });
  };

  const addListeners = () => {
    fields.forEach(({ field, ref }) => {
      ref?.current?.addEventListener("keyup", fieldListener(field));
      ref?.current?.addEventListener("change", fieldListener(field));
    });
  };

  return {
    formIsValid,
    justValidate,
    validateField,
    revalidate,
    refresh,
    addListeners,
    removeListeners,
  };
};

export default useJustValidate;
