import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            image: "",
            content: "",
            placeholder: "https://via.placeholder.com/550x250"
        };
    }


    handleChangeUniversal = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }

    addPost = () => {
        console.log('props:',this.props)
        console.log('state:',this.state)
        const { title, image, content } = this.state

        console.log("addPost:",{ title, image, content })
        axios.post(`/api/post/`, { title, image, content }).then(() => {
            this.props.history.push("/dashboard");
        });
    };

    render() {
        return (
            <div className="Form">
                <div className="form-container">
                    <p className="title">New Post</p>
                    <div className="form-input-box">
                        <p>Title</p>
                        <input
                            placeholder="title"
                            name="title"
                            onChange={e => this.handleChangeUniversal(e)}
                        />
                    </div>
                    <img
                        alt="preview"
                        src={
                            this.state.image
                                ? this.state.image
                                : this.state.placeholder
                        }
                    />
                    <div className="form-input-box">
                        <p>Image URL:</p>
                        <input
                            placeholder="image url"
                            name="image"
                            onChange={e => this.handleChangeUniversal(e)}
                        />
                    </div>
                    <div className="form-input-box">
                        <p>Content:</p>
                        <textarea
                            placeholder="content"
                            onChange={e => this.handleChangeUniversal(e)}
                            name="content"
                            value={this.state.content}
                            cols="30"
                            rows="5"
                        ></textarea>
                        <button
                            className="btn-dark form-btn"
                            onClick={this.addPost}
                        >Post</button>
                    </div>

                </div>
            </div>
        )

    }
}

export default Form;