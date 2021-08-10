import React, { Component } from 'react';
import Search from './search';
import Lists from './lists';
import { connect } from 'dva';

class Dva extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* FIXME: this.props 父组件的props值，class下面的index。它的父容器是谁啊 */}
        <Search {...this.props} />
        <Lists {...this.props} />
      </div>
    );
  }
}
//FIXME 用到了科里化。connect 方法返回的也是一个 React 组件，通常称为容器组件。因为它是原始 UI 组件的容器，即在外面包了一层 State。第二句话没听懂https://dvajs.com/guide/introduce-class.html#connect-%E6%96%B9%E6%B3%95，
export default connect(search => ({ search }))(Dva);
