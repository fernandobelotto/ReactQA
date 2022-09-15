import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../question";

type InitialStateType = {
    question: Question | null
};

const InitialState: InitialStateType = {
    question: null
};

const questionSlice = createSlice({
  initialState: InitialState,
  name: "question",
  reducers: {
    setQuestion(state, action) {
        state.question = action.payload
    }
  },
});

export const { setQuestion } = questionSlice.actions;

export const QuestionReducer = questionSlice.reducer;
