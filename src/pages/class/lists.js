import React, { Component } from 'react';
import Item1 from './item1';

export default class Lists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Item1 name={'item1'} />
      </div>
    );
  }
}
