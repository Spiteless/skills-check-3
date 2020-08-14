import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer.js'
import { loginUser } from '../../ducks/reducer.js'

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',

        }
    }

    login = (req, res) => {
        const { username, password } = this.state
        console.log("login with:", username, password)
        axios.post('/auth/login', { username, password }).then(res => {
            this.props.loginUser(res.data);
            this.props.history.push("/dashboard");
            console.log('Login success with:', res.data)
        }).catch(err => {
            console.log(err);
            alert('Login Failed')
        })
    }

    register = () => {
        const { username, password } = this.state
        console.log("register with:", username, password)
        axios.post('/auth/register', { username, password }).then(res => {
            this.props.loginUser(res.data);
            this.props.history.push("/dashboard");
            console.log("Register success with", res.data)

        }).catch(err => {
            console.log(err);
            alert('Register Failed')
        })
    }

    handleChangeUniversal = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.name, e.target.value, this.state)
    }

    render() {
        const { username, password } = this.state
        return (
            <div className="Auth">
                <div className="auth-container">
                    <img alt="logo" src={require('../../media/logo.png')}></img>
                    <div className="auth-row">
                        <h1>Helo</h1>
                    </div>
                    <div className="auth-row">
                        <h2 className="auth-sub-head">Username:</h2>
                        <input
                            className="auth-input"
                            type="text"
                            onChange={e => this.handleChangeUniversal(e)}
                            name="username"
                            value={username}
                            placeholder="username"
                            className="auth-input"
                        />
                    </div>
                    <div className="auth-row">
                        <h2 className="auth-sub-head">Password:</h2>
                        <input
                            className="auth-input"
                            type="password"
                            onChange={e => this.handleChangeUniversal(e)}
                            name="password"
                            value={password}
                            placeholder="password"
                            className="auth-input"
                        />
                    </div>
                    <div className="auth-button-container">
                        <button
                            className="auth-button btn-dark"
                            onClick={this.login}
                        >Login</button>
                        <button
                            className="auth-button btn-dark"
                            onClick={this.register}
                        >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

// export default Auth;

const mapStateToProps = state => state;

export default connect(mapStateToProps, { loginUser })(Auth);