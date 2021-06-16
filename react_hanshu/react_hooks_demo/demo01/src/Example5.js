import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 1.useContex的使用

const CountContexta = createContext();
function Counter() {
  let count = useContext(CountContexta);
  return <h2>{count}</h2>;
}

function Example4() {
  const [count, setCount] = useState(0);

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
      <CountContexta.Provider value={count}>
        <Counter />
      </CountContexta.Provider>
    </div>
  );
}
export default Example4;
