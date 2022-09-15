import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ModalReducer } from "./slices/modal.slice";
import { QuestionReducer } from "./slices/question.slice";


const reducer = {
  modal: ModalReducer,
  question: QuestionReducer,
};

export const store = configureStore({ reducer });

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
