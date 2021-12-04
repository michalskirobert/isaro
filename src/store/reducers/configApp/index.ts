import * as actionTypes from "../../actionTypes";
import { AppConfigData } from "@namespace/index";

const initialState = {
  langauge: "en",
};

export const configAppReducer = (
  state = initialState,
  action: { type: string; payload: AppConfigData }
)  => {
  switch (action.type) {
    case actionTypes.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
  }
}
