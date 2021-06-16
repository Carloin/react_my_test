import React, { useMemo, useState } from 'react'

export default function Example7() {
  const [a,setA]=useState('a在等待')
  const [b,setB]=useState('b在等待')
  return (
    <div>
      <button onClick={()=>{setA(new Date().getTime())}}>a</button>
      <button onClick={()=>{setB(new Date().getTime()+'在干哈')}}>b</button>
    <ChildComponent name={a}>{b}</ChildComponent>
    </div>
  )
}
function ChildComponent({name,children}){
  function changeA(){
    console.log("子组件渲染了")
    return name+'，在？'
  }
  const actionA=useMemo(()=>changeA(name),[name])
  return(
    <>
    <div>{actionA}</div>
    <div>{children}</div>
    </>
  )
}
