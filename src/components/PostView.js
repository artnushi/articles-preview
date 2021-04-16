import React, {Component} from 'react';
import axios from "axios";
import Loader from "./Loader";
import SocialIcons from "./SocialIcons";

class PostView extends Component {

    state = {
        postId: parseInt(this.props.match.params.id),
        post: null
    }

    componentDidMount() {
        let postId = this.state.postId;

        this.fetchPost(postId);
    }

    fetchPost = (id) => {
        axios.get(`https://cloverlabs.io/wp-json/wp/v2/posts/${id}`).then( (response) => {
            this.setState({
                post: response.data
            })
        }, () => {
            console.log('failed response')
        })
    }

    createMarkup = () => {
        return {__html: this.state.post.content.rendered};
    }

    renderPost = () => {
        if (this.state.post) {
            let {rendered} = this.state.post.title;

            return (
                <div className="row">
                    <div className="col-md-12 custom-box-shadow p-0">
                        <img src={"/assets/images/newspaper.jpg"} className="single-post-image"  alt="single post image"/>
                        <div className="post-title">
                            <h1>{rendered}</h1>
                        </div>
                        <div className="d-flex justify-content-end">
                            <SocialIcons />
                        </div>

                        <div className={'m-4'} dangerouslySetInnerHTML={this.createMarkup()} />
                    </div>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
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

export default PostView;