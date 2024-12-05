export type TQuestion = {
  answers: string[];
  position: number;
  type: string;
};

export type TPositions =
  | null
  | {
      _id: string;
      fen: string;
      pieces: number;
      createdAt: string;
    }[][];

export type TReview = TQuestion & {
  arrayPosition: string[];
  correct: boolean;
  pickedAnswer: string;
};

export type TScore = { _id: string; nickname: string; score: number };
