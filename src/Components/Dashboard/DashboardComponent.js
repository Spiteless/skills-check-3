import React from 'react'
import { Link } from "react-router-dom";

const DashboardComponent = (props) => {
    const { title, post_img, content, author, post_id } = props
    const img_src = `https://robohash.org/` + author

    return (
        <Link to={`/post/${post_id}` }>
            <div className="Dashboard-Component">

                <div className="dash-row">
                    <h2 className="dashboard-title">{title}</h2>
                    <div className="dashboard-author-box">
                        <p>by {(author) ? author : "NO_AUTHOR_ID"}</p>
                        <img className="dashboard-author-pic" alt={"author: " + author} src={img_src} />
                    </div>
                </div>
            </div>
        </Link>

    )

}






export default DashboardComponent