import React, {Component} from 'react';

class SinglePost extends Component {

    state = {
        postId: parseInt(this.props.match.params.id)
    }

    componentDidMount() {
        console.log('post id', this.state.postId)
        console.log('single posts', this.props.match)
    }

    render() {
        return (
            <>
                Single post render
            </>
        );
    }
}

export default SinglePost;