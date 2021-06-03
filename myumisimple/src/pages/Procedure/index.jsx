import React from 'react';
import bgp from './img/bgP.jpg';
import lineP from './img/line.png';
import chongYaG from './img/chongYa.gif';
import chongYaP from './img/chongYa.png';
import yanzhuanG from './img/yaWaiYi.gif';
import yanzhuanP from './img/yaWaiYi.png';
import hanJieG from './img/hanJie.gif';
import hanJieP from './img/hanJie.png';
import daMoG from './img/daMo.gif';
import daMoP from './img/daMo.png';



import fifthP from './img/chengPin.png';
import { Row, Col } from 'antd';
import styles from './index.module.less';
// import styles from './index.less';
import MyDivComponents from './MyDivComponents';
import classNames from 'classnames';
import { render } from 'enzyme';
const winHig = document.body.clientHeight;
// panding 24*2=48px 加上 header 高度48px, 最后为可视高度（整个页面在浏览器的总高度）减去96
const contentHig = winHig - 96;
const contentWid = document.body.clientWidth;
console.info('ssss', winHig, contentWid);

// 我的笔记本电脑浏览器当前尺寸是 827 * 1600  以此为计算
const higCal = (height) => winHig * (height / 827);
const winCal = (width) => contentWid * (width / 1600);

class Procedure extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.handleDiv = this.handleDiv.bind(this);
  }
  componentDidMount() {
    var _this = this;
    this.timer = setInterval(function () {
      _this.handleDiv();
    }, 3000);
  }
  handleDiv() {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
    let curIndex = this.state.index;
    if (curIndex > 16) {
      this.setState({
        index: 0,
      });
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    // var index = this.state.index;
    return (
      <div>
        <div
          style={{
            height: contentHig,
            backgroundImage: `url(${bgp})`,
            backgroundSize: `100% 100%`, //宽高，自适应（压缩）
            width: '100%',
            position: 'absolute',
          }}
          className={classNames(styles.divsty)}
        >
          <div style={{ position: 'absolute', left: '4.5%',top:'-1.5%' }}>
            <div style={{ height: higCal(400) }}></div>
             <div
              className={
                (this.state.index == '0' && classNames(styles.change)) ||
                (this.state.index == '1' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
            // style={{margin:'-15px -20px 0 -75px'}}
            > 
              {/* <MyDivComponents mytext="① 圆盘夹取" /> */}
              1 圆盘夹取
            </div>
            <div
              className={
                (this.state.index == '1' && classNames(styles.change)) ||
                (this.state.index == '2' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'15% 0 0 0'}}
            >
              {/* <MyDivComponents mytext="② 瓶身夹取" /> */}
              2 瓶身夹取
            </div>
          </div>

          <div style={{ position: 'absolute', left: '18.5%',top:'5%' }}>
            <div style={{ height: higCal(280) }}></div>
            <div
              className={
                (this.state.index == '2' && classNames(styles.change)) ||
                (this.state.index == '3' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{width:'14px',lineHeight:'16px',margin:'0 0 0 0'}}
            >
              3 圆盘放置
            </div>
            <div
              className={
                (this.state.index == '4' && classNames(styles.change)) ||
                (this.state.index == '5' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{width:'14%',lineHeight:'100%',margin:'-100% 0 0 57%'}}
            >
              {/* <MyDivComponents mytext="5 瓶身夹取" /> */}
              5 夹取底座
            </div>
          </div>

          <div style={{ position: 'absolute', left: '22.5%',top:'-1%' }}>
            <div style={{ height: higCal(400) }}></div>
            <div
              className={
                (this.state.index == '5' && classNames(styles.change)) ||
                (this.state.index == '6' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'0 0 0 0'}}
            >
              {' '}
              {/* <MyDivComponents mytext="6 圆盘夹取" /> */}
              6 放置
            </div>
            <div
              className={
                (this.state.index == '6' && classNames(styles.change)) ||
                (this.state.index == '7' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'15% 0 0 0'}}
            >
              {/* <MyDivComponents mytext="7 瓶身夹取" /> */}
              7 放置
            </div>
          </div>

          <div style={{ position: 'absolute', left: '31%',top:'0.1%' }}>
            <div style={{ height: higCal(400) }}></div>
            <div
              className={
                (this.state.index == '7' && classNames(styles.change)) ||
                (this.state.index == '8' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
            style={{margin:'10% 0 0 -10%'}}  
            >
              {/* <MyDivComponents mytext="8 圆盘夹取" /> */}
              8取出
            </div>
            <div
              className={
                (this.state.index == '9' && classNames(styles.change)) ||
                (this.state.index == '10' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'-44% -360% 0 0'}}  
            >
              {/* <MyDivComponents mytext="10 瓶身夹取" /> */}
              10 放置
            </div>
          </div>

          <div style={{ position: 'absolute', left: '45.5%',top:'7.5%' }}>
            <div style={{ height: higCal(350) }}></div>
            <div
              className={
                (this.state.index == '10' && classNames(styles.change)) ||
                (this.state.index == '11' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'8% 0 0 -4%'}}  
            >
              {/* <MyDivComponents mytext="11 圆盘夹取" /> */}
              11取出
            </div>
            <div
              className={
                (this.state.index == '12' && classNames(styles.change)) ||
                (this.state.index == '13' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'-45% -350% 0 0'}} 
            >
              {/* <MyDivComponents mytext="13 瓶身夹取" /> */}
              13 放置
            </div>
          </div>

          <div style={{ position: 'absolute', left: '60%',top:'8%' }}>
            <div style={{ height: higCal(350) }}></div>
            <div
              className={
                (this.state.index == '13' && classNames(styles.change)) ||
                (this.state.index == '14' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'-1% 0 0 0'}}  
            >
              {/* <MyDivComponents mytext="14 圆盘夹取" /> */}
             14 取出
            </div>
            <div
              className={
                (this.state.index == '15' && classNames(styles.change)) ||
                (this.state.index == '16' && classNames(styles.afterchange)) ||
                classNames(styles.other)
              }
              style={{margin:'-47% -390% 0 0'}} 
            >
              {' '}
              {/* <MyDivComponents mytext="16 瓶身夹取" /> */}
              15 放置
            </div>
          </div>

          <div style={{ position: 'absolute', left: '82%',top:'1%' }}>
            <div style={{ height: higCal(400) }}></div>
            <div
              className={
                (this.state.index == '16' && classNames(styles.change)) || classNames(styles.other)
              }
              style={{margin:'0 0 0 0'}} 
            >
              {/* <MyDivComponents mytext="17 圆盘夹取" /> */}
              17放入料仓
            </div>
          </div>
          <div style={{ position: 'absolute', left: '73%' }}>
            <div style={{ height: higCal(270) }}></div>
            <div
              className={
                (this.state.index == '16' && classNames(styles.change)) || classNames(styles.other)
              }
              style={{width:'14%',lineHeight:'16px',margin:'0 0 0 -5%'}} 
            >
              {/* <MyDivComponents mytext="17 圆盘夹取" /> */}
              {/* 17<div  style={{borderRight:'3px solid #fff',width:'10px',height:'10px'}}></div>2不光滑 */}
              17<br />&nbsp;|<br />&nbsp;2不光滑
            </div>
          </div>    


          <div style={{ position: 'absolute', left: '19%' }}>
            <div style={{ height: higCal(80) }}></div>
            <img src={this.state.index == '4'?chongYaG:chongYaP} style={{width: winCal(150)}}></img>
          </div>
          <div style={{ position: 'absolute', left: '35%' }}>
            <div style={{ height: higCal(105) }}></div>
            <img src={this.state.index == '9'?yanzhuanG:yanzhuanP} style={{ width: winCal(100) }}></img>
          </div>
          <div style={{ position: 'absolute', left: '49.5%' }}>
            <div style={{ height: higCal(110) }}></div>
            <img src={this.state.index == '12'?hanJieG:hanJieP} style={{ width: winCal(100) }}></img>
          </div>
          <div style={{ position: 'absolute', left: '64.5%' }}>
            <div style={{ height: higCal(110) }}></div>
            <img src={this.state.index == '15'?daMoG:daMoP} style={{ width: winCal(100) }}></img>
          </div>
          <div style={{ position: 'absolute', left: '89.5%' }}>
            <div style={{ height: higCal(245) }}></div>
            <img src={fifthP} style={{ width: winCal(65) }}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Procedure;
