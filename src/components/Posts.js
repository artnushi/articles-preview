import React, {Component} from 'react';
import PostItem from "./PostItem";
import axios from "axios";
import {has} from "../utils/helpers";
import Loader from "./Loader";

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get("http://cloverlabs.io/wp-json/wp/v2/posts").then( (response) => {
            this.setState({
                posts: response.data
            })
        }, () => {
            console.log('failed response')
        })
    }

    renderPost = () => {
        let {posts} = this.state;

        return has(posts) ? posts.map( (post, index) => {
            return (
                <PostItem key={post.id} item={post} />
            )
        })
        :
        <Loader />;
    }

    render() {

        return (
            <>
                <div className="posts">
                    {this.renderPost()}
                </div>
            </>
        );
    }
}

export default Posts;