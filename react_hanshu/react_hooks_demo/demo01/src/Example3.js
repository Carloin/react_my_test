import React, { useState, useEffect } from "react";
// 1.useEffect()基本使用
function Example3() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect=>you clicked ${count} times`);
  });
  return (
    <div>
      <p>you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >click me</button>
    </div>
  );
}
export default Example3;
