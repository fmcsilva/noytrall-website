export namespace nBookDemoData {
  export interface iStateData {
    name: string;
    email: string;
    hotelName: string;
    jobTitle: string;
    website: string;
    phoneNumber: { country: string; number: string };
    country: string;
    businessType: string;
    accommodationType: string;
    managementType: string;
  }

  export interface iState {
    data: iStateData;
    status: "pending" | "resolved" | "idle" | "rejected";
    error: null | string;
  }

  export interface iContextProps {
    children: React.ReactNode;
  }

  export type tAction =
    | { type: "set data"; data: Partial<iStateData> }
    | { type: "resolved" }
    | { type: "rejected"; error: string }
    | { type: "pending" };

  export type tStateContext = iState;
  export type tDispatchContext = React.Dispatch<tAction>;
}
