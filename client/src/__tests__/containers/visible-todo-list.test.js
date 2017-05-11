import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import * as actions from '../../actions';
import VisibleTodoList from '../../containers/visible-todo-list';

const middleware = [];
const mockStore = configureStore(middleware);

describe('VisibleTodoList', () => {
  let tree;
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: [
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
      ]
    });
  });

  it('renders without crashing', () => {
    const component = renderer.create(
      <Provider store={store}><VisibleTodoList /></Provider>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows all todos when SHOW_ALL filter is active', () => {
    store.dispatch(actions.setVisibilityFilter('SHOW_ALL'));

    expect(store.getActions()).toEqual([
      actions.setVisibilityFilter('SHOW_ALL')
    ]);

    const component = renderer.create(
      <Provider store={store}><VisibleTodoList /></Provider>
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows active todos when SHOW_ACTIVE filter is active', () => {
    store.dispatch(actions.setVisibilityFilter('SHOW_ACTIVE'));

    expect(store.getActions()).toEqual([
      actions.setVisibilityFilter('SHOW_ACTIVE')
    ]);

    const component = renderer.create(
      <Provider store={store}><VisibleTodoList /></Provider>
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows completed todos when SHOW_COMPLETED filter is active', () => {
    store.dispatch(actions.setVisibilityFilter('SHOW_COMPLETED'));

    expect(store.getActions()).toEqual([
      actions.setVisibilityFilter('SHOW_COMPLETED')
    ]);

    const component = renderer.create(
      <Provider store={store}><VisibleTodoList /></Provider>
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggles todos when a todo is clicked', () => {
    const component = renderer.create(
      <Provider store={store}>
        <VisibleTodoList />
      </Provider>
    );

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.children[0].props.onClick();
    expect(store.getActions()).toEqual([actions.toggleTodo(0)]);
  });
});
