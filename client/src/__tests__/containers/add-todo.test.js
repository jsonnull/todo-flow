import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../reducers';
import AddTodo from '../../containers/add-todo';

describe('AddTodo', () => {
  let tree;
  let store;
  beforeEach(() => {
    store = createStore(reducer);
  });
  it('renders without crashing', () => {
    const component = renderer.create(
      <Provider store={store}><AddTodo /></Provider>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('onSubmit', () => {
    let component;
    beforeEach(() => {
      component = renderer.create(
        <Provider store={store}><AddTodo /></Provider>
      );
      tree = component.toJSON();
    });

    xit('calls preventDefault to stop form submit');

    describe('with no input value', () => {
      xit('returns early');
    });
  });
});
