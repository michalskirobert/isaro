export declare namespace ReducerActions {
    type S = string;
    type N = number;
    type B = boolean;
    type U = undefined;
  
    export type TActions = {
      items: TAction[];
      totalItems: N;
    };
  
    export type TActionType = {
      id: N;
      value: S;
      isEditable: B;
    };
  
    export type TActionScope = {
      id: N;
      value: S;
      isEditable: B;
    };
  }

export type AppConfigData = {
    actionTypes: NEFormActions.TActionType[];
    actionScopes: NEFormActions.TActionScope[];
  };