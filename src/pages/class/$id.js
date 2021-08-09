// FIXME:这个是自己创建的动态路由文件，pages下面的.umi/router. 会多出一个路由文件。但是this.prps.match是谁传下来的参数？
import { Component } from 'react';

export default class Id extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <h1>id--{this.props.match.params.id}</h1>;
  }
}
