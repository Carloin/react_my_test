import React,{useState} from 'react'
// 2.useState()多状态声明
export default function Example2() {
    const [age,setAge]=useState(18)
    const [sex,setSex]=useState('女')
    const [work,setWork]=useState(0)
    return (
        <div>
            <p>年龄是{age}</p>
            <p>性别是{sex}</p>
            <p>工作是{work}</p>
        </div>
    )
}
