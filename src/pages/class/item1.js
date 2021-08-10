import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    // NOTE： 有传值用传值，没有就用defaultProps的
    name: 'list-Item1',
  };
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return <h1 onClick={this.handleClick}>conitem1 -- {this.props.name}</h1>;
  }
  handleClick() {
    this.props.handleChild('dataSent');
  }
}
