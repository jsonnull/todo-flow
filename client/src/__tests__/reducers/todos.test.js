import * as actions from '../../actions';
import todos from '../../reducers/todos';

describe('todos reducer', () => {
  it('should handle ADD_TODO', () => {
    expect(todos(undefined, actions.addTodo('Test AddTodo'))).toMatchSnapshot();
  });

  it('should handle TOGGLE_TODO', () => {
    const initialState = [
      {
        text: 'Test AddTodo',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddTodo',
        completed: true,
        id: 1
      }
    ];

    expect(todos(initialState, actions.toggleTodo(0))).toMatchSnapshot();
  });
});
