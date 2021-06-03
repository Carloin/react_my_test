import { render } from 'enzyme';
import React, { Component } from 'react';
import styles from './index.less';
import classNames from 'classnames';

const contentWid = document.body.clientWidth;
const winCal = (width) => contentWid * (width / 1600);

class MyDivComponents extends React.Component {
  render() {
    var mytext = this.props.mytext;
    // console.log(this.props)
    return (
      <div className={classNames(styles.divcomp)} style={{ width: winCal(100)}}>
        {mytext}
      </div>
    );
  }
}

export default MyDivComponents;
