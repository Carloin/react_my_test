import React, { useEffect, useRef, useState } from 'react'

export default function Example9() {
  const inputE1=useRef(null)
  const onButtonClick=()=>{
    inputE1.current.value="test"
    console.log(inputE1)
  }
  const [text,setText]=useState('mytest')
  const textRef=useRef()
  useEffect(()=>{
    textRef.current=text
    console.log('textRef.current：',textRef.current)
  })
  return (
    <>
    <input ref={inputE1} type="text" />
    <button onClick={onButtonClick}>在input上展示文字</button>
    <br />
    <br />
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    </>
  )
}
