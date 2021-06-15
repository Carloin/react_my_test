import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//[count]表示只有执行count才执行解绑 []数组为空表示只有Index被销毁时才执行，不适用Index时才执行
function Index() {
  useEffect(() => {
    console.log("useEffect=>老弟你来了！Index页面");
    return () => {
      console.log("老弟，你走了!Index页面");
    };
  }, []);
  return <h2>JSPang.com</h2>;
}

function List() {
  return <h2>List-Page</h2>;
}
// 1.使用useEffect()实现componentWillUnmount
function Example3() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(`useEffect=>you clicked ${count} times`);
  // });
  return (
    <div>
      <p>you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <Router>
        <ul>
          <li>
            {" "}
            <Link to="/">首页</Link>{" "}
          </li>
          <li>
            <Link to="/list/">列表</Link>{" "}
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
}
export default Example3;
