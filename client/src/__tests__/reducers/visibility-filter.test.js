import * as actions from '../../actions';
import visibilityFilter from '../../reducers/visibility-filter';

describe('visibilityFilter reducer', () => {
  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(undefined, actions.setVisibilityFilter('SHOW_ACTIVE'))
    ).toMatchSnapshot();
  });
});
