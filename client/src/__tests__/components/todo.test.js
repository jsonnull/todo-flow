import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';

import Todo from '../../components/todo';

describe('Todo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Todo />, div);
  });

  it('puts a line through text when completed', () => {
    const component = renderer
      .create(<Todo text="Test Content" completed />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const component = renderer.create(<Todo onClick={onClick} />).toJSON();
    component.props.onClick();

    expect(component).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });
});
