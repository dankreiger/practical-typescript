import { IState } from './interfaces';
import { Add, AllActions } from './actions';
import { EActionTypes } from './enums';

function reducer(state: IState, action: AllActions): IState {
  switch (action.type) {
    case EActionTypes.ADD:
      return {
        list: [...state.list, action.payload]
      };
    case EActionTypes.REMOVE_ALL:
      return {
        list: []
      };
    case EActionTypes.REMOVE_ONE:
      const list = state.list.slice().splice(action.payload, 1);
      return {
        list
      };
    default:
      // comment out a case statement to see error
      const x: never = action;
      return state;
  }
}

// THIS will throw an error - can't add type number to type string

// case ActionTypes.REMOVE_ONE:
//   return {
//     list: [...state.list, action.payload]
//   };
