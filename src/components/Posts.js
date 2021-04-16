import React, {Component} from 'react';
import PostItem from "./PostItem";

class Posts extends Component {
    state = {
        posts: [
            {id: 1, title: "Title of the post", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur et excepturi, hic, impedit ipsum molestias natus nemo nihil qui quidem ullam voluptatibus? Blanditiis eius excepturi pariatur quasi sapiente soluta."},
            {id: 2, title: "Title of the post 2", description: "Lorem ipsum dolor sit amet 2, consectetur adipisicing elit. At consectetur et excepturi, hic, impedit ipsum molestias natus nemo nihil qui quidem ullam voluptatibus? Blanditiis eius excepturi pariatur quasi sapiente soluta."}
        ]
    }

    componentDidMount() {

    }

    renderPost = () => {
        return this.state.posts.length > 0 && this.state.posts.map( (post, index) => {
            return (
                <PostItem key={post.id} item={post} />
            )
        });
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