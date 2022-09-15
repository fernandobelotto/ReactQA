import { ReactElement } from "react";
import QuestionModal from "./NewEntiteModal";

export enum modals {
  NEW_ENTITE = "NEW_ENTITE",
}

type ModalHash = {
  [key in modals]: {
    title: string;
    body: ReactElement;
  };
};

export const modalsHashMap: ModalHash = {
  NEW_ENTITE: {
    title: "Question",
    body: <QuestionModal />,
  },
};
