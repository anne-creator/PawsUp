// 路由网址是这个 http://localhost:8000/class/index
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi';
import Lists from './lists';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'demo',
    };
  }

  render() {
    return (
      <div>
        <List>
          <List.Item>
            {/* FIXME: 这个地址，不能加后缀js，哟啊不然直接跳转到动态路由去了*/}
            <Link to="./component-old">component-old - {this.state.test}</Link>
          </List.Item>
          <List.Item>
            <Link to="./component-new">component-new</Link>
          </List.Item>
          <List.Item>
            <Link to="./lists">lists</Link>
          </List.Item>
        </List>
      </div>
    );
  }
}
export default index;
