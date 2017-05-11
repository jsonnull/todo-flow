import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import FilterLink from '../../containers/filter-link';

const middleware = [];
const mockStore = configureStore(middleware);

describe('FilterLink', () => {
  let tree;
  it('renders without crashing', () => {
    const store = mockStore({});
    const component = renderer.create(
      <Provider store={store}><FilterLink /></Provider>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sets the correct filter when clicked', () => {
    const store = mockStore({});
    const component = renderer.create(
      <Provider store={store}><FilterLink filter="SHOW_ACTIVE" /></Provider>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(store.getActions()).toEqual([]);
    tree.props.onClick({ preventDefault: () => {} });
    expect(store.getActions()).toEqual([
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE'
      }
    ]);
  });
});
