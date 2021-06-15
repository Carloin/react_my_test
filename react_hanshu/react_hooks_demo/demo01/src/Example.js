import React, { useState } from 'react'
// 1.useState()基本使用
function Example(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>{setCount(count+1)}}></button>
        </div>
    )
}
export default Example