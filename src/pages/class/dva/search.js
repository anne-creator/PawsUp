import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  // FIXME：这里为什么不是value:e.target.value
  handleChange = value => this.setState({ value: value });
  handleSubmit = () => {
    // NOTE:trigger state change
    const action = {
      type: 'search/getListsAsync',
      payload: this.state.value,
    };
    // NOTE: dispatch 方法从哪里来？被 connect 的 Component 会自动在 props 中拥有 dispatch 方法。所以用this.props
    this.props.dispatch(action);
  };
  render() {
    return (
      // NOTE: onSubmit 是用户在点击enter key时候触发的
      <SearchBar
        autoFocus
        value={this.state.value}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
