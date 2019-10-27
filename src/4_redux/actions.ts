import { EActionTypes } from './enums';

export interface Action {
  type: string;
}

// hover over type
// readonly is necessary to mark as a specific string type
export class Add implements Action {
  readonly type = EActionTypes.ADD;
  constructor(public payload: string) {}
}

export class RemoveAll implements Action {
  readonly type = EActionTypes.REMOVE_ALL;
}

export class RemoveOne implements Action {
  readonly type = EActionTypes.REMOVE_ONE;
  constructor(public payload: number) {}
}

export type AllActions = Add | RemoveAll | RemoveOne;
