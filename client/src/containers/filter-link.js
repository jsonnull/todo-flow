// @flow

import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';
import Link from '../components/link';

import type { Connector } from 'react-redux';
import type { Props } from '../components/link';
import type { State, Dispatch, VisibilityFilter } from '../types';

type OwnProps = {
  filter: VisibilityFilter
};

const mapStateToProps = (state: State, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Link);
