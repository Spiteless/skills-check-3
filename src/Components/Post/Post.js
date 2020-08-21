import React from 'react';
import axios from 'axios'

const Post = (props) => {
    console.log("/POST props:", props)
    const getPost = () => {
        axios.get(`/api/post/${props.match.params.postid}`).then((res) => {
            this.setState({ posts: res.data })
            console.log('Dashboard:Get Posts', res.data)
            // this.props.history.push("/dashboard");
        });
    }

    const data = getPost()
    console.log(data)

    return <div> This is the post component</div>
}

export default Post;