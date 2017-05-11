import { createSelector } from 'reselect';

const todosSelector = state => state.todos;
const visibilityFilterSelector = state => state.visibilityFilter;

export const visibleTodosSelector = createSelector(
  todosSelector,
  visibilityFilterSelector,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  }
);
