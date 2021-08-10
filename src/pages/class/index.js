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
            <Link to="./class/component-old">component-old - {this.state.test}</Link>
          </List.Item>
          <List.Item>
            <Link to="./class/component-new">component-new</Link>
          </List.Item>
          <List.Item>
            {/* NOTE: 这不是个相对路径，是个网址缀，所以要加class，不能加js */}
            <Link to="./class/lists">lists</Link>
          </List.Item>
          <List.Item>
            <Link to="./class/dva/">dva</Link>
          </List.Item>
        </List>
      </div>
    );
  }
}
export default index;
