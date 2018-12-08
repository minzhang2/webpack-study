import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './index.less';
import img from '../../assets/img/alipay.png';

export default class App extends Component {
  static defaultProps = {

  }
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 4, 5, 10]
    }
  }
  handleClick = () => {
    this.setState({
      list: [1, 3, 5, 6, 8]
    });
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <div className={styles.wrap}></div>
        <img src={img} height="400" />
        {
          this.state.list.map(item => <span key={item} className={styles.item}>{item}</span>)
        }
      </div>
    )
  }
}