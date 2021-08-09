import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item1 extends Component {
  static defaultProps = {
    name: 'Item1',
  };
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>item1 -- {this.props.name}</h1>;
  }
}
