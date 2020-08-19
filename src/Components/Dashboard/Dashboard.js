
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: '',
            checkbox: true,
            posts: []
        }
        this.getPosts = this.getPosts.bind(this)
    }

    getPosts = () => {
        axios.get(`/api/posts/`).then((res) => {
            this.setState({ posts: res.data })
            console.log('Dashboard:Get Posts', res.data)
            // this.props.history.push("/dashboard");
        });
    }
    componentDidMount() {
        this.getPosts()
    }

    handleChangeUniversal = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.name, e.target.value, this.state)
    }

    render() {
        const posts = (post) => {return ( 
                <div className="post-container">
                        <h2>This is a post placeholder</h2>
                        <p>{post.title}</p>
                        <p>{post.post_img}</p>
                        <p>{post.content}</p>

                </div>)
        }
        const mappedPosts = (
            <div className="mapped"> 
                {console.log(this.state.posts)}
                <h3>Mapped posts section</h3>
                {this.state.posts.map(posts)}
            </div>
        )

        return (
            <div className="Dashboard">

                <div className="dashboard-container dashboard-filter">
                    <input type="text" placeholder="Search by Title" />
                    <div className="dashboard-search-icon">
                        {/* <p>Search</p> */}
                        <img className="dashboard-search-button" src={require('../../media/search.png')} alt=""/>
                        <button>Reset</button>
                        <div className="left">
                            <input type="checkbox"/> <p>My Posts</p>
                        </div>
                    </div>
                    <div className="dashboard-checkbox">
                    </div>
                </div>
                {mappedPosts}
            </div>
        )

    }
}

export default Dashboard;