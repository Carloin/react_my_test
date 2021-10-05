import React,{useState} from 'react'

const Index=()=>{
  const [count,setCount]=useState(0)
  const [obj,setObj]=useState({name:"zhangsan"})
  const [arr,setArr]=useState([1,2,3])
  const [func,setFunc]=useState(()=>{
    return {name:'wangwu'}
  })
  return (
    <>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>chang-count</button>
    <h2>{obj.name}--{obj.age}</h2>
    <button onClick={()=>setObj({...obj,age:18})}>chang-count</button>
    <h2>{arr}</h2>
    <button onClick={()=>setArr(()=>{arr.push(4);return [...arr]})}>chang-arr</button>
    </>
  )
}
export default Index