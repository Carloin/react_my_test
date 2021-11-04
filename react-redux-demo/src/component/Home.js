import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
 class Home extends Component {
    render() {
        console.log(this.props);
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id}>
                        <div>
                            <Link to={'/'+post.id}>
                                <span>{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
        <div>没有博客文章进行显示！</div>
        )
       return(
           <div>
               <h3>Home页面</h3>
                {postList}
           </div>
       )
    }
}
const mapStateToProps=(state)=>{
    // state.posts获取reducer中的数据,并返回
    return {
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Home)