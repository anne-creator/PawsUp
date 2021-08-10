import React, { Component } from 'react';
import { List } from 'antd-mobile';

export default class lists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    // 获取state里面的值
    const { text, lists } = this.props.search.search;
    return (
      <div>
        <h1>text: {text}</h1>
        <List>
          {lists.map((item, i) => (
            <List.Item key={i}>{item}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}
