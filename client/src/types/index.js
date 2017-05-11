// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { TodosState, TodosAction } from './todos';
import type {
  VisibilityFilterState,
  VisibilityFilterAction
} from './visibilityFilter';

export type State = TodosState & VisibilityFilterState;

export type Action = TodosAction | VisibilityFilterAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
