// @flow

import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import type { Dispatch } from '../types';
import type { Connector } from 'react-redux';

type Props = {
  dispatch: Dispatch
};

const AddTodo = ({ dispatch }) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
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

const connector: Connector<{}, Props> = connect();

export default connector(AddTodo);
