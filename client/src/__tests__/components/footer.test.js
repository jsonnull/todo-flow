import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../reducers';
import Footer from '../../components/footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    const store = createStore(reducer);
    const component = renderer.create(
      <Provider store={store}><Footer /></Provider>
    );
    expect(component).toMatchSnapshot(1);
  });
});
