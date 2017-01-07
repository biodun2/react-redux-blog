import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/posts';

let id = 1;

class AddPost extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            success: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.refs.title.value;
        const post = this.refs.post.value;
        const postId = id++;

        this.props.actions.addPost(postId, title, post);
        this.refs.postForm.reset();
        this.setState({
            success: true
        })
    };

    render() {
        return (
            <div>
                <div className="col-sm-6 col-sm-offset-3">
                    { !this.state.success ? 
                        <h4 className="alert alert-info">Create a new post</h4> : 
                        <h4 className="alert alert-success">Post successfully created</h4>
                    }
                    <form className="form" ref="postForm" onSubmit={this.handleSubmit} role="form">
                        <div className="form-group">
                            <input type="text" ref="title" placeholder="title of the blog post" className="form-control" />
                        </div>
                        <div className="form-group">
                            <textarea ref="post" cols="4" rows="5" className="form-control"></textarea>
                        </div>
                        <button className="btn btn-primary">Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

AddPost.propTypes = {
    actions: React.PropTypes.shape({
        addPost: React.PropTypes.func.isRequired
    })
}

const mapStateToProps = (state) => {
    return {
        state,
        posts: state.posts
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)( AddPost );
export default PostContainer;