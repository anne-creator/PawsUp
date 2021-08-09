// 公共的部分
import styles from './index.css';
import { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>class layout file</h1>
        {/* FIXME： 谁的children */}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
