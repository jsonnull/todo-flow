import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../../components/link';

describe('Link', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Link />);
    expect(component).toMatchSnapshot();
  });

  it('renders a span when active', () => {
    const component = renderer.create(<Link active />);
    expect(component).toMatchSnapshot();
  });
});
