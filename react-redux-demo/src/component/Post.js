import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

 class Post extends Component {
    handleClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
        render() {
        const post=this.props.post?(
            <div>
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div>
                    <button onClick={this.handleClick}>删除博客</button>
                </div>
            </div>
        ):(
            <div>博客正在加载...</div>
        )
        return (
            <div>
                {post}
            </div>
        )
    }
}
// 组件如果想得到 state, 创建方法 mapstatetoprops,相当于从 store 映射状态，
// 将状态作为 props 返回给组件 home,这样 home 就能拿到 state,mapstatetoprops 返回的内容就是我们想拿到的数据

const mapStateToProps=(state,ownProps)=>{
    // post_id为 path='/:post_id' 这里的id
    let id=ownProps.match.params.post_id
    return {
        post:state.posts.find(post=>post.id===id)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        // {type:'DELETE_POST',id:id}是一个action行为,
        // 可创建一个actions，进行分离，可在这个action中进行其他的各种操作
        deletePost:(id)=>dispatch(deletePost(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)