export type tQuestionId = string;

export interface iQuestion {
  _id: tQuestionId;
  question: string;
  helpful: {
    total: number;
    instances: { timestamp: number }[];
  };
  notHelpful: {
    total: number;
    instances: {
      timestamp: number;
      name: string;
      email: string;
      description: string;
    }[];
  };
}
