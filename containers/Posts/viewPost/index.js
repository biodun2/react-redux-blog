import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class ViewPost extends React.Component {

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
            
            { this.props.post.map( (p) => 
                <div className="well" style={{background: 'white'}} key={p.postId}>
                    <h2 className="lead">
                        <Link to={`/posts/${p.postId}`}>{p.title.toUpperCase()}</Link></h2>
                    <p>{p.post.slice(0, 300)}</p> 
                    <Link to={`/posts/${p.postId}`}>Readmore</Link>
                    <hr /> 
                </div> 
            )}
            </div>
        )
    }
}

ViewPost.propTypes = {
    post: React.PropTypes.shape({
         title: React.PropTypes.string.isRequired,
         post: React.PropTypes.string.isRequired
    })
}

export default ViewPost;