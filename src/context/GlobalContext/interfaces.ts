export namespace nGlobal {
  export interface iStateData {}

  export interface iState {
    data: iStateData;
    status: "pending" | "resolved" | "idle" | "rejected";
    error: null | string;
  }

  export interface iContextProps {
    children: React.ReactNode;
  }

  export type tAction =
    | { type: "set data"; data: iStateData }
    | { type: "resolved" }
    | { type: "rejected"; error: string }
    | { type: "pending" };

  export type tStateContext = iState;
  export type tDispatchContext = React.Dispatch<tAction>;
}
