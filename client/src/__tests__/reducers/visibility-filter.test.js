// @flow

import * as actions from '../../actions';
import visibilityFilter from '../../reducers/visibility-filter';

describe('visibilityFilter reducer', () => {
  it('should handle SET_VISIBILITY_FILTER', () => {
    const initialState = 'SHOW_ALL';

    expect(
      visibilityFilter(initialState, actions.setVisibilityFilter('SHOW_ACTIVE'))
    ).toMatchSnapshot();
  });
});
