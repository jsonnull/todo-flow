// @flow

import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';
import Link from '../components/link';

import type { Connector } from 'react-redux';
import type { Props } from '../components/link';
import type { State, Dispatch } from '../types';
import type { VisibilityFilter } from '../types/visibilityFilter';

type OwnProps = {
  filter: VisibilityFilter
};

const mapStateToProps = (state: State, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
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
