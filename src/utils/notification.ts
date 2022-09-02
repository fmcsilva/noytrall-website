import UIkit from "uikit";

export const notification = (
  message: string,
  {
    status,
    pos,
    timeout,
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
  } = { status: "primary", pos: "top-center", timeout: 5000 }
) => {
  UIkit.notification({
    message,
    status,
    pos,
    timeout,
  });
};
