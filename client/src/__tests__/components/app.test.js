import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import reducer from '../../reducers';
import App from '../../components/app';

describe('App', () => {
  let tree;
  it('renders without crashing', () => {
    const store = createStore(reducer);
    const component = renderer.create(
      <Provider store={store}><App /></Provider>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
