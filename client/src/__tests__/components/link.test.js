import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../../components/link';

describe('Link', () => {
  let tree: Object;
  it('renders without crashing', () => {
    const component = renderer.create(<Link />);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a span when active is true', () => {
    const component = renderer.create(<Link active />);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClick() on click', () => {
    const onClick = jest.fn();
    const component = renderer.create(<Link onClick={onClick} />);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick({ preventDefault: () => {} });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });
});
