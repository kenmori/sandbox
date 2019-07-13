/**
 * src/redux/modules/aclManager.ts
 *
 * B-9-4-2
 */

import { Action, Reducer } from "redux";
import { SagaIterator } from "redux-saga";

import { AccessControl } from "../../types/";

interface Acl {
  entries: AccessControl.Entry[];
}

export interface AclManagerState {
  acl: Acl;
}

const ADD_ENTRY = "@@jbca-client/aclManager/ADD_ENTRY";

const aclManagerTypes = [
  ADD_ENTRY,
];

interface AddEntryAction extends Action<typeof ADD_ENTRY> {
  payload: {
    entry: AccessControl.Entry;
  };
}

export type AclManagerAction =
  | AddEntryAction;

function isAclManagerAction(action: Action): action is AclManagerAction {
  return aclManagerTypes.includes(action.type);
}

export const addEntry = (entry: AccessControl.Entry): AddEntryAction => ({
  type: ADD_ENTRY,
  payload: {
    entry,
  },
});

export function* aclManagerSaga(): SagaIterator {
  // TODO: submit とか delete とか
}

export const createAclManagerReducer: (initialState: AclManagerState) => Reducer<AclManagerState, Action> = (initialState) => (state = initialState, action) => {
  if (!isAclManagerAction(action)) {
    return state;
  }

  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        acl: {
          ...state.acl,
          entries: [
            ...state.acl.entries,
            action.payload.entry, // TODO: 同一 subject の追加を弾く。
          ],
        },
      };
  }
};
