// @flow

import type { Todos, Todo, Id, Text, TodosAction } from '../types/todos';

const createTodo = (id: Id, text: Text): Todo => ({
  id,
  text,
  completed: false
});

const toggleTodo = (todos: Todos, id: Id): Todos =>
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

const todos = (state: Todos = [], action: TodosAction): Todos => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createTodo(action.id, action.text)];
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    default:
      return state;
  }
};

export default todos;
