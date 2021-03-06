import React, { createContext, Dispatch, useReducer } from "react";
import AppRouter from "./Router";
import "./App.scss";

type State = {
  code: string;
  name: string;
  parcelNumber: string;
  item: any;
};

export const INITIAL_STATE = {
  code: "",
  name: "",
  parcelNumber: "",
  item: "",
};

type Action =
  | { type: "GET_CODE"; paylode: string }
  | { type: "GET_NAME"; paylode: string }
  | { type: "GET_NUMBER"; paylode: string }
  | { type: "RESET_STATE" }
  | { type: "GET_STATUS"; paylode: any };

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "GET_CODE":
      return {
        ...state,
        code: action.paylode,
      };
    case "GET_NAME":
      return {
        ...state,
        name: action.paylode,
      };
    case "GET_NUMBER":
      return {
        ...state,
        parcelNumber: action.paylode,
      };
    case "GET_STATUS":
      return {
        ...state,
        item: action.paylode,
      };
    case "RESET_STATE":
      return {
        ...state,
        code: "",
        name: "",
        parcelNumber: "",
      };
    default:
      return state;
  }
}

type ActionDispatch = Dispatch<Action>;

export const StateContext = createContext<State>(INITIAL_STATE);
export const ActionContext = createContext<ActionDispatch>(() => null);

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <StateContext.Provider value={state}>
      <ActionContext.Provider value={dispatch}>
        <AppRouter />
      </ActionContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
