
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DashboardComponent from './DashboardComponent'

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
        axios.get(`/api/posts-all/`).then((res) => {
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
        const posts = (post) => {
            return (
                <DashboardComponent
                    title={post.title}
                    author={post.username}
                    key={post.post_id}
                    post_id={post.post_id}
                />
                // <div className="post-container">
                //     <h2>This is a post placeholder</h2>
                //     <p>{post.title}</p>
                //     <p>{post.post_img}</p>
                //     <p>{post.content}</p>

                // </div>
                )
        }
        const mappedPosts = (
            <div className="mapped">
                {console.log("Dashboard posts:", this.state.posts)}
                <h3>Mapped posts section</h3>
                {this.state.posts.map(posts)}
            </div>
        )

        return (
            <div className="Dashboard">

                <div className="dashboard-container mom-unit">
                    <div className="dashboard-filter dashboard-search-container">
                        <input type="text" placeholder="Search by Title" />
                        <img className="dashboard-search-button" src={require('../../media/search.png')} alt="" />

                        <button>Reset</button>

                    </div>
                    <div className="dashboard-checkbox left">
                        <p>My Posts</p>
                        <input type="checkbox" />
                    </div>
                </div>
                {mappedPosts}
            </div>
        )

    }
}

const mapStateToProps = reduxState => {
    console.log("reduxState in Dashboard:", reduxState)

    return {
        userId: reduxState.userId,
        placeholder: "https://via.placeholder.com/550x250"
    };
};

export default connect(mapStateToProps, {})(Dashboard);