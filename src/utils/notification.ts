import UIkit from "uikit";

export const notification = (
  message: string,
  {
    status = "primary",
    pos = "top-right",
    timeout = 5000,
  }: {
    status?: "success" | "danger" | "primary" | "warning";
    pos?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
    timeout?: number;
  } = {}
) => {
  UIkit.notification({
    message,
    status,
    pos,
    timeout,
  });
};
