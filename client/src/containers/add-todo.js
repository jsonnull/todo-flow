// @flow

import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import type { Dispatch } from '../types';
import type { Connector } from 'react-redux';

type Props = {
  addTodo: (text: string) => Dispatch
};

const AddTodo = ({ addTodo }) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
};

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps);

export default connector(AddTodo);
