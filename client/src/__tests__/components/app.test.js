// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../../components/app';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={mockStore({ todos: [], visibilityFilter: 'SHOW_ALL' })}>
        <App />
      </Provider>,
      div
    );
  });
});
