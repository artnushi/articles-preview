import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostItem extends Component {

    createMarkup = () => {
        return {__html: this.props.item.title.rendered};
    }

    render() {
        let {item} = this.props;
        let id = item.id;

        return (
            <div className={"row d-flex align-items-center mb-4 custom-box-shadow"}>
                <div className="col-md-4">
                    <img src={"/assets/images/newspaper.jpg"} className="single-post-image"  alt="single post image"/>
                </div>
                <div className="col-md-8 my-3 my-md-0">
                    <h2 dangerouslySetInnerHTML={this.createMarkup()} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolor eum facere
                        magni maiores nihil quia quibusdam reiciendis tenetur. Asperiores autem dolor expedita perferendis
                        provident quasi ratione vel veritatis.
                    </p>
                    <Link className={"btn btn-success custom-btn"} to={`/post/${id}`}>Read More</Link>
                </div>
            </div>
        );
    }
}

export default PostItem;