import React from 'react';
import renderer from 'react-test-renderer';

import Todo from '../../components/todo';

describe('Todo', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Todo />);
    expect(component).toMatchSnapshot();
  });
});
