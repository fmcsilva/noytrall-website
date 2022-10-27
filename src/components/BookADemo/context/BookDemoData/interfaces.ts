export namespace nBookDemoData {
  export interface iBookDemoData {
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

  export interface iStateData {
    bookDemoData: iBookDemoData;
    book1Confirmed: boolean;
    book2Confirmed: boolean;
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
    | { type: "set data"; data: iStateData }
    | { type: "set book 1"; data: Partial<iBookDemoData> }
    | { type: "set book 2"; data: Partial<iBookDemoData> }
    | { type: "resolved" }
    | { type: "rejected"; error: string }
    | { type: "pending" };

  export type tStateContext = iState;
  export type tDispatchContext = React.Dispatch<tAction>;
}
