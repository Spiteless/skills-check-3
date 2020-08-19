
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
    }

    getPosts = () => {
            axios.get(`/api/posts/`).then((res) => {
                this.setState({posts: res.data})
                console.log(res.data)
                // this.props.history.push("/dashboard");
            });
    }
    componentDidMount(){

    }

    handleChangeUniversal = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.name, e.target.value, this.state)
    }

    render() {
        const mappedPosts = (
            <div className="mapped"><h2>MAPPED POSTS</h2></div>
        )

        return (
            <div className="Dashboard">

                <div className="dashboard-container dashboard-filter">
                    <input type="text" placeholder="Search by Title" />
                </div>
                <div className="dashboard-search-box">
                    
                </div>
                <div className="dashboard-checkbox">
                    
                </div>
                    {mappedPosts}
            </div>
        )

    }
}

export default Dashboard;