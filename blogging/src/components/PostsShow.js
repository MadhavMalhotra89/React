import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => this.props.history.push('/'));
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" >Back To Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)} >Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>           
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {
    fetchPost: fetchPost,
    deletePost: deletePost
})(PostsShow);