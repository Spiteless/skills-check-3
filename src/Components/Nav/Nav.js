import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logoutUser } from "../../ducks/reducer";
import axios from 'axios'

// import InnerBgImg from "../../assets/static/img/banner/inner_banner_bg_static.jpg";
// return (
//     <div className="inner_banner" style={{ backgroundImage: "url(" + InnerBgImg +")" }}></div>



const Nav = (props) => {
    // let backgroundImage = require(`https://robohash.org/${props.username}`)
    console.log("Nav props:", props)
    const bgimage = (props.profilePic) ? props.profilePic : `https://robohash.org/` + props.username

    useEffect( () => {
        props.getUser()
        console.log("useEffect has run")
    }, [])

    

    return (

        <nav className="Nav">
            <div className="nav-profile-container">

                <img className="nav-profile-pic" src={bgimage} />

                <div className="elem">
                    <p>{props.username}</p>

                </div>
            </div>

            <div className="nav-links">
                <Link to="/dashboard">
                    <img className="nav-img" alt="Home" src={require('../../media/home.png')}></img>
                </Link>
                <Link to="/new">
                    <img className="nav-img" alt="New" src={require('../../media/new.png')}></img>
                </Link>
                <Link to="/">
                    <img className="nav-img logout" alt="Log Out" src={require('../../media/logout.png')}></img>
                </Link>
            </div>
        </nav>
    )

}

const mapStateToProps = reduxState => {
    
    // return reduxState

    const { username, profilePic, userId } = reduxState.user;
    return {
        username,
        profilePic,
        userId
    };


};

export default connect(mapStateToProps, { getUser, logoutUser })(Nav);