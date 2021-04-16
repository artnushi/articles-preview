import React from 'react';
import {Link} from "react-router-dom";

const PostItem = ({item}) => {
    let {id} = item;
    let {rendered} = item.title;

    return (
        <div className={"row d-flex align-items-center mb-4 custom-box-shadow"}>
            <div className="col-md-4">
                <img src={"/assets/images/newspaper.jpg"} className="single-post-image"  alt="single post image"/>
            </div>
            <div className="col-md-8">
                <h5>{rendered}</h5>
                <p>
                    {/*{description}*/}

                </p>
                <Link className={"btn btn-success custom-btn"} to={`/post/${id}`}>Read More</Link>
            </div>
        </div>
    );
};

export default PostItem;