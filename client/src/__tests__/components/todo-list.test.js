import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';

import TodoList from '../../components/todo-list';

describe('TodoList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<TodoList />, div);
  });

  describe('with todos', () => {
    const todos = [
      {
        text: 'Test AddTodo',
        completed: false,
        id: 0
      }
    ];

    it('renders a list of todos', () => {
      const component = renderer.create(<TodoList todos={todos} />).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('passes onTodoClick into child todo', () => {
      const onTodoClick = jest.fn();
      const component = renderer
        .create(<TodoList todos={todos} onTodoClick={onTodoClick} />)
        .toJSON();

      component.children[0].props.onClick();

      expect(component).toMatchSnapshot();
      expect(onTodoClick).toHaveBeenCalled();
    });
  });
});
