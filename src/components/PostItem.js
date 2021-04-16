import React from 'react';
import {Link} from "react-router-dom";

const PostItem = ({item}) => {
    let {id, title, description} = item;

    return (
        <div className={"row d-flex align-items-center mb-4"}>
            <div className="col-md-4">
                <img src={"/assets/images/newspaper.jpg"} className="single-post-image"  alt="single post image"/>
            </div>
            <div className="col-md-8">
                <h1>{title}</h1>
                <p>
                    {description}
                </p>

                <Link className={"btn btn-success custom-btn"} to={`/post/${id}`}>Read More</Link>
            </div>
        </div>
    );
};

export default PostItem;