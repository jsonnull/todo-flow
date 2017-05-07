import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from '../../components/todo-list';

describe('TodoList', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<TodoList />);
    expect(component).toMatchSnapshot();
  });
});
